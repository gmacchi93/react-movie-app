import React from "react";
import { Link } from "react-router-dom";
import logo from "../svg/logo.svg";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="container m-auto">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-2 sm:gap-6">
          <Link to="/" className="flex flex-row items-center flex-shrink-0">
            <img
              className="animate-spin-slow ani"
              src={logo}
              width={100}
              alt="React Movie app logo"
            />
            <h1 className="text-2xl text-white">React Movie App</h1>
          </Link>
          <form method="get" action="search" className="flex flex-row w-full sm:w-auto md:w-1/2 lg:w-1/2 xl:w-3/5">
            <label htmlFor="search" className="hidden">
              Search some movie
            </label>
            <input
              className="p-6 flex-1"
              type="text"
              placeholder="Search any movie..."
              id="search"
              name="name"
            />
            <input className="bg-gray-200 text-gray-600 p-6" type="submit" value="Search" aria-label="Search" />
          </form>
        </div>
      </div>
    </header>
  );
};

export default Header;
