import React from "react";

type Props = {
    releaseDate: Date,
};

const MovieReleaseDate = ({releaseDate}: Props) => {
  return (
    <p className="text-sm" aria-label="Release date">
      <time dateTime={releaseDate.toLocaleDateString()}>{releaseDate.getFullYear()}</time>
    </p>
  );
};

export default MovieReleaseDate;
