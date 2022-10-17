import { DAY, GenresList, MovieList, TimeWindow } from "../types/TheMovieDB";
import { movieActionTypes } from "./ActionTypes";

// FETCH_GENRES
export const fetchGenresRequest = () => ({
  type: movieActionTypes.FETCH_GENRES_REQUEST,
});

export const fetchGenresError = (error: string) => ({
  type: movieActionTypes.FETCH_GENRES_ERROR,
  error,
});

export const fetchGenresSuccess = (genres: GenresList) => ({
  type: movieActionTypes.FETCH_GENRES_SUCCESS,
  genres,
});

export const fetchGenres = () => ({
  type: movieActionTypes.FETCH_GENRES,
});

// FETCH_TRENDING
export const fetchTrendingRequest = () => ({
  type: movieActionTypes.FETCH_TRENDING_REQUEST,
});

export const fetchTrendingError = (error: string) => ({
  type: movieActionTypes.FETCH_TRENDING_ERROR,
  error,
});

export const fetchTrendingSuccess = (trending: MovieList) => ({
  type: movieActionTypes.FETCH_TRENDING_SUCCESS,
  trending,
});

export const fetchTrending = (timeWindow: TimeWindow = DAY) => ({
  type: movieActionTypes.FETCH_TRENDING,
  timeWindow,
});

// FETCH_UPCOMING
export const fetchUpcomingRequest = () => ({
  type: movieActionTypes.FETCH_UPCOMING_REQUEST,
});

export const fetchUpcomingError = (error: string) => ({
  type: movieActionTypes.FETCH_UPCOMING_ERROR,
  error,
});

export const fetchUpcomingSuccess = (upcoming: MovieList) => ({
  type: movieActionTypes.FETCH_UPCOMING_SUCCESS,
  upcoming,
});

export const fetchUpcoming = () => ({
  type: movieActionTypes.FETCH_UPCOMING
});
