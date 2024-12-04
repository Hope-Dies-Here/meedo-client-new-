import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import endPoints from './api/endPoints'
import HomePage from './pages/Home/HomePage'
import ArtistsPage from './pages/Artists/ArtistsPage'
import Navbar from './components/Navbar/Navbar'


const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path={endPoints.home} element={<HomePage />} />
        <Route path={endPoints.artists} element={<ArtistsPage />} />
      </Routes>
    </Router>
  )
}

export default App;