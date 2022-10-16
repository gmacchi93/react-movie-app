import React from "react";
import logo from "../svg/logo.svg";
type Props = {};

const Header = (props: Props) => {
  return (
    <header className="bg-blue-500 shadow-md">
      <div className="container m-auto">
        <div className="flex flex-row items-center gap-6">
          <img className="animate-spin-slow ani" src={logo} width={100} alt="React Movie app logo" />
          <h1 className="text-2xl text-white">React Movie App</h1>
          <label htmlFor="search" className="hidden">Search</label>
          <input className="p-6" type="text" placeholder="Eg: Star wars, Avengers, Terminator..." id="search" />
        </div>
      </div>
    </header>
  );
};

export default Header;