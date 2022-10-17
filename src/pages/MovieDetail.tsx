import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchGenres } from "../actions/MovieActions";
import Header from "../components/Header";

type Props = {};

const MovieDetail = (props: Props) => {
  const { movieId } = useParams();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchGenres());
  }, [dispatch]);

  return (
    <>
      <Header />
      <main className="px-5 sm:px-0">
      <section className="container mx-auto py-5 bg-blue-300 ease-in ">
        <h2>Movie detail {movieId}</h2>
      </section>
      </main>
    </>
  );
};

export default MovieDetail;
