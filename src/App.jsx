import React from 'react';
import './App.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import RecommendedVideos from './components/RecommendedVideos';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SearchPage from './components/SearchPage';

export default function App() {
  const Home = () => (
    <div className="app__page">
      <Sidebar />
      <RecommendedVideos />
    </div>
  );

  const Search = () => (
    <div className="app__page">
      <Sidebar />
      <SearchPage />
    </div>
  );

  return (
    <div className="app">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/search/:searchTerm" element={<Search />} />
        </Routes>
      </Router>
    </div>
  );
}
