import React from "react";
import tmdblogo from '../svg/tmdb.svg'
import justwatchlogo from '../svg/justwatch.svg'

const Footer = () => {
  return (
    <footer className="bg-blue-700 shadow-md py-20">
      <div className="container mx-auto px-5 sm:px-0">
        <div className="flex flex-col md:flex-row items-center justify-center gap-4 sm:gap-6 text-white">
          Data provided by
          <img src={tmdblogo} alt="The movie DB logo" width={150} />
          <img src={justwatchlogo} alt="The movie DB logo" width={150} />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
