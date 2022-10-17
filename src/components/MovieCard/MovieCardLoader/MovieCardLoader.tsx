import React from "react";

const MovieCardLoader = () => {
  return (
    <li className="flex flex-col max-w-48 min-w-48 animate-pulse" aria-hidden="true">
      <div className="bg-slate-700 w-48 h-72 rounded-md" />
      <div className="px-2 pt-4 flex flex-col gap-2">
        <div className="rounded-full h-2 w-full bg-slate-700" />
        <div className="rounded-full h-2 w-8 bg-slate-700" />
        <div className="rounded-full h-2 w-24 bg-slate-700" />
        <div className="rounded-full h-2 w-12 bg-slate-700" />
      </div>
    </li>
  );
};

export default MovieCardLoader;
