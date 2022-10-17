import React from "react";
import { useSelector } from "react-redux";
import { getGenreById } from "../../../selectors/MovieSelectors";

type Props = {
  id: number;
};

const MovieGenre = ({ id }: Props) => {
  const genre = useSelector((state) => getGenreById(state, id));
  return (
    <li className="text-sm first:before:content-none before:content-['∙'] before:mr-1">
      {genre?.name}
    </li>
  );
};

export default MovieGenre;
