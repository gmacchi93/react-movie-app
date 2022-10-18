import React from "react";
import { Genre } from "../../../types/TheMovieDB";
import MovieGenre from "./MovieGenre";

type Props = {
  genresIds?: number[];
  genres?: Genre[];
};

const MovieGenres = ({ genresIds, genres }: Props) => {
  return (
    <ul className="flex flex-row gap-1" aria-label="Genres">
      {genresIds && genresIds.map((id: number) => <MovieGenre key={`genre-${id}`} id={id} />)}
      {genres && genres.map((genre: Genre) => <MovieGenre key={`genre-${genre.id}`} genre={genre} />)}
    </ul>
  );
};

export default MovieGenres;
