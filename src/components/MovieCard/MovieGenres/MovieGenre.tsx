import React from "react";
import { useSelector } from "react-redux";
import { getGenreById } from "../../../selectors/MovieSelectors";
import { Genre } from "../../../types/TheMovieDB";

type Props = {
  id?: number;
  genre?: Genre;
};

const MovieGenre = ({ id = 0, genre:genreFull }: Props) => {
  const genreData = useSelector((state) => getGenreById(state, id));
  const genre = genreFull || genreData;
  return (
    <li className="text-sm first:before:content-none before:content-['∙'] before:mr-1">
      {genre?.name}
    </li>
  );
};

export default MovieGenre;
