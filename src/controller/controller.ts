import MovieService from '../domain/MovieService';
import PageNumberManager from '../domain/pageNumberManager';
import MovieContainer from '../component/MovieContainer/MovieContainer';
import createHeader from '../component/Header/Header';
import toast from '../component/toast/toast';
import { $ } from '../util/selector';
import { CONFIG, MOVIE_LIST_TYPE } from '../constant/config';
import IN_APP_MESSAGE from '../constant/inAppMessage';
import ERROR_MESSAGE from '../constant/errorMessage';
import MovieDetailModal from '../component/Modal/MovieDetailModal';
import { UserScoreParams } from '../interface/MovieInterface';
import { removeLoadingAnimation, showLoadingAnimation } from '../component/LoadingAnimation/LoadingAnimation';

export class App {
  private searchKeyword;
  private tryCount;
  private pageNumberManager;
  private movieService;
  private movieContainer;
  private movieDetailModal;

  constructor() {
    this.searchKeyword = '';
    this.tryCount = 0;
    this.pageNumberManager = new PageNumberManager();
    this.pageNumberManager.setPageType(MOVIE_LIST_TYPE.popular.type);

    this.movieService = new MovieService();
    this.movieContainer = new MovieContainer({
      title: MOVIE_LIST_TYPE.popular.title,
      addMovieList: () => this.addMovieList(),
    });

    this.movieDetailModal = new MovieDetailModal({
      id: 'movie-detail-modal',
      onUpdateUserScore: ({ movieId, userScore }) => this.handleUpdateUserScore({ movieId, userScore }),
    });
  }

  handleUpdateUserScore({ movieId, userScore }: UserScoreParams) {
    this.movieService.setUserScore({ movieId, userScore });
    toast(IN_APP_MESSAGE.updateUserScore, $('#movie-detail-modal'));
  }

  async init() {
    createHeader();
    $('form.search-box').addEventListener('clickSearchButton', () => this.handleSearchButtonClick());
    $('header > img.logo').addEventListener('logoClickEvent', () => this.handleLogoClick());
    document.body.appendChild(this.movieDetailModal.render());

    await this.addMovieList();
  }

  async addMovieList() {
    try {
      this.movieContainer.createSkeletonList();
      const moviePageData = await this.fetchMoviePageData();
      this.movieContainer.fillMovieDataToSkeletonList(moviePageData, this.handleMovieItemClick.bind(this));
      this.pageNumberManager.increase();
      this.tryCount = 0;
    } catch (error) {
      this.retryAddMovieList(error as Error);
    }
  }

  handleLogoClick() {
    this.clearAndResetToPopularPage();
    this.addMovieList();
  }

  handleSearchButtonClick() {
    this.setSearchKeyword();
    if (this.searchKeyword) {
      this.makeSearchPage();
    }
  }

  async handleMovieItemClick(item: HTMLLIElement, movieId: number) {
    showLoadingAnimation(item);
    document.body.classList.add('overflow-hidden');
    const movieDetail = await this.fetchMovieDetail(movieId);

    this.movieDetailModal.renderMovieDetailContainer({ movie: movieDetail.data });
    this.movieDetailModal.showModal();
    removeLoadingAnimation(item);
  }

  retryAddMovieList(error: Error) {
    if (this.tryCount >= CONFIG.fetchRetryLimit) {
      toast(ERROR_MESSAGE.RETRY_LIMIT_EXCEEDED);
      return;
    }

    toast(error.message);
    this.movieContainer.removeSkeleton();
    this.movieContainer.createRetryButton(() => this.addMovieList());
    this.tryCount += 1;
  }

  clearAndResetToPopularPage() {
    this.movieContainer.clearMovieList();
    this.movieContainer.setTitle(MOVIE_LIST_TYPE.popular.title);
    this.pageNumberManager.setPageType(MOVIE_LIST_TYPE.popular.type);
    this.resetSearchKeyword();
  }

  resetSearchKeyword() {
    this.searchKeyword = '';
    $<HTMLFormElement>('form.search-box').reset();
  }

  async fetchMoviePageData() {
    const isSearching = this.searchKeyword !== '';
    const listType = isSearching ? MOVIE_LIST_TYPE.search.type : MOVIE_LIST_TYPE.popular.type;
    const pageNumber = this.pageNumberManager.getPageNumber();
    const moviePageData = await this.movieService.fetchMovieData({
      listType,
      pageNumber,
      searchKeyword: this.searchKeyword,
    });
    return moviePageData;
  }

  async fetchMovieDetail(movieId: number) {
    const movieDetail = await this.movieService.fetchMovieDetail(movieId);
    return movieDetail;
  }

  setSearchKeyword() {
    const searchKeyword = $<HTMLInputElement>('form.search-box > input').value.trim();
    if (!searchKeyword) {
      toast(ERROR_MESSAGE.SEARCH_KEYWORD_EMPTY);
      return;
    }
    this.searchKeyword = searchKeyword;
  }

  makeSearchPage() {
    this.pageNumberManager.setPageType(MOVIE_LIST_TYPE.search.type);

    this.setSearchKeyword();
    this.movieContainer.clearMovieList();
    this.movieContainer.setTitle(MOVIE_LIST_TYPE.search.title(this.searchKeyword));

    this.addMovieList();
  }
}
