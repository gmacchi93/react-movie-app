import React from "react";
import { classNames } from "../../../utils/Class";

type Props = {
  posterPath: string;
  title: string;
  id: number;
  animated?: boolean;
};

const MoviePoster = ({ posterPath, title, id, animated = true }: Props) => {
  return (
    <a
      href={`/${id}`}
      className={classNames(
        "w-48 min-w-48 rounded-md overflow-hidden shadow-md focus:-mt-4 focus:outline-blue-500",
        animated ? "hover:-mt-4 transition-all" : ""
      )}
    >
      <img
        className="w-48 h-72"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        loading="lazy"
      />
    </a>
  );
};

export default MoviePoster;
