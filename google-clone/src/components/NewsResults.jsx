import React, { useEffect } from 'react';
import { Loading } from './Loading';
import { useStateContext } from '../contexts/StateContextProvider';

export const NewsResults = () => {
  const { newsResults, searchTerm, getNewsResults, loading } = useStateContext();
  useEffect(() => {
    if (searchTerm !== '') {
      getNewsResults();
    }
  }, [searchTerm]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="sm:px-56 flex flex-wrap justify-between items-center gap-6">
      {
                newsResults?.map((news) => (
                  <div key={news.id} className="md:w-2/5 w-full ">
                    <a href={news.links?.[0].href} target="_blank" rel="noreferrer " className="hover:underline ">
                      <p className="text-lg text-blue-300 hover:text-gray-200">{news.title}</p>
                    </a>
                    <div className="flex gap-4">
                      <a href={news.source?.href} target="_blank" rel="noreferrer" className="hover:underline hover:text-blue-300"> {news.source?.href}</a>
                    </div>
                  </div>

                ))
            }
    </div>
  );
};
