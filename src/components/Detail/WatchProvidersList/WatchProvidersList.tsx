import React from "react";
import { Buy } from "../../../types/TheMovieDB";

type Props = {
    title: string,
    list: Buy[]
};

const WatchProvidersList = ({list, title}: Props) => {
  return (
    <>
      <h3>{title}</h3>
      <ul className="flex flex-row gap-2">
        {list?.map((watchProvider: Buy) => {
          return (
            <li>
              <img
                className="w-10 h-10 rounded-md"
                src={`https://image.tmdb.org/t/p/original/${watchProvider.logo_path}`}
                alt={watchProvider.provider_name}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default WatchProvidersList;
