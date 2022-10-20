import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/Class";

type Props = {
  posterPath: string;
  title: string;
  id: number;
  animated?: boolean;
  width?: number;
  height?: number;
};

const MoviePoster = ({ posterPath, title, id, animated = true, width = 48, height = 72 }: Props) => {
  return (
    <Link
      to={`/${id}`}
      className={classNames(
        `flex flex-shrink-0 w-${width} min-w-${width} rounded-md overflow-hidden shadow-md focus:-mt-4 focus:outline-blue-500`,
        animated ? "hover:-mt-4 transition-all" : ""
      )}
    >
      <img
        className={`w-${width} h-${height}`}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        loading="lazy"
      />
    </Link>
  );
};

export default MoviePoster;
