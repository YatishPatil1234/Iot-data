import React from 'react';
import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import './App.css';
import Control from './components/Control';
import Login from './components/Login';
import MainPage from './components/MainPage'; // Import MainPage component
import Monitor from './components/Monitor';
import Register from './components/Register';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
           {/* Route for MainPage */}
          <Route path="/" element={<MainPage />} /> {/* Route for MainPage */}
          <Route path="/monitor" element={<Monitor />} />
          <Route path='/control' element={<Control />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
