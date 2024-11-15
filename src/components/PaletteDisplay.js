import React from 'react';
import './css/PaletteDisplay.css'

function PaletteDisplay({ paletteData }) {
  return (
    <div className="palette-display">

      <div style={{ marginBottom: '2em' , marginTop:'2em' }} className='upper'>
        <div >
          <h1 style={{ fontSize: '2em', fontWeight: 'bold', marginBottom: '1em' }}>Your Personalized Palette</h1>
        </div>
        <h2 style={{ fontSize: '2em' }}>{paletteData.palette_Name}</h2>
        <p>{paletteData.palette_Description}</p>
      </div>

      <div className='recommended'>
        <h1 className='recommend' style={{ fontSize: '1.2em',  marginBottom: '1em' }}>Recommended Colors</h1>
        <div className="color-swatch-container">
          {paletteData.recommended_colors.map((color, index) => (
            <div key={index} className="color-swatch-item" style={{ width: '200px', height: '300px' }}>
              <div className="color-swatch" style={{ backgroundColor: color.hex_code, width: '9em', height: '9em' }}></div>
              <p className="color-name" >{color.color_name}</p>
              <p className="color-description">{color.description}</p>
            </div>
          ))}
        </div>

      </div>

      <div className='avoid'>
  <h1 className='recommend' style={{ fontSize: '1.2em',  marginBottom: '1em' }}>Colors to Avoid</h1>
  <div className="color-swatch-container">
    {paletteData.colors_to_avoid.map((color, index) => (
      <div key={index} className="color-swatch-item" style={{ width: '200px', height: '300px' }}>
        <div className="color-swatch" style={{ backgroundColor: color.hex_code, width: '9em', height: '9em' }}></div>
        <p className="color-name">{color.color_name}</p>
        <p className="color-description">{color.reason}</p>
      </div>
    ))}
  </div>
</div>

    </div>
  );
}

export default PaletteDisplay;
