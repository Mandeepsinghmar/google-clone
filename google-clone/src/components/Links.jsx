import React from 'react';
import { Link } from 'react-router-dom';

export const Links = () => (
  <div className="flex justify-around items-center mt-4">
    <Link to="/">🔍 All</Link>
    <Link to="/news">📰 News</Link>
    <Link to="/images">📸 Images</Link>
    <Link to="/videos">📺 Videos</Link>
  </div>
);
