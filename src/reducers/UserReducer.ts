import { AnyAction } from "redux";
import { userActionTypes } from "../actions/ActionTypes";
import { DAY } from "../types/TheMovieDB";
import createReducer from "../utils/CreateReducer";

const initialState = {
  trendingTimeWindow: DAY,
};

const onToggleTrendingTimeWindow = (state: any, action: AnyAction) => {
  const { timeWindow: trendingTimeWindow } = action;

  return {
    ...state,
    trendingTimeWindow,
  };
};

const handlers = {
  [userActionTypes.TOGGLE_TRENDING_TIME_WINDOW]: onToggleTrendingTimeWindow,
};

export default createReducer(initialState, handlers);
