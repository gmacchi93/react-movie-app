import { Detail, Genre, GenresList, MovieList } from "../types/TheMovieDB";

export const getGenres = (state:any):GenresList => state.movie.genres;
export const getGenreById = (state:any, id:number):Genre => state?.movie?.genres?.find((genre:Genre) => genre.id === id);
export const getTrending = (state:any):MovieList => state.movie.trending;
export const getUpcoming = (state:any):MovieList => state.movie.upcoming;
export const getDetail = (state:any):Detail  => state.movie.detail;
export const getSearchResults = (state:any):MovieList => state.movie.searchResults;
