import React from "react";
import MovieGenre from "./MovieGenre";

type Props = {
  genresIds: number[];
};

const MovieGenres = ({ genresIds }: Props) => {
  return (
    <ul className="flex flex-row gap-1" aria-label="Genres">
      {genresIds.map((id: number) => <MovieGenre key={`genre-${id}`} id={id} />)}
    </ul>
  );
};

export default MovieGenres;
