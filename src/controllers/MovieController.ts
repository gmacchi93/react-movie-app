import { TimeWindow } from "../types/TheMovieDB";
import HttpClient from "../utils/HttpClient";

class MovieController {
  fetchGenres = async () => {
    const result = await HttpClient.get("/genre/movie/list");
    return result.data;
  };
  fetchTrending = async (timeWindow: TimeWindow) => {
    const result = await HttpClient.get(`/trending/movie/${timeWindow}`);
    return result.data;
  };
  fetchUpcoming = async () => {
    const result = await HttpClient.get("/movie/upcoming");
    return result.data;
  };
}

export default new MovieController();
