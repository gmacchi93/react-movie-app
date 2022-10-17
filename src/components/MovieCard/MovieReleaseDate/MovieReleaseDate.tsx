import React from "react";

type Props = {
    releaseDate?: Date,
};

const MovieReleaseDate = ({releaseDate}: Props) => {
  return (
    <p className="text-sm" aria-label="Release date">
      {releaseDate ? <time dateTime={releaseDate.toLocaleDateString()}>{releaseDate.getFullYear()}</time> : 'No release date'}
    </p>
  );
};

export default MovieReleaseDate;
