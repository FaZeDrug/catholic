import React from 'react';
import './App.css';
import Landing from './pages/landing';
import Ezra from './pages/ezra';
//below are the imports needed to route the navbar to diff pages
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';




function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/ezra" element={<Ezra />} />
        {/* Add other routes as needed */}
      </Routes>
    </Router>
      
  );
}

export default App;
