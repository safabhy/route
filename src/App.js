import React, { Component } from 'react';
import { Routes, Route } from 'react-router';
import './App.css';

import MovieDetails  from './Components/MovieDetails';
import MovieList  from './Components/MovieList';
class App extends Component {
  render() {
    return (
        <Routes>
          <Route path="/" exact element={MovieList} />
          <Route path="/movie/:number" element={MovieDetails} />
        </Routes>
    );
  }
}

export default App;