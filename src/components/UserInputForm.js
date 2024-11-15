import React, { useState, useRef } from 'react';
import './css/UserInputForm.css';
import AdvancedPreferences from './AdvancedPrefrences';

function UserInputForm({ onSubmit }) {
  const [formData, setFormData] = useState({
    skin_color: '',
    eye_color: '',
    hair_color: '',
    undertone: '',
    preferences: ''
  });
  const [selectedImage, setSelectedImage] = useState(null);
  const [clickCount, setClickCount] = useState(0); // New state to track click count
  const imageRef = useRef(null);
  const [error, setError] = useState(''); // Error message state

  // const handleChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };

  // Handle image upload
  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setSelectedImage(imageUrl);
    }
  };

  // Handle color selection from image in sequence
  const handleImageClick = (event) => {
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');

    // Set canvas dimensions to the image's natural (original) dimensions
    canvas.width = imageRef.current.naturalWidth;
    canvas.height = imageRef.current.naturalHeight;

    // Draw the image at its original size on the canvas
    ctx.drawImage(imageRef.current, 0, 0, canvas.width, canvas.height);

    // Get the scaling factor between displayed and natural dimensions
    const scaleX = imageRef.current.naturalWidth / imageRef.current.width;
    const scaleY = imageRef.current.naturalHeight / imageRef.current.height;

    // Scale click coordinates to match the original image size
    const scaledX = event.nativeEvent.offsetX * scaleX;
    const scaledY = event.nativeEvent.offsetY * scaleY;

    // Get the pixel data at the scaled coordinates
    const pixel = ctx.getImageData(scaledX, scaledY, 1, 1).data;
    const color = `rgb(${pixel[0]}, ${pixel[1]}, ${pixel[2]})`;

    // Update the form field in sequence
    if (clickCount === 0) {
      setFormData({ ...formData, skin_color: color });
    } else if (clickCount === 1) {
      setFormData({ ...formData, eye_color: color });
    } else if (clickCount === 2) {
      setFormData({ ...formData, hair_color: color });
    }
    setClickCount((prevCount) => (prevCount + 1));
  };

  // Validation function to check required fields
  const validateForm = () => {
    const missingFields = [];
    if (!formData.skin_color) missingFields.push("Skin Color");
    if (!formData.eye_color) missingFields.push("Eye Color");
    if (!formData.hair_color) missingFields.push("Hair Color");

    if (missingFields.length > 0) {
      setError(`Please select the following colors: ${missingFields.join(", ")}`);
      setTimeout(() => {
        setError(''); // Clear error message after 3 seconds
      }, 1000);
      return false;
    }
    setError(''); // Clear error if all fields are selected
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Call validation function
    if (validateForm()) {
      onSubmit(formData); // Submit if all required fields are selected
    }
  };

  return (
    <div>
      <div className='main'>
        <div className="form-container">
          <form onSubmit={handleSubmit} className="user-input-form">
            {error && <div className="error-message">{error}</div>}

            <div className="content" style={{ gap: '12px', marginBottom: '15px' }}>
              <h1 style={{ fontSize: '2em', fontWeight: 'bold' }}>Select Your Colors</h1>
              <p style={{ color: '#534d4d' }}>Use the color picker tool to identify your hair, skin, and eye colors. For hair and skin, choose the primary tones without focusing on highlights or shadows. For eyes, select the most prominent color, typically found in the center of the iris.</p>
            </div>

            <div className="color-selection">
              {/* Image upload and color selection */}
              <div style={{ width: '500px', height: '400px' }} className="image-upload">
                {!selectedImage ? (
                  <label style={{ width: '500px', height: '400px' }} className="custom-file-upload">
                    Click to Upload File
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageUpload}
                      className="file-input"
                    />
                  </label>
                ) : (
                  <div>

                    <img
                      ref={imageRef}
                      src={selectedImage}
                      alt="Uploaded preview"
                      onClick={handleImageClick}
                      style={{ width: '500px', height: '400px', cursor: 'pointer' }}
                    />
                  </div>
                )}
              </div>
              <div className="color-fields">
                <label className='color'>
                  <span className="color-swatch" style={{ backgroundColor: formData.skin_color, height: '80px', width: '80px', borderRadius: '50%' }}></span>
                  <p>Skin Color</p>
                </label>
                <label className='color'>
                  <span className="color-swatch" style={{ backgroundColor: formData.eye_color, height: '80px', width: '80px', borderRadius: '50%' }}></span>
                  <p>Eye Color</p>
                </label>
                <label className='color'>
                  <span className="color-swatch" style={{ backgroundColor: formData.hair_color, height: '80px', width: '80px', borderRadius: '50%' }}></span>
                  <p>Hair Color</p>
                </label>
              </div>

            </div>

            <button style={{ color: '#ffff', backgroundColor: '#f63d68', borderRadius: '8%' }} type="submit">Generate Palette</button>
          </form>

        </div>
      </div>
      
      {/* Separate section for Undertone and Preferences */}
      {/* <div className="additional-fields">

        <p style={{ textAlign: 'left', fontSize: '2em', fontWeight: 'bold', color: '#534d4d' }}>Advanced Preferences - Optional</p>

        <label style={{ textAlign: 'left', padding: '3px', display: 'flex' }}>
          <p style={{ marginRight: '30px' }}>Undertone</p>
          <input
            style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px' }}
            type="text" name="undertone"
            value={formData.undertone}
            onChange={handleChange} />
        </label>

        <label style={{ textAlign: 'left', padding: '3px', display: 'flex', marginBottom: '30px' }}>
          <p style={{ marginRight: '20px' }}>Preferences</p>
          <input style={{ border: '1px solid #ccc', padding: '5px', borderRadius: '4px' }}
            type="text" name="preferences"
            value={formData.preferences}
            onChange={handleChange} />
        </label>

      </div> */}

      <AdvancedPreferences />

    </div>
  );
}

export default UserInputForm;
