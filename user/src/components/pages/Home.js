import React from 'react';
import './Home.css'
import PostList from '../PostList';
const Home = () => {
  return (
    <div className="home-container">
      <div className="header">
        <h1 className="mb-3">Welcome to Share&Care </h1>
        <p>Connect and Share with Friends</p>
      </div>
      <div className="post-feed">
        {PostList}
      </div>
    </div>
  );
};

export default Home;
