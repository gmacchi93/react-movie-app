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
  fetchDetailRequest,
  fetchDetailSuccess,
  fetchDetailError,
  fetchWatchProvidersRequest,
  fetchWatchProvidersSuccess,
  fetchWatchProvidersError,
  fetchCreditsRequest,
  fetchCreditsSuccess,
  fetchCreditsError,
  fetchSimilarMoviesRequest,
  fetchSimilarMoviesSuccess,
  fetchSimilarMoviesError,
  searchMovieRequest,
  searchMovieSuccess,
  searchMovieError,
} from "../actions/MovieActions";
import MovieController from "../controllers/MovieController";
import { Credits, GenresList, MovieDetail, MovieList, WatchProviders } from "../types/TheMovieDB";

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

function* onfetchDetail(action: AnyAction) {
  const { id } = action;
  try {
    yield put(fetchDetailRequest());
    const data: MovieDetail = yield call(MovieController.fetchDetail, id);
    yield put(fetchDetailSuccess(data));
  } catch (error: any) {
    yield put(fetchDetailError(error));
  }
}

function* onfetchWatchProviders(action: AnyAction) {
  const { id } = action;
  try {
    yield put(fetchWatchProvidersRequest());
    const data: WatchProviders = yield call(MovieController.fetchWatchProviders, id);
    yield put(fetchWatchProvidersSuccess(data));
  } catch (error: any) {
    yield put(fetchWatchProvidersError(error));
  }
}

function* onfetchCredits(action: AnyAction) {
  const { id } = action;
  try {
    yield put(fetchCreditsRequest());
    const data: Credits = yield call(MovieController.fetchCredits, id);
    yield put(fetchCreditsSuccess(data));
  } catch (error: any) {
    yield put(fetchCreditsError(error));
  }
}

function* onfetchSimilarMovies(action: AnyAction) {
  const { id } = action;
  try {
    yield put(fetchSimilarMoviesRequest());
    const data: MovieList = yield call(MovieController.fetchSimilarMovies, id);
    yield put(fetchSimilarMoviesSuccess(data));
  } catch (error: any) {
    yield put(fetchSimilarMoviesError(error));
  }
}

function* onSearchMovie(action: AnyAction) {
  const { query, page = 1 } = action;
  try {
    yield put(searchMovieRequest());
    const data: MovieList = yield call(MovieController.searchMovie, query, page);
    yield put(searchMovieSuccess(data));
  } catch (error: any) {
    yield put(searchMovieError(error));
  }
}

function* MovieSaga() {
  yield takeLatest(movieActionTypes.FETCH_GENRES, onfetchGenres);
  yield takeLatest(movieActionTypes.FETCH_TRENDING, onfetchTrending);
  yield takeLatest(movieActionTypes.FETCH_UPCOMING, onfetchUpcoming);
  yield takeLatest(movieActionTypes.FETCH_DETAIL, onfetchDetail);
  yield takeLatest(movieActionTypes.FETCH_WATCH_PROVIDERS, onfetchWatchProviders);
  yield takeLatest(movieActionTypes.FETCH_CREDITS, onfetchCredits);
  yield takeLatest(movieActionTypes.FETCH_SIMILAR_MOVIES, onfetchSimilarMovies);
  yield takeLatest(movieActionTypes.SEARCH_MOVIE, onSearchMovie);
}

export default MovieSaga;
