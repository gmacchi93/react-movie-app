import { AnyAction } from "redux";
import { takeLatest, put, call } from "redux-saga/effects";
import { movieActionTypes } from "../actions/ActionTypes";
import {
  fetchTrendingRequest,
  fetchTrendingError,
  fetchTrendingSuccess,
  fetchGenresRequest,
  fetchGenresSuccess,
  fetchGenresError,
  fetchUpcomingRequest,
  fetchUpcomingSuccess,
  fetchUpcomingError,
} from "../actions/MovieActions";
import MovieController from "../controllers/MovieController";
import { GenresList, MovieList } from "../types/TheMovieDB";

function* onfetchGenres(action: AnyAction) {
  try {
    yield put(fetchGenresRequest());
    const data: GenresList = yield call(MovieController.fetchGenres);
    yield put(fetchGenresSuccess(data));
  } catch (error: any) {
    yield put(fetchGenresError(error));
  }
}

function* onfetchTrending(action: AnyAction) {
  const { timeWindow } = action;
  try {
    yield put(fetchTrendingRequest());
    const data: MovieList = yield call(
      MovieController.fetchTrending,
      timeWindow
    );
    yield put(fetchTrendingSuccess(data));
  } catch (error: any) {
    yield put(fetchTrendingError(error));
  }
}

function* onfetchUpcoming(action: AnyAction) {
  try {
    yield put(fetchUpcomingRequest());
    const data: MovieList = yield call(MovieController.fetchUpcoming);
    yield put(fetchUpcomingSuccess(data));
  } catch (error: any) {
    yield put(fetchUpcomingError(error));
  }
}

function* MovieSaga() {
  yield takeLatest(movieActionTypes.FETCH_TRENDING, onfetchTrending);
  yield takeLatest(movieActionTypes.FETCH_UPCOMING, onfetchUpcoming);
  yield takeLatest(movieActionTypes.FETCH_GENRES, onfetchGenres);
}

export default MovieSaga;
