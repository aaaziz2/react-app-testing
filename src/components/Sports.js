import React from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import sportsData from '../data/SportData';

export default function Sports() {
  const sportLinks = sportsData.map((sport) => {
    return (
      <li key={sport.id}>
        <Link to={`${sport.id}`}>{sport.title}</Link>
      </li>
    );
  });

  return (
    <section>
      <h1>Sports</h1>
      <ol>{sportLinks}</ol>
    </section>
  );
}
