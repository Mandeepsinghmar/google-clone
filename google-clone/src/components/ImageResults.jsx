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
    <div className="flex flex-wrap justify-center items-center">
      {
                imageResults?.image_results?.map((item, index) => (
                  <a href={item.link?.href} target="_blank" key={index} rel="noreferrer" className="sm:p-3 p-5">
                    <img src={item.image?.src} />
                    <p className="sm:w-36 w-36 break-words text-sm mt-2">{ item.link?.title}</p>
                  </a>
                ))
            }
    </div>
  );
};
