import React from "react";
import { Link } from "react-router-dom";
import { classNames } from "../../../utils/Class";
import Image from "../../common/Image";

type Props = {
  posterPath: string;
  title: string;
  id: number;
  animated?: boolean;
  width?: number;
  height?: number;
};

const MoviePoster = ({
  posterPath,
  title,
  id,
  animated = true,
  width = 48,
  height = 72,
}: Props) => {
  return (
    <Link
      to={`/${id}`}
      className={classNames(
        `flex flex-shrink-0 w-${width} min-w-${width} rounded-md overflow-hidden shadow-md`,
        animated ? "hover:scale-105 transition-all focus:scale-105 focus:outline-blue-500" : ""
      )}
    >
      <Image
        className={`w-${width} h-${height}`}
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        fallbackSrc={`/img/backdrop.webp`}
        alt={title}
        loading="lazy"
        placeholderColor="#334155"
      />
    </Link>
  );
};

export default MoviePoster;
