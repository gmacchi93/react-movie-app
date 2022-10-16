import React from "react";
import MovieRating from "./MovieRating";
import MovieDuration from "./MovieDuration";
import MovieReleaseDate from "./MovieReleaseDate";
import MovieGenres from "./MovieGenres";
import MovieTitle from "./MovieTitle";
import MoviePoster from "./MoviePoster";

type Props = {};

const MovieCard = (props: Props) => {
  return (
    <div className="flex flex-col min-w-max">
      <MoviePoster
        posterPath="/eed4qNf174pcT65it1PBbaTTL3x.jpg"
        title="La huerfana"
      />
      <div className="p-2">
        <MovieTitle title="La huerfana" />
        <div className="flex flex-row gap-4">
          <MovieRating rating={3.5} />
          <MovieDuration duration={139} />
        </div>
        <MovieGenres
          genres={[
            { id: 1, name: "Drama" },
            { id: 2, name: "Action" },
          ]}
        />
        <MovieReleaseDate releaseDate={new Date("2022-01-01")} />
      </div>
    </div>
  );
};

export default MovieCard;
