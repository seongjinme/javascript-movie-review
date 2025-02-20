export const BASE_URL = 'https://api.themoviedb.org/3';
export const IMAGE_BASE_URL = 'https://image.tmdb.org/t/p/w';

export const ENDPOINT = {
  GET: {
    POPULAR_MOVIES: '/movie/popular',
    MOVIE_SEARCH: '/search/movie',
    MOVIE_DETAIL: (id: number) => `/movie/${id.toString()}`,
  },
};

export const MOVIE_LIST_TYPE = {
  search: {
    type: 'search',
    title: (keyword: string) => `"${keyword}" 검색 결과`,
  },
  popular: {
    type: 'popular',
    title: '지금 인기 있는 영화',
  },
} as const;

export const STORAGE = {
  userMovies: 'userMovies',
} as const;

export const CONFIG = {
  scoreDecimalPlaces: 1,
  userScore: {
    2: '최악이에요',
    4: '별로에요',
    6: '보통이에요',
    8: '재미있어요',
    10: '명작이에요',
  },
  fetchRetryLimit: 5,
} as const;
