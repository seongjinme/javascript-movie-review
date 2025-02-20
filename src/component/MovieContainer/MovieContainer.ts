import { $, $OptionalSelector } from '../../util/selector';
import createButton from '../Button/Button';
import { injectMovieDataToItem } from '../MovieItem/MovieItem';
import { createSkeletonMovieList } from '../MovieList/MovieList';
import { MoviePageData } from '../../interface/MovieInterface';
import ASSETS from '../../constant/assets';
import InfiniteScroll from '../../util/InfiniteScroll';
import IN_APP_MESSAGE from '../../constant/inAppMessage';

interface MovieContainerParams {
  title: string;
  addMovieList: () => Promise<void>;
}

class MovieContainer {
  private movieListContainer: HTMLUListElement;
  private sectionTitle: HTMLHeadingElement;
  private skeletonList: HTMLLIElement[];
  private infiniteScroll: InfiniteScroll;

  constructor({ title, addMovieList }: MovieContainerParams) {
    this.movieListContainer = $<HTMLUListElement>('ul.item-list');
    this.sectionTitle = $<HTMLHeadingElement>('.item-view > h2');
    this.sectionTitle.textContent = title;
    this.skeletonList = [];
    this.infiniteScroll = new InfiniteScroll({
      targetElement: $<HTMLHeadingElement>('section.item-view'),
      callbackFunction: addMovieList,
      options: {
        root: null,
        rootMargin: '0px 0px 100px 0px',
        threshold: 0,
      },
    });
  }

  createSkeletonList() {
    this.removeRetryButton();
    this.infiniteScroll.disconnect();

    const skeletonMovieList = createSkeletonMovieList();
    skeletonMovieList.forEach((skeletonMovie) => {
      this.movieListContainer.appendChild(skeletonMovie);
    });

    this.skeletonList = skeletonMovieList;
    this.removeRetryButton();
  }

  removeSkeleton() {
    this.skeletonList.forEach((skeleton) => {
      skeleton.remove();
    });
  }

  async fillMovieDataToSkeletonList(
    { movieList, hasNextPage }: MoviePageData,
    onClick: (item: HTMLLIElement, movieId: number) => void,
  ) {
    this.setEmptySearchResult(movieList.length);

    const injectMovieDataToItemResults = this.skeletonList.map((item, i) => {
      if (i >= movieList.length) {
        item.remove();
        return Promise.resolve();
      }
      return injectMovieDataToItem({ item, movie: movieList[i].data, onClick });
    });

    await Promise.all(injectMovieDataToItemResults);

    this.skeletonList = [];
    if (hasNextPage) this.infiniteScroll.connect();
  }

  clearMovieList() {
    this.movieListContainer.replaceChildren();
  }

  createRetryButton(handleRetryButton: () => Promise<void>) {
    const retryButton = createButton({
      options: {
        type: 'button',
        id: 'retry-button',
        textContent: IN_APP_MESSAGE.retryButtonTextContent,
        variantClasses: ['full-width', 'primary'],
      },
      callbackFunction: () => handleRetryButton(),
    });
    $('.item-view').insertBefore(retryButton, $('ul.item-list'));
  }

  setTitle(title: string) {
    this.sectionTitle.textContent = title;
  }

  private createEmptySearchResult() {
    const emptyResultContainer = document.createElement('div');
    emptyResultContainer.classList.add('empty-result');

    const emptyResultImage = document.createElement('img');
    emptyResultImage.src = ASSETS.resultEmptyImage;

    const emptyResultHeader = document.createElement('p');
    const emptyResultDescription = document.createElement('p');
    emptyResultHeader.textContent = IN_APP_MESSAGE.emptyResultHeader;
    emptyResultDescription.textContent = IN_APP_MESSAGE.emptyResultDescription;

    emptyResultContainer.append(emptyResultImage, emptyResultHeader, emptyResultDescription);
    return emptyResultContainer;
  }

  private setEmptySearchResult(listLength: number) {
    const emptySearchResultParagraph = $OptionalSelector('div.empty-result');

    if (listLength > 0) {
      emptySearchResultParagraph?.remove();
    }

    if (listLength <= 0 && !emptySearchResultParagraph) {
      $('.item-view').appendChild(this.createEmptySearchResult());
    }
  }

  private removeRetryButton() {
    $OptionalSelector('#retry-button')?.remove();
  }
}

export default MovieContainer;
