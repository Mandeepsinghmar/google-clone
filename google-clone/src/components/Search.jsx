import React from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm, searchTerm } = useStateContext();

  return (
    <div className="sm:ml-48 md:ml-72 sm:-mt-10 mt-3">
      <input
        value={searchTerm}
        type="text"
        className="sm:w-96 w-80 h-10 dark:bg-gray-200  border rounded-full shadow-sm outline-none p-6 text-black  "
        placeholder="🔍 Search Google or type URL"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Links />
    </div>
  );
};
