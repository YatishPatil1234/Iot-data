import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Control from './components/Control';
import MainPage from './components/MainPage'; // Import MainPage component
import Monitor from './components/Monitor';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<MainPage />} /> {/* Route for MainPage */}
          <Route path="/monitor" element={<Monitor />} />
          <Route path='/control' element={<Control />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
