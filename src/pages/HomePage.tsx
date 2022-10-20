import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../actions/MovieActions";
import Trending from "../components/Trending";
import Upcoming from "../components/Upcoming/Upcoming";

type Props = {};

const HomePage = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <main className="px-5 sm:px-0 py-5">
      <Trending />
      <Upcoming />
    </main>
  );
};

export default HomePage;
