// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useNavigate } from 'react-router-dom';
import UserInputForm from './components/UserInputForm';
import PalettePage from './components/PalettePage'; // Separate component for displaying palette
import axios from 'axios';
import './App.css';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
 
  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/palette" element={<PalettePage />} /> {/* New route for palette display */}
      </Routes>
      <Footer />
    </Router>
  );
}

function HomePage() {
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleFormSubmit = async (formData) => {
    try {
      const response = await axios.post('https://61caa913-f113-46c6-9697-4a520e742c7c.mock.pstmn.io/generate-palette', formData);
      setError('');
      // Navigate to /palette and pass palette data as state
      navigate('/palette', { state: { paletteData: response.data } });
    } catch (error) {
      setError('Failed to retrieve color palette. Please try again.');
    }
  };

  return (
    <div className="App">
      
      <UserInputForm onSubmit={handleFormSubmit} />
      {error && <p className="error">{error}</p>}
    </div>
  );
}

export default App;
