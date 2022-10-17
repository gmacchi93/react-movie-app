import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchGenres } from "../../actions/MovieActions";
import Trending from "../Trending";
import Upcoming from "../Upcoming/Upcoming";

type Props = {};

const Main = (props: Props) => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <main className="px-5 sm:px-0 ">
      <Trending />
      <Upcoming />
    </main>
  );
};

export default Main;
