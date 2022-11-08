import { Credits, DAY, GenresList, MovieDetail, MovieList, TimeWindow, WatchProviders } from "../types/TheMovieDB";
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

// FETCH_DETAIL
export const fetchDetailRequest = () => ({
  type: movieActionTypes.FETCH_DETAIL_REQUEST,
});

export const fetchDetailError = (error: string) => ({
  type: movieActionTypes.FETCH_DETAIL_ERROR,
  error,
});

export const fetchDetailSuccess = (detail: MovieDetail) => ({
  type: movieActionTypes.FETCH_DETAIL_SUCCESS,
  detail,
});

export const fetchDetail = (id:string) => ({
  type: movieActionTypes.FETCH_DETAIL,
  id
});

// FETCH_WATCH_PROVIDERS
export const fetchWatchProvidersRequest = () => ({
  type: movieActionTypes.FETCH_WATCH_PROVIDERS_REQUEST,
});

export const fetchWatchProvidersError = (error: string) => ({
  type: movieActionTypes.FETCH_WATCH_PROVIDERS_ERROR,
  error,
});

export const fetchWatchProvidersSuccess = (data: WatchProviders) => ({
  type: movieActionTypes.FETCH_WATCH_PROVIDERS_SUCCESS,
  data,
});

export const fetchWatchProviders = (id:string) => ({
  type: movieActionTypes.FETCH_WATCH_PROVIDERS,
  id
});

// FETCH_CREDITS
export const fetchCreditsRequest = () => ({
  type: movieActionTypes.FETCH_CREDITS_REQUEST,
});

export const fetchCreditsError = (error: string) => ({
  type: movieActionTypes.FETCH_CREDITS_ERROR,
  error,
});

export const fetchCreditsSuccess = (data: Credits) => ({
  type: movieActionTypes.FETCH_CREDITS_SUCCESS,
  data,
});

export const fetchCredits = (id:string) => ({
  type: movieActionTypes.FETCH_CREDITS,
  id
});

// FETCH_SIMILAR_MOVIES
export const fetchSimilarMoviesRequest = () => ({
  type: movieActionTypes.FETCH_SIMILAR_MOVIES_REQUEST,
});

export const fetchSimilarMoviesError = (error: string) => ({
  type: movieActionTypes.FETCH_SIMILAR_MOVIES_ERROR,
  error,
});

export const fetchSimilarMoviesSuccess = (data: MovieList) => ({
  type: movieActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS,
  data,
});

export const fetchSimilarMovies = (id:string) => ({
  type: movieActionTypes.FETCH_SIMILAR_MOVIES,
  id
});

// SEARCH_MOVIE
export const searchMovieRequest = () => ({
  type: movieActionTypes.SEARCH_MOVIE_REQUEST,
});

export const searchMovieError = (error: string) => ({
  type: movieActionTypes.SEARCH_MOVIE_ERROR,
  error,
});

export const searchMovieSuccess = (data: MovieList) => ({
  type: movieActionTypes.SEARCH_MOVIE_SUCCESS,
  data,
});

export const searchMovie = (query:string, page?: number) => ({
  type: movieActionTypes.SEARCH_MOVIE,
  query,
  page
});

