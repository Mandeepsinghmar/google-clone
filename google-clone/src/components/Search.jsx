import React from 'react';
import { useStateContext } from '../contexts/StateContextProvider';
import { Links } from './Links';

export const Search = () => {
  const { setSearchTerm, searchTerm } = useStateContext();

  return (
    <div className="flex flex-col">
      <input
        value={searchTerm}
        type="text"
        className="sm:w-96 w-80 h-10 bg-gray-200 rounded-full shadow-sm outline-none p-6 text-black  "
        placeholder="🔍 Search Google or type URL"
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <Links />
    </div>
  );
};
