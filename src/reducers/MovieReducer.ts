import { AnyAction } from "redux";
import { movieActionTypes } from "../actions/ActionTypes";
import { Movie } from "../types/TheMovieDB";
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
};

const resultsMapping = (results:Movie[]) => {
  return results.map((movie: Movie) => {
    const release_date = movie.release_date
      ? new Date(movie.release_date)
      : null;
    const vote_average = (movie.vote_average / 2).toFixed(1);
    return {
      ...movie,
      release_date,
      vote_average,
    };
  });
}

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

const handlers = {
  [movieActionTypes.FETCH_TRENDING_SUCCESS]: onfetchTrendingSuccess,
  [movieActionTypes.FETCH_UPCOMING_SUCCESS]: onfetchUpcomingSuccess,
  [movieActionTypes.FETCH_GENRES_SUCCESS]: onfetchGenresSuccess,
};

export default createReducer(initialState, handlers);
