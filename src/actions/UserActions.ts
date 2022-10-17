import { DAY, TimeWindow } from "../types/TheMovieDB";
import { userActionTypes } from "./ActionTypes";

export const toggleTrendingTimeWindow = (timeWindow: TimeWindow = DAY) => ({
  type: userActionTypes.TOGGLE_TRENDING_TIME_WINDOW,
  timeWindow,
});