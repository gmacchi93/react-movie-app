import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActionTypes } from "../../actions/ActionTypes";
import { fetchUpcoming } from "../../actions/MovieActions";
import { getUpcoming } from "../../selectors/MovieSelectors";
import getStatus from "../../selectors/StatusSelectors";
import { Movie } from "../../types/TheMovieDB";
import GenericErrorMessage from "../common/GenericErrorMessage";
import MovieCard from "../MovieCard";
import MovieCardLoader from "../MovieCard/MovieCardLoader";

type Props = {};

const Upcoming = (props: Props) => {
  const dispatch = useDispatch();
  const upcoming = useSelector((state) => getUpcoming(state));
  const { isLoading, isError } = useSelector((state) =>
    getStatus(state, movieActionTypes.FETCH_UPCOMING)
  );

  useEffect(() => {
    dispatch(fetchUpcoming());
  }, [dispatch]);

  return (
    <section className="container mx-auto py-5">
      <h2 className="text-xl font-bold">Upcoming</h2>
      {!isError && <ul className="flex flex-row gap-6 py-5 px-1 overflow-x-auto">
        {upcoming.results.map((movie: Movie) => {
          return <MovieCard key={`${movie.id}`} movie={movie} />;
        })}
        {isLoading &&
          Array(10)
            .fill(0)
            .map((_, index) => {
              return <MovieCardLoader key={index} />;
            })}
      </ul>}
      {isError && (<GenericErrorMessage />)}
    </section>
  );
};

export default Upcoming;
