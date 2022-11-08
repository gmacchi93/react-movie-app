import { AnyAction } from "redux";
import { movieActionTypes } from "../actions/ActionTypes";
import { Credits, Department, Movie, MovieList, WatchProviders } from "../types/TheMovieDB";
import createReducer from "../utils/CreateReducer";

const MOVIES_INITIAL_STATE = {
  page: 1,
  results: [],
  total_pages: 0,
  total_results: 0,
};

const initialState = {
  genres: [],
  trending: MOVIES_INITIAL_STATE,
  upcoming: MOVIES_INITIAL_STATE,
  detail: null,
};

const movieMapping = (movie: Movie) => {
  const release_date = movie.release_date ? new Date(movie.release_date) : null;
  const vote_average = (movie.vote_average / 2).toFixed(1);
  return {
    ...movie,
    release_date,
    vote_average,
  };
};

const resultsMapping = (results: Movie[]) => {
  return results.map((movie: Movie) => {
    const movieMapped = movieMapping(movie);
    return movieMapped;
  });
};

const onfetchGenresSuccess = (state: any, action: AnyAction) => {
  const {
    genres: { genres },
  } = action;

  return {
    ...state,
    genres,
  };
};

const onfetchTrendingSuccess = (state: any, action: AnyAction) => {
  const { trending } = action;
  const results = resultsMapping(trending.results);

  return {
    ...state,
    trending: {
      ...trending,
      results,
    },
  };
};

const onfetchUpcomingSuccess = (state: any, action: AnyAction) => {
  const { upcoming } = action;
  const results = resultsMapping(upcoming.results);

  return {
    ...state,
    upcoming: {
      ...upcoming,
      results,
    },
  };
};

const onfetchDetailSuccess = (state: any, action: AnyAction) => {
  const { detail } = action;
  const movie = movieMapping(detail);

  return {
    ...state,
    detail: {
      ...state.detail,
      movie,
    },
  };
};

const onfetchWatchProvidersSuccess = (state: any, action: AnyAction) => {
  const data: WatchProviders = action.data;

  return {
    ...state,
    detail: {
      ...state.detail,
      watchProviders: data.results?.US,
    },
  };
};

const onfetchCreditsSuccess = (state: any, action: AnyAction) => {
  const data: Credits = action.data;

  return {
    ...state,
    detail: {
      ...state.detail,
      cast: data.cast.filter(person => person.known_for_department === Department.Acting).slice(0, 5),
    },
  };
};

const onfetchSimilarMovies = (state: any, action: AnyAction) => {
  const data: MovieList = action.data;
  const results = resultsMapping(data.results);

  return {
    ...state,
    detail: {
      ...state.detail,
      similarMovies: results
    },
  };
};

const onSearchMovie = (state: any, action: AnyAction) => {
  const data: MovieList = action.data;
  const {results:searchResults, ...other} = data;
  const results = resultsMapping(searchResults);

  return {
    ...state,
    searchResults: {
      ...other,
      results: other.page > 1 ? [...state.searchResults.results, ...results] : results,
    },
  };
};

const handlers = {
  [movieActionTypes.FETCH_GENRES_SUCCESS]: onfetchGenresSuccess,
  [movieActionTypes.FETCH_TRENDING_SUCCESS]: onfetchTrendingSuccess,
  [movieActionTypes.FETCH_UPCOMING_SUCCESS]: onfetchUpcomingSuccess,
  [movieActionTypes.FETCH_DETAIL_SUCCESS]: onfetchDetailSuccess,
  [movieActionTypes.FETCH_WATCH_PROVIDERS_SUCCESS]: onfetchWatchProvidersSuccess,
  [movieActionTypes.FETCH_CREDITS_SUCCESS]: onfetchCreditsSuccess,
  [movieActionTypes.FETCH_SIMILAR_MOVIES_SUCCESS]: onfetchSimilarMovies,
  [movieActionTypes.SEARCH_MOVIE_SUCCESS]: onSearchMovie,
};

export default createReducer(initialState, handlers);
