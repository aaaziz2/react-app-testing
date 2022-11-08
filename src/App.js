import React from 'react';
import './style.css';
import Home from './components/Home';
import News from './components/News';
import Weather from './components/Weather';
import Sports from './components/Sports';
import { HashRouter, Routes, Route, Link } from 'react-router-dom';

export default function App() {
  return (
    <HashRouter>
      <div>
        <nav>
          <Link to="">Home</Link>
          <Link to="news">News</Link>
          <Link to="weather">Weather</Link>
          <Link to="sports">Sports</Link>
        </nav>
        <Routes>
          <Route path="" element={<Home />} />
          <Route path="news" element={<News />} />
          <Route path="weather" element={<Weather />} />
          <Route path="sports" element={<Sports />} />
        </Routes>
      </div>
    </HashRouter>
  );
}
