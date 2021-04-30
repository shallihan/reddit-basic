import React from 'react';
import Header from './features/Header/Header';
import Subreddits from './features/Subreddits/Subreddits';
import Home from './features/Home/Home';
import './App.css';

function App() {
  return (
    <div className="App">
            <Header />
            <div className="subreddit-bar">
              <Subreddits />
            </div>
            <div className="main-feed">
              <Home />
            </div>
    </div>
  );
}

export default App;
