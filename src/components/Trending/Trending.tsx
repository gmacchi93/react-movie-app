import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { movieActionTypes } from "../../actions/ActionTypes";
import { fetchTrending } from "../../actions/MovieActions";
import { toggleTrendingTimeWindow } from "../../actions/UserActions";
import { getTrending } from "../../selectors/MovieSelectors";
import getStatus from "../../selectors/StatusSelectors";
import { getTrendingTimeWindow } from "../../selectors/UserSelectors";
import { DAY, Movie, WEEK } from "../../types/TheMovieDB";
import GenericErrorMessage from "../common/GenericErrorMessage";
import Tab from "../common/Tab";
import { TabInterface } from "../common/Tab/Tab";
import MovieCard from "../MovieCard";
import MovieCardLoader from "../MovieCard/MovieCardLoader";

type Props = {};

const Trending = (props: Props) => {
  const dispatch = useDispatch();
  const trending = useSelector((state) => getTrending(state));
  const trendingTimeWindow = useSelector((state) =>
    getTrendingTimeWindow(state)
  );

  const { isLoading, isError } = useSelector((state) =>
    getStatus(state, movieActionTypes.FETCH_TRENDING)
  );

  useEffect(() => {
    dispatch(fetchTrending(trendingTimeWindow));
  }, [dispatch, trendingTimeWindow]);

  const tabs: TabInterface[] = [
    {
      label: "Today",
      value: DAY,
      action: () => {
        dispatch(toggleTrendingTimeWindow(DAY));
      },
    },
    {
      label: "This Week",
      value: WEEK,
      action: () => {
        dispatch(toggleTrendingTimeWindow(WEEK));
      },
    },
  ];

  return (
    <section className="container mx-auto py-5">
      <header className="flex flex-col gap-2 sm:flex-row sm:gap-4">
        <h2 className="text-xl font-bold">Trending Movies</h2>
        <Tab selected={trendingTimeWindow} tabs={tabs} />
      </header>
      {!isError && <ul
        className="flex flex-row gap-6 py-5 px-1 overflow-x-auto"
        id="trending-movie-list"
      >
        {trending.results.map((movie: Movie) => {
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

export default Trending;
