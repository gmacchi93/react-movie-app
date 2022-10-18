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
export interface Detail {
  movie: MovieDetail,
  watchProviders: Us,
  cast: Cast[],
  similarMovies: Movie[],
}

export interface MovieDetail {
  adult:                 boolean;
  backdrop_path:         string;
  belongs_to_collection: null;
  budget:                number;
  genres:                Genre[];
  homepage:              string;
  id:                    number;
  imdb_id:               string;
  original_language:     string;
  original_title:        string;
  overview:              string;
  popularity:            number;
  poster_path:           string;
  production_companies:  ProductionCompany[];
  production_countries:  ProductionCountry[];
  release_date:          Date;
  revenue:               number;
  runtime:               number;
  spoken_languages:      SpokenLanguage[];
  status:                string;
  tagline:               string;
  title:                 string;
  video:                 boolean;
  vote_average:          number;
  vote_count:            number;
}

export interface Genre {
  id:   number;
  name: string;
}

export interface ProductionCompany {
  id:             number;
  logo_path:      null | string;
  name:           string;
  origin_country: string;
}

export interface ProductionCountry {
  iso_3166_1: string;
  name:       string;
}

export interface SpokenLanguage {
  iso_639_1: string;
  name:      string;
}


export interface WatchProviders {
  id:      number;
  results: Results;
}

export interface Results {
  US: Us;
}

export interface Us {
  link:     string;
  rent:     Buy[];
  buy:      Buy[];
  flatrate: Buy[];
}

export interface Buy {
  display_priority: number;
  logo_path:        string;
  provider_id:      number;
  provider_name:    string;
}

export interface Credits {
  id:   number;
  cast: Cast[];
  crew: Cast[];
}

export interface Cast {
  adult:                boolean;
  gender:               number;
  id:                   number;
  known_for_department: Department;
  name:                 string;
  original_name:        string;
  popularity:           number;
  profile_path:         null | string;
  cast_id?:             number;
  character?:           string;
  credit_id:            string;
  order?:               number;
  department?:          Department;
  job?:                 string;
}

export enum Department {
  Acting = "Acting",
  Art = "Art",
  Camera = "Camera",
  CostumeMakeUp = "Costume & Make-Up",
  Crew = "Crew",
  Directing = "Directing",
  Editing = "Editing",
  Lighting = "Lighting",
  Production = "Production",
  Sound = "Sound",
  VisualEffects = "Visual Effects",
  Writing = "Writing",
}