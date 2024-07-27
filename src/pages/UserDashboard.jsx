import React, { useState } from 'react';

// Define the AYOBA colors
const ayobaColors = {
  primary: '#34b7f1', // Light blue
  secondary: '#1e90ff', // Dark blue
  accent: '#ffffff' // White
};

const categories = [
  'Technology',
  'Finance',
  'Marketing',
  'Healthcare',
  'Education'
];

const africanLanguages = [
  'Swahili',
  'Zulu',
  'Hausa',
  'Yoruba',
  'Amharic'
];

const UserDashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(africanLanguages[0]);
  const [showAd, setShowAd] = useState(true);

  const handleLanguageChange = (e) => {
    setSelectedLanguage(e.target.value);
  };

  const closeAd = () => {
    setShowAd(false);
  };

  return (
    <div>
      <nav style={{ 
        background: `linear-gradient(90deg, ${ayobaColors.primary} 0%, ${ayobaColors.secondary} 100%)`, 
        padding: '1em', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'space-between' 
      }}>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <img 
            src="src/ayobalogo.png" // Make sure the path to your logo is correct
            alt="Ayoba Logo" 
            style={{ height: '60px', marginRight: '1em' }}
          />
        </div>
        <h1 style={{ color: 'white', textAlign: 'center', flexGrow: 1 }}>AyobaBizHub Dashboard</h1>
        <div>
          <label style={{ color: 'white', marginRight: '0.5em' }}>Select Language:</label>
          <select value={selectedLanguage} onChange={handleLanguageChange} style={{
            padding: '0.5em',
            borderRadius: '5px',
            border: 'none',
            outline: 'none'
          }}>
            {africanLanguages.map(language => (
              <option key={language} value={language}>{language}</option>
            ))}
          </select>
        </div>
      </nav>
      <div style={{ padding: '2em', backgroundColor: ayobaColors.accent, color: 'black' }}>
        <h2>Business Categories</h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
          {categories.map(category => (
            <div key={category} style={{
              border: `1px solid ${ayobaColors.primary}`,
              borderRadius: '5px',
              padding: '1em',
              width: '150px',
              textAlign: 'center',
              backgroundColor: ayobaColors.secondary,
              color: 'white',
              transition: 'transform 0.3s, box-shadow 0.3s',
              cursor: 'pointer',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)',
            }}
            onMouseEnter={e => {
              e.currentTarget.style.transform = 'scale(1.05)';
              e.currentTarget.style.boxShadow = '0 8px 16px rgba(0, 0, 0, 0.3)';
            }}
            onMouseLeave={e => {
              e.currentTarget.style.transform = 'scale(1)';
              e.currentTarget.style.boxShadow = '0 4px 8px rgba(0, 0, 0, 0.2)';
            }}>
              {category}
            </div>
          ))}
        </div>
      </div>
      {showAd && (
        <div style={{
          position: 'fixed',
          bottom: '20px',
          right: '20px',
          backgroundColor: 'white',
          border: `1px solid ${ayobaColors.secondary}`,
          padding: '1em',
          borderRadius: '5px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          transition: 'opacity 0.3s ease-in-out',
        }}>
          <p>This is a pop-up ad.</p>
          <button onClick={closeAd} style={{
            backgroundColor: ayobaColors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            padding: '0.5em 1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>Close</button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;


