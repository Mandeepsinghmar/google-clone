import React, { createContext, useContext, useState } from 'react';

const StateContext = createContext();
const baseUrl = 'https://google-search3.p.rapidapi.com/api/v1';

const fetchData = async (url) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'google-search3.p.rapidapi.com',
      'x-rapidapi-key': '67c69ac6demshc1748786c9a1352p1d807cjsnc8f63d29c088',
    },
  });
  const data = await res.json();
  return data;
};

export const StateContextProvider = ({ children }) => {
  const [searchResults, setSearchResults] = useState();
  const [newsResults, setNewsResults] = useState([]);
  const [imageResults, setImageResults] = useState([]);
  const [videoResults, setVideoResults] = useState([]);
  const [loading, setLoading] = useState(false);

  const [searchTerm, setSearchTerm] = useState('Elon Musk');
  const getSearchResults = async () => {
    setLoading(true);
    const data = await fetchData(`${baseUrl}/search/q=${searchTerm}&num=50`);
    setLoading(false);
    setSearchResults(data);
  };
  const getNewsResults = async () => {
    setLoading(true);

    const data = await fetchData(`${baseUrl}/news/q=${searchTerm}`);
    setNewsResults(data?.entries);
    setLoading(false);
  };
  const getImageResults = async () => {
    setLoading(true);

    const data = await fetchData(`${baseUrl}/images/q=${searchTerm}&num=100`);
    setImageResults(data);
    setLoading(false);
  };
  const getVideoResults = async () => {
    setLoading(true);

    const data = await fetchData(`${baseUrl}/search/q=${searchTerm} videos &num=100`);
    setVideoResults(data);
    setLoading(false);
  };
  return (
    <StateContext.Provider value={{ getSearchResults, getVideoResults, getImageResults, getNewsResults, newsResults, imageResults, videoResults, searchResults, searchTerm, setSearchTerm, loading }}>
      {children}
    </StateContext.Provider>
  );
};

export const useStateContext = () => useContext(StateContext);
