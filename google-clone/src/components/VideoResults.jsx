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
    <div className="flex justify-between flex-wrap space-y-10">
      {
            videoResults?.results?.map((video, index) => (
              <div key={index}>
                <ReactPlayer
                  className="rounded-sm"
                  url={video.additional_links?.[0].href}
                  controls
                  width="350px"
                  height="360px"
                />
              </div>

            ))
            }
    </div>
  );
};
