import React from "react";
import { Cast } from "../../../types/TheMovieDB";

type Props = {
  actor: Cast;
};

const CastItem = ({ actor }: Props) => {
  return (
    <li className="w-48 min-w-48 max-w-48">
      {actor.profile_path ? (
        <img
          className="rounded-md w-48 h-72  bg-slate-700"
          src={`https://image.tmdb.org/t/p/w500${actor.profile_path}`}
          alt={actor.name}
        />
      ) : (
        <div className="bg-slate-700 w-48 h-72 rounded-md flex flex-col justify-end items-center gap-4">
          <div className="rounded-full w-24 h-24 bg-slate-500" />
          <div className="w-36 h-36 rounded-t-xl bg-slate-500" />
        </div>
      )}
      <h3 className="font-semibold">{actor.name}</h3>
      <p className="text-sm">
        As <em className="italic">{actor.character}</em>
      </p>
    </li>
  );
};

export default CastItem;
