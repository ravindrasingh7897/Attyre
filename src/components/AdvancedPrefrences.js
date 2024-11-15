import React, { useState } from 'react';
import './css/AdvancedPreferences.css';

const AdvancedPreferences = () => {
    const [selectedOptions, setSelectedOptions] = useState({
        intensity: '',
        season: '',
        occasion: '',
        style: ''
    });

    const handleSelection = (category, option) => {
        setSelectedOptions(prevState => ({
            ...prevState,
            [category]: option
        }));
    };

    return (
        <div className="advanced-preferences">

            <h1>Advanced Preferences - Optional</h1>

            {/* Color Intensity Preference */}
            <section>
                <h2>Color Intensity Preference</h2>
                <p>Defines the intensity and vibrancy of the colors in the palette.</p>
                <hr />
                <div className="options">
                    {['Bold', 'Vibrant', 'Muted', 'Pastel', 'Soft', 'Neutral', 'Classic', 'Dark', 'Earthy', 'Warm'].map(option => (
                        <button
                            key={option}
                            className={selectedOptions.intensity === option ? 'selected' : ''}
                            onClick={() => handleSelection('intensity', option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </section>

            {/* Seasonal Preferences */}
            <section>
                <h2>Seasonal Preferences</h2>
                <p>Colors inspired by the mood and feel of each season.</p>
                < hr />
                <div className="options">
                    {['Winter', 'Spring', 'Summer', 'Autumn'].map(option => (
                        <button
                            key={option}
                            className={selectedOptions.season === option ? 'selected' : ''}
                            onClick={() => handleSelection('season', option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </section>

            {/* Occasion-Based Preferences */}
            <section>
                <h2>Occasion-Based Preferences</h2>
                <p>Find colors that fit the occasion, from casual to formal.</p>
                <hr />
                <div className="options">
                    {['Casual', 'Everyday', 'Work', 'Formal', 'Vacation', 'Festive', 'Sports'].map(option => (
                        <button
                            key={option}
                            className={selectedOptions.occasion === option ? 'selected' : ''}
                            onClick={() => handleSelection('occasion', option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </section>

            {/* Personal Style Preferences */}
            <section>
                <h2>Personal Style Preferences</h2>
                <p>Match colors to your unique style, whether minimal or bold.</p>
                <div className="options">
                    {['Minimalist', 'Maximalist', 'Modern', 'Edgy', 'Vintage', 'Bohemian', 'Classic', 'Street'].map(option => (
                        <button
                            key={option}
                            className={selectedOptions.style === option ? 'selected' : ''}
                            onClick={() => handleSelection('style', option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </section>

        </div>
    );
};

export default AdvancedPreferences;
