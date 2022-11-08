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
  fetchDetail = async (id: string) => {
    const result = await HttpClient.get(`/movie/${id}`);
    return result.data;
  };
  fetchWatchProviders = async (id: string) => {
    const result = await HttpClient.get(`/movie/${id}/watch/providers`);
    return result.data;
  };
  fetchCredits = async (id: string) => {
    const result = await HttpClient.get(`/movie/${id}/credits`);
    return result.data;
  };
  fetchSimilarMovies = async (id: string) => {
    const result = await HttpClient.get(`/movie/${id}/similar`);
    return result.data;
  };
  searchMovie = async (query: string, page: number) => {
    const result = await HttpClient.get('/search/movie', { params: { query, page }});
    return result.data;
  };
}

export default new MovieController();
