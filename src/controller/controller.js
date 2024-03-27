import MovieContainer from '../component/MovieContainer.js';
import MovieService from '../domain/MovieService.ts';
import createHeader from '../component/Header.js';
import PageNumberManager from '../domain/pageNumberManager.ts';
import { $ } from '../util/selector.js';
import toast from '../component/toast/toast.js';
import { MOVIE_LIST_TYPE } from '../constant/config';

export class App {
  #searchKeyword;
  #tryCount;
  #pageNumberManager;
  #movieService;
  #movieContainer;

  constructor() {
    this.#searchKeyword = '';
    this.#tryCount = 1;
    this.#pageNumberManager = new PageNumberManager();
    this.#pageNumberManager.setPageType(MOVIE_LIST_TYPE.popular.type);

    this.#movieService = new MovieService();
    this.#movieContainer = new MovieContainer({
      title: MOVIE_LIST_TYPE.popular.title,
      handleMoreButton: () => this.addMovieList(),
    });
  }

  async init() {
    createHeader();
    $('form.search-box').addEventListener('clickSearchButton', () => this.handleSearchButtonClick());
    $('header > img.logo').addEventListener('logoClickEvent', () => this.handleLogoClick());

    await this.addMovieList();
  }

  async addMovieList() {
    try {
      this.#movieContainer.createSkeletonList();
      const moviePageData = await this.fetchMoviePageData();
      this.#movieContainer.fillMovieDataToSkeletonList(moviePageData);
      this.#pageNumberManager.increase();
      this.#tryCount = 1;
    } catch (error) {
      this.handleRetryAddMovieList(error.message);
    }
  }

  handleLogoClick() {
    this.clearAndResetToPopularPage();
    this.addMovieList();
  }

  handleSearchButtonClick() {
    this.setSearchKeyword();
    if (this.#searchKeyword) {
      this.makeSearchPage();
    }
  }

  handleRetryAddMovieList(errorMessage) {
    toast(errorMessage);
    this.#movieContainer.removeSkeleton();
    this.#tryCount += 1;

    if (this.#tryCount > 5) {
      toast('재요청 가능한 횟수를 초과하였습니다.\n새로고침 후 다시 시도해 주세요.');
    } else {
      this.#movieContainer.createRetryButton(() => this.addMovieList());
    }
  }

  clearAndResetToPopularPage() {
    this.#movieContainer.clearMovieList();
    this.#movieContainer.setTitle(MOVIE_LIST_TYPE.popular.title);
    this.#pageNumberManager.setPageType(MOVIE_LIST_TYPE.popular.type);
    this.resetSearchKeyword();
  }

  resetSearchKeyword() {
    this.#searchKeyword = '';
    $('form.search-box').reset();
  }

  async fetchMoviePageData() {
    const isSearching = this.#searchKeyword !== '';
    const listType = isSearching ? MOVIE_LIST_TYPE.search.type : MOVIE_LIST_TYPE.popular.type;
    const pageNumber = this.#pageNumberManager.getPageNumber();

    const moviePageData = await this.fetchMovieData(listType, pageNumber, this.#searchKeyword);
    return moviePageData;
  }

  async fetchMovieData(listType, pageNumber, searchKeyword = '') {
    const fetchFunctions = {
      [MOVIE_LIST_TYPE.search.type]: this.#movieService.fetchSearchResult.bind(this.#movieService),
      [MOVIE_LIST_TYPE.popular.type]: this.#movieService.fetchPopularMovieList.bind(this.#movieService),
    };

    const fetchFunction = fetchFunctions[listType];
    const params = listType === MOVIE_LIST_TYPE.search.type ? { pageNumber, searchKeyword } : pageNumber;

    return fetchFunction(params);
  }

  setSearchKeyword() {
    const searchKeyword = $('form.search-box > input').value.trim();
    if (!searchKeyword) {
      toast('검색어를 입력해주세요.');
      return;
    }
    this.#searchKeyword = searchKeyword;
  }

  makeSearchPage() {
    this.#pageNumberManager.setPageType(MOVIE_LIST_TYPE.search.type);

    this.setSearchKeyword();
    this.#movieContainer.clearMovieList();
    this.#movieContainer.setTitle(MOVIE_LIST_TYPE.search.title(this.#searchKeyword));

    this.addMovieList();
  }
}
