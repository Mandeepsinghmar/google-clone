import React from 'react';
import { Link } from 'react-router-dom';
import { Search } from './Search';

export const Navbar = ({ setDarkTheme, darkTheme }) => (
  <div className="p-5 pb-0 flex flex-wrap sm:justify-between justify-center items-center border-b dark:border-gray-700 border-gray-200 ">
    <div className="flex justify-between items-center space-x-5 w-screen">
      <Link to="/">
        <img className="sm:w-32 w-28 h-18 sm:h-22 " src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google-logo" />
      </Link>
      <button type="button" onClick={() => setDarkTheme(!darkTheme)} className="text-xl dark:bg-gray-50 bg-white border rounded p-1">{darkTheme ? '💡' : '🌙'}</button>
    </div>
    <Search />
  </div>
);
