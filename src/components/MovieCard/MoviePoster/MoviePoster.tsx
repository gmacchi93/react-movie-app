import React from "react";

type Props = {
  posterPath: string;
  title: string;
  id: number;
};

const MoviePoster = ({ posterPath, title, id }: Props) => {
  return (
    <a
      href={`/${id}`}
      className="rounded-md overflow-hidden shadow-md hover:-mt-4 focus:-mt-4 focus:outline-blue-500 transition-all"
    >
      <img
        className="w-48"
        src={`https://image.tmdb.org/t/p/w500${posterPath}`}
        alt={title}
        loading="lazy"
      />
    </a>
  );
};

export default MoviePoster;
