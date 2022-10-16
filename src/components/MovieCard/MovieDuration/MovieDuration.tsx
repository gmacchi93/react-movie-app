import React from "react";

type Props = {
  duration: number;
};

const MovieDuration = ({ duration }: Props) => {
  return (
    <p className="flex gap-1 text-sm font-light" aria-label="Duration">
      <span aria-hidden="true">🕑</span>{`${duration}min`}
    </p>
  );
};

export default MovieDuration;
