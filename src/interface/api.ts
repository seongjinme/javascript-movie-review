export interface ResponseMovieList {
  page: number;
  results: ResponseMovie[];
  total_pages: number;
  total_results: number;
}

export interface ResponseMovie {
  adult: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  release_date: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
}

export interface QueryUrl {
  baseUrl: string;
  endpoint: string;
  query: { [key: string]: string | number | boolean };
}

export interface fetchAPIParams {
  url: string;
  method: 'GET' | 'POST' | 'PUT' | 'DELETE';
  body?: object;
}
