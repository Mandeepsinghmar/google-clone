import React, { useEffect } from 'react';
import { Loading } from './Loading';
import { useStateContext } from '../contexts/StateContextProvider';

export const ImageResults = () => {
  const { imageResults, searchTerm, getImageResults, loading } = useStateContext();
  useEffect(() => {
    if (searchTerm !== '') {
      getImageResults();
    }
  }, [searchTerm]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap space-y-10">
      {
                imageResults?.image_results?.map((item, index) => (
                  <a href={item.link?.href} target="_blank" key={index} rel="noreferrer">
                    <img src={item.image?.src} className="sm:w-40 w-36 h-44 rounded-lg" />
                    <p className="sm:w-36 w-36 break-words text-sm mt-2">{ item.link?.title}</p>
                  </a>
                ))
            }
    </div>
  );
};
