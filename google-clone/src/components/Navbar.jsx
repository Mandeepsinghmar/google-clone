import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = () => (
  <div className="p-5 flex flex-wrap sm:justify-between justify-center items-center gap-3 border-b border-gray-700 ">
    <div>
      <Link to="/">
        <img className="w-32 h-22 " src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo" />
      </Link>
    </div>
    <Search />
  </div>
);
