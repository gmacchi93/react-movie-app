import React from "react";

type Props = {
  posterPath: string;
  title: string;
};

const MoviePoster = ({ posterPath, title }: Props) => {
  return (
    <img
      className="rounded-md w-48"
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={title}
      loading="lazy"
    />
  );
};

export default MoviePoster;
