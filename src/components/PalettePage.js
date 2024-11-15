// PalettePage.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import PaletteDisplay from './PaletteDisplay';

function PalettePage() {
  const location = useLocation();
  const { paletteData } = location.state || {}; // Access the palette data passed from the HomePage

  return (
    <div className='main'>
      {paletteData ? (
        <PaletteDisplay paletteData={paletteData} /> // Display the palette data
      ) : (
        <p>No color palette data available.</p>
      )}
    </div>
  );
}

export default PalettePage;
