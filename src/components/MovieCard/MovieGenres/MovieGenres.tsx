import React from "react";

type Props = {
  genres: { id: number; name: string }[];
};

const MovieGenres = ({ genres }: Props) => {
  return (
    <ul className="flex flex-row gap-1" aria-label="Genres">
      {genres.map(({ name }) => (
        <li className="text-sm first:before:content-none before:content-['∙'] before:mr-1">{name}</li>
      ))}
    </ul>
  );
};

export default MovieGenres;
