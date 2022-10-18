import React from "react";
import MovieRating from "./MovieRating";
import MovieReleaseDate from "./MovieReleaseDate";
import MovieGenres from "./MovieGenres";
import MovieTitle from "./MovieTitle";
import MoviePoster from "./MoviePoster";
import { Movie } from "../../types/TheMovieDB";

type Props = {
  movie: Movie;
};

const MovieCard = ({ movie }: Props) => {
  return (
    <li className="flex flex-col max-w-48 min-w-48">
      <MoviePoster posterPath={movie.poster_path} title={movie.title} id={movie.id} />
      <div className="p-2">
        <MovieTitle title={movie.title} />
        <MovieRating rating={movie.vote_average} />
        <MovieGenres genresIds={movie.genre_ids.slice(0, 2)} />
        <MovieReleaseDate releaseDate={movie.release_date} />
      </div>
    </li>
  );
};

export default MovieCard;
