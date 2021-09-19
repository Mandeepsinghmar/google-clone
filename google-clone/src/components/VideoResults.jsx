import React, { useEffect } from 'react';
import ReactPlayer from 'react-player';
import { Loading } from './Loading';
import { useStateContext } from '../contexts/StateContextProvider';

export const VideoResults = () => {
  const { videoResults, searchTerm, getVideoResults, loading } = useStateContext();
  useEffect(() => {
    if (searchTerm !== '') {
      getVideoResults();
    }
  }, [searchTerm]);
  if (loading) {
    return <Loading />;
  }
  return (
    <div className="flex flex-wrap ">
      {
            videoResults?.results?.map((video, index) => (
              <div key={index} className="p-2">
                <ReactPlayer
                  url={video.additional_links?.[0].href}
                  controls
                  width="350px"
                  height="200px"
                />
              </div>

            ))
            }
    </div>
  );
};
