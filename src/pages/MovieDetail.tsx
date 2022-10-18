import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { movieActionTypes } from "../actions/ActionTypes";
import {
  fetchCredits,
  fetchDetail,
  fetchGenres,
  fetchSimilarMovies,
  fetchWatchProviders,
} from "../actions/MovieActions";
import GenericErrorMessage from "../components/common/GenericErrorMessage";
import CastItem from "../components/Detail/CastItem";
import DetailLoader from "../components/Detail/DetailLoader/DetailLoader";
import WatchProvidersList from "../components/Detail/WatchProvidersList/WatchProvidersList";
import Footer from "../components/Footer";
import Header from "../components/Header";
import MovieCard from "../components/MovieCard";
import MovieCardLoader from "../components/MovieCard/MovieCardLoader";
import MovieDuration from "../components/MovieCard/MovieDuration";
import MovieGenres from "../components/MovieCard/MovieGenres";
import MoviePoster from "../components/MovieCard/MoviePoster";
import MovieRating from "../components/MovieCard/MovieRating";
import MovieReleaseDate from "../components/MovieCard/MovieReleaseDate";
import { getDetail } from "../selectors/MovieSelectors";
import getStatus from "../selectors/StatusSelectors";
import { Detail, Movie } from "../types/TheMovieDB";

const MovieDetailPage = () => {
  const { movieId = "" } = useParams();
  const dispatch = useDispatch();
  const detail: Detail = useSelector((state) => getDetail(state));
  const { movie, watchProviders, cast, similarMovies } = { ...detail };
  const { isLoading, isError, isSuccess } = useSelector((state) =>
    getStatus(state, movieActionTypes.FETCH_DETAIL)
  );
  const { isLoading: isLoadingSimilarMovies, isError: isErrorSimilarMovies } =
    useSelector((state) =>
      getStatus(state, movieActionTypes.FETCH_SIMILAR_MOVIES)
    );

  useEffect(() => {
    dispatch(fetchGenres());
    dispatch(fetchDetail(movieId));
    dispatch(fetchWatchProviders(movieId));
    dispatch(fetchCredits(movieId));
    dispatch(fetchSimilarMovies(movieId));
  }, [dispatch, movieId]);

  return (
    <>
      <Header />
      <main>
        <section
          className="bg-no-repeat bg-cover bg-center"
          style={
            movie?.backdrop_path
              ? {
                  backgroundImage: `url(https://image.tmdb.org/t/p/original${movie?.backdrop_path})`,
                }
              : {}
          }
        >
          <div className="bg-black bg-opacity-80 z-10 px-5 sm:px-0">
            <div className="container mx-auto py-20 animate-fade-in text-white">
              {isLoading && <DetailLoader />}
              {isSuccess && <div className="flex flex-col items-center sm:flex-row sm:items-start gap-6">
                <MoviePoster
                  id={movie?.id}
                  posterPath={movie?.poster_path}
                  title={movie?.title}
                  animated={false}
                />
                <div className="flex flex-col gap-3">
                  <h2 className="text-3xl">{movie?.title}</h2>
                  <p className="text-lg">{movie?.tagline}</p>
                  <div className="flex gap-4">
                    <MovieRating rating={movie?.vote_average} />
                    <MovieDuration duration={movie?.runtime} />
                  </div>
                  <MovieGenres genres={movie?.genres} />
                  <MovieReleaseDate releaseDate={movie?.release_date} />
                  <p>{movie?.overview}</p>
                  {watchProviders?.flatrate && (
                    <WatchProvidersList
                      list={watchProviders?.flatrate}
                      title="Streaming on"
                    />
                  )}
                  {watchProviders?.buy && (
                    <WatchProvidersList
                      list={watchProviders?.buy}
                      title="Buy from"
                    />
                  )}
                </div>
              </div>}
              {isError && <GenericErrorMessage />}
            </div>
          </div>
        </section>
        <section className="container mx-auto py-20 px-5 sm:px-0">
          <h2 className="text-xl font-bold">Cast</h2>
          <ul className="flex flex-row gap-6 py-10 overflow-x-auto">
            {cast?.map((actor) => (
              <CastItem actor={actor} />
            ))}
          </ul>
        </section>
        <section className="py-20 bg-blue-500">
          <div className="container mx-auto text-white px-5 sm:px-0">
            <h2 className="text-xl font-bold">More like this film</h2>
            {!isErrorSimilarMovies && (
              <ul
                className="flex flex-row gap-6 py-5 px-1 overflow-x-auto"
                id="trending-movie-list"
              >
                {similarMovies?.map((movie: Movie) => {
                  return <MovieCard key={`${movie.id}`} movie={movie} />;
                })}
                {isLoadingSimilarMovies &&
                  Array(10)
                    .fill(0)
                    .map((_, index) => {
                      return <MovieCardLoader key={index} />;
                    })}
              </ul>
            )}
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default MovieDetailPage;
