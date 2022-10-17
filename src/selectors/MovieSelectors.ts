import { Genre } from "../types/TheMovieDB";

const getMovie = (state:any) => state.movie;
export const getGenres = (state:any) => state.movie.genres;
export const getGenreById = (state:any, id:number) => state?.movie?.genres?.find((genre:Genre) => genre.id === id);
export const getTrending = (state:any) => state.movie.trending;
export const getUpcoming = (state:any) => state.movie.upcoming;

export default getMovie;