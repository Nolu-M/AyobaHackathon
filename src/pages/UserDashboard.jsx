import React, { useState } from 'react';

// Define the AYOBA colors
const ayobaColors = {
  primary: '#34b7f1', // Light blue
  secondary: '#1e90ff', // Dark blue
  accent: '#ffffff' // White
};

const categories = {
  eng: {
    Technology: 'Technology',
    Finance: 'Finance',
    Marketing: 'Marketing',
    Healthcare: 'Healthcare',
    Education: 'Education'
  },
  sw: {
    Technology: 'Teknolojia',
    Finance: 'Fedha',
    Marketing: 'Masoko',
    Healthcare: 'Afya',
    Education: 'Elimu'
  },
  zu: {
    Technology: 'Ubuchwepheshe',
    Finance: 'Izimali',
    Marketing: 'Ukumaketha',
    Healthcare: 'Impilo',
    Education: 'Imfundo'
  },
  ha: {
    Technology: 'Fasaha',
    Finance: 'Kudi',
    Marketing: 'Talla',
    Healthcare: 'Lafiya',
    Education: 'Ilimi'
  },
  yo: {
    Technology: 'Imọ-ẹrọ',
    Finance: 'Owo',
    Marketing: 'Iṣowo',
    Healthcare: 'Ìlera',
    Education: 'Ẹ̀kọ́'
  },
  am: {
    Technology: 'ቴክኖሎጂ',
    Finance: 'ገንዘብ',
    Marketing: 'ግብይት',
    Healthcare: 'ጤና',
    Education: 'ትምህርት'
  }
};

const africanLanguages = [
  {name: 'English', code: 'eng'},
  { name: 'Swahili', code: 'sw' },
  { name: 'Zulu', code: 'zu' },
  { name: 'Hausa', code: 'ha' },
  { name: 'Yoruba', code: 'yo' },
  { name: 'Amharic', code: 'am' }
];

// A dummy translation function (you would replace this with an actual translation library or API call)
const translate = (text, languageCode) => {
  const translations = {
    eng: {
      'Business Categories': 'Business Categories',
      'This is a pop-up ad.': 'This is a pop-up ad.',
      'Close': 'Close'

    },
    sw: {
      'Business Categories': 'Makundi ya Biashara',
      'This is a pop-up ad.': 'Hii ni tangazo linalojitokeza.',
      'Close': 'Funga'
    },
    zu: {
      'Business Categories': 'Izigaba Zebhizinisi',
      'This is a pop-up ad.': 'Lena yisikhangiso esivela phezulu.',
      'Close': 'Vala'
    },
    ha: {
      'Business Categories': 'Rukunan Kasuwanci',
      'This is a pop-up ad.': 'Wannan talla ce ta faɗowa.',
      'Close': 'Rufe'
    },
    yo: {
      'Business Categories': 'Ẹ̀ka Ìṣòwò',
      'This is a pop-up ad.': 'Èyí ni ìpolówó tó ń jẹ́.',
      'Close': 'Tí'
    },
    am: {
      'Business Categories': 'የንግድ ምድቦች',
      'This is a pop-up ad.': 'ይህ ማስታወቂያ ነው.',
      'Close': 'ዝጋ'
    }
  };
  return translations[languageCode][text] || text;
};

const UserDashboard = () => {
  const [selectedLanguage, setSelectedLanguage] = useState(africanLanguages[0].code);
  const [showAd, setShowAd] = useState(true);
  const [translatedTexts, setTranslatedTexts] = useState({
    categoriesTitle: translate('Business Categories', selectedLanguage),
    adText: translate('This is a pop-up ad.', selectedLanguage),
    closeText: translate('Close', selectedLanguage)
  });

  const handleLanguageChange = (e) => {
    const languageCode = e.target.value;
    setSelectedLanguage(languageCode);
    setTranslatedTexts({
      categoriesTitle: translate('Business Categories', languageCode),
      adText: translate('This is a pop-up ad.', languageCode),
      closeText: translate('Close', languageCode)
    });
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
              <option key={language.code} value={language.code}>{language.name}</option>
            ))}
          </select>
        </div>
      </nav>
      <div style={{ backgroundColor: ayobaColors.accent, color: 'black' }}>
        <div style={{ padding: '2em' }}>
          <h2>{translatedTexts.categoriesTitle}</h2>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1em' }}>
            {Object.keys(categories[selectedLanguage]).map(category => (
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
                {categories[selectedLanguage][category]}
              </div>
            ))}
          </div>
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
          <p>{translatedTexts.adText}</p>
          <button onClick={closeAd} style={{
            backgroundColor: ayobaColors.primary,
            color: 'white',
            border: 'none',
            borderRadius: '3px',
            padding: '0.5em 1em',
            cursor: 'pointer',
            transition: 'background-color 0.3s ease',
          }}>{translatedTexts.closeText}</button>
        </div>
      )}
    </div>
  );
}

export default UserDashboard;
