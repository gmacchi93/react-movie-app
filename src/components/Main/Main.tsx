import React from "react";
import MovieCard from "../MovieCard";

type Props = {};

const Main = (props: Props) => {
  return (
    <main>
      <section className="container mx-auto py-5 ">
        <h2 className="text-xl font-bold">Trending Movies</h2>
        <div className="flex flex-row gap-6 py-5 overflow-x-auto">
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
          <MovieCard />
        </div>
      </section>
    </main>
  );
};

export default Main;
