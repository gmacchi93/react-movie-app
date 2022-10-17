export interface MovieList {
  page: number;
  results: Movie[];
  total_pages: number;
  total_results: number;
}

export interface Movie {
  adult?: boolean;
  backdrop_path: string;
  genre_ids: number[];
  id: number;
  original_language: string;
  original_title?: string;
  overview: string;
  poster_path: string;
  release_date?: Date;
  title: string;
  video?: boolean;
  vote_average: number;
  vote_count: number;
  popularity: number;
  first_air_date?: Date;
  name?: string;
  origin_country?: string[];
  original_name?: string;
}

export const DAY = "day";
export const WEEK = "week";

export type TimeWindow = typeof DAY | typeof WEEK;

export interface GenresList {
    genres: Genre[];
}

export interface Genre {
    id:   number;
    name: string;
}
