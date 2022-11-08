import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { movieActionTypes } from "../actions/ActionTypes";
import { searchMovie } from "../actions/MovieActions";
import GenericErrorMessage from "../components/common/GenericErrorMessage";
import MovieCard from "../components/MovieCard";
import MovieCardLoader from "../components/MovieCard/MovieCardLoader";
import { getSearchResults } from "../selectors/MovieSelectors";
import getStatus from "../selectors/StatusSelectors";
import { Movie } from "../types/TheMovieDB";

type Props = {};

const SearchPage = (props: Props) => {
  const dispatch = useDispatch();
  let [searchParams] = useSearchParams();
  const searchResults = useSelector((state) => getSearchResults(state));
  const {
    results = [],
    page,
    total_pages,
  } = { ...searchResults };

  const { isLoading, isError, isSuccess } = useSelector((state) =>
    getStatus(state, movieActionTypes.SEARCH_MOVIE)
  );

  const handleClickLoadMore = () => {
    dispatch(searchMovie(searchParams.get("name") || "", page + 1))
  }

  useEffect(() => {
    dispatch(searchMovie(searchParams.get("name") || ""));
  }, [dispatch, searchParams]);

  return (
    <main className="px-5 sm:px-0 py-5">
      <div className="container mx-auto">
        <h2 className="text-xl">Results</h2>
        {!isError && (
          <ul
            className="flex flex-row flex-wrap gap-6 py-5 px-1"
            id="search-movie-list"
          >
            {results?.map((movie: Movie) => {
              return <MovieCard key={`${movie.id}`} movie={movie} />;
            })}
            {isSuccess && page < total_pages && (
              <button
                type="button"
                className="flex flex-col rounded-lg bg-slate-700 justify-center items-center text-white h-72 max-w-48 min-w-48"
                onClick={handleClickLoadMore}
              >
                <span className="text-5xl animate-bounce sha">➔</span>
                <span>Load more</span>
              </button>
            )}
            {isSuccess && !results.length && (
              <div className="py-20">No movies found.</div>
            )}
            {isLoading &&
              Array(10)
                .fill(0)
                .map((_, index) => {
                  return <MovieCardLoader key={index} />;
                })}
          </ul>
        )}
        {isError && <GenericErrorMessage />}
      </div>
    </main>
  );
};

export default SearchPage;
