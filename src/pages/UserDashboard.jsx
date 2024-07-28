import { useState } from 'react';
import { Link } from 'react-router-dom';
import AyobaLogo from '../assets/ayoba-logo.png'


const translations = {
  en: {
    welcome: "WELCOME TO AYOBA BIZ CONNECT!",
    language: "LANGUAGE",
    searchPlaceholder: "Search...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['SPORTS', 'BEAUTY', 'ENTERTAINMENT', 'FURNITURE', 'FASHION', 'EDUCATIONAL']
  },
  af: {
    welcome: "WELKOM BY AYOBA BIZ CONNECT!",
    language: "TAAL",
    searchPlaceholder: "Soek...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['SPORT', 'SKOONHEID', 'VERMAAK', 'MEUBELS', 'MODE', 'ONDERWYS']
  },
  am: {
    welcome: "እንኳን ወደ AYOBA BIZ CONNECT በሰላም መጡ!",
    language: "ቋንቋ",
    searchPlaceholder: "ፈልግ...",
    bizhub: "ቢዝ",
    hub: "ሀብ",
    categories: ['ስፖርት', 'ውበት', 'መዝናኛ', 'የቤት ቁሳቁሶች', 'ፋሽን', 'ትምህርት']
  },
  ha: {
    welcome: "BARKA DA ZUWA AYOBA BIZ CONNECT!",
    language: "HARSHE",
    searchPlaceholder: "Nema...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['WASANNI', 'KYAU', 'NISANTA', 'KAYAN GIDA', 'FASHION', 'ILIMI']
  },
  lg: {
    welcome: "TUKUWA AYOBA BIZ CONNECT!",
    language: "LUGHA",
    searchPlaceholder: "Laba...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['EBYOKUKWATAKO', 'OBULUNGI', 'EMIZANNYO', 'EBYUMA', 'FASIONI', 'OBUYIIYA']
  },
  rw: {
    welcome: "IKAZE KURI AYOBA BIZ CONNECT!",
    language: "URURIMI",
    searchPlaceholder: "Shakisha...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['IMIKINO', 'UBWIZA', 'IMYIDAGADURO', 'IBICURUZWA BYA GIKORESHO', 'IMIDELI', 'UBUREZI']
  },
  so: {
    welcome: "KU SOO DHAWOOW AYOBA BIZ CONNECT!",
    language: "LUGAHA",
    searchPlaceholder: "Raadi...",
    bizhub: "GANACSI",
    hub: "HUB",
    categories: ['CIYAARAHA', 'QURUXDA', 'MADADAALO', 'AGABKA GURIGA', 'FASHION', 'WAXBARASHO']
  },
  st: {
    welcome: "AMOHELA HO AYOBA BIZ CONNECT!",
    language: "PUO",
    searchPlaceholder: "Batla...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['LIPAPALI', 'BOTLE', 'BOITHABISO', 'FURNITURE', 'FESHENE', 'THUTO']
  },
  sw: {
    welcome: "KARIBU KWA AYOBA BIZ CONNECT!",
    language: "LUGHA",
    searchPlaceholder: "Tafuta...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['MICHEZO', 'UZURI', 'BURUDANI', 'SAMANI', 'MITINDO', 'ELIMU']
  },
  ts: {
    welcome: "AMUKELANI KU AYOBA BIZ CONNECT!",
    language: "RIMU",
    searchPlaceholder: "Swi Komba...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['MITILO', 'KUHLULA', 'MITILO', 'FURNITURE', 'MODYULO', 'DYA']
  },
  tn: {
    welcome: "AMOHELANG GO AYOBA BIZ CONNECT!",
    language: "PUI",
    searchPlaceholder: "Batla...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['DIRAETSANA', 'BOJANG', 'THABISO', 'DITIRO TSA GALE', 'FESHENE', 'THUTO']
  },
  ve: {
    welcome: "NI VHUKHUVHANI AYOBA BIZ CONNECT!",
    language: "LULIMI",
    searchPlaceholder: "Huwelela...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['MITSHINA', 'VHUAMI', 'KHEFUNELO', 'MATHA', 'FESHINI', 'EDUCATION']
  },
  xh: {
    welcome: "WAMKELEKILE KWI AYOBA BIZ CONNECT!",
    language: "ULWIMI",
    searchPlaceholder: "Khangela...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['IMIDLALO', 'UBUHLE', 'IMIDIYO', 'IFURNITURE', 'IMIKHOSI', 'EZEMFUNDO']
  },
  yo: {
    welcome: "KAABO SI AYOBA BIZ CONNECT!",
    language: "EDE",
    searchPlaceholder: "Wá ṣàwárí...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['Ere-idaraya', 'Ẹwà', 'Idárayá', 'Ẹ̀kúnrẹ́rẹ́ Ilé', 'Àṣà', 'Ẹ̀kọ́']
  },
  zu: {
    welcome: "SIYAKWAMUKELA KU AYOBA BIZ CONNECT!",
    language: "ULIMI",
    searchPlaceholder: "Sesha...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['EZEMIDLALO', 'UBUHLE', 'OKWEMIDLALO', 'IFANITHA', 'IMFASHINI', 'IMFUNDO']
  }
};

const videoAds = {
  SPORTS: ['videos/sport1.mp4', 'videos/sport2.mp4'],
  BEAUTY: ['videos/beauty1.mp4', 'videos/beauty2.mp4'],
  ENTERTAINMENT: ['videos/entertainment1.mp4', 'videos/entertainment2.mp4'],
  FURNITURE: ['videos/furniture1.mp4', 'videos/furniture2.mp4'],
  FASHION: ['videos/fashion1.mp4', 'videos/fashion2.mp4'],
  EDUCATIONAL: ['videos/educational1.mp4', 'videos/educational2.mp4']
};

const UserDashboard = () => {
  const [selectedCategory, setSelectedCategory] = useState(null);
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  const [currentVideo, setCurrentVideo] = useState(null);

  const handleCategoryClick = (category) => {
    setSelectedCategory(category);
    setCurrentVideo(null); // Reset the current video when the category changes
  };

  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };

  const handleVideoClick = (videoSrc) => {
    setCurrentVideo(videoSrc);
  };

  return (
    <div style={styles.container}>
      <header style={styles.header}>
        <div style={styles.logoContainer}>
          <Link to="/"><img 
            src={AyobaLogo} // Update with the correct path to your logo
            alt="Ayoba Logo" 
            style={styles.logo}
          /></Link>
        </div>
        <h1 style={styles.title}>{translations[selectedLanguage].welcome}</h1>
      </header>
      <div style={styles.languageSearchContainer}>
        <div style={styles.languageContainer}>
          <span style={styles.languageText}>{translations[selectedLanguage].language}</span>
          <select value={selectedLanguage} onChange={handleLanguageChange} style={styles.languageDropdown}>
            {/* Add your language options here */}
          </select>
        </div>
        <div style={styles.searchContainer}>
          <input type="text" placeholder={translations[selectedLanguage].searchPlaceholder} style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>
      </div>
      <div style={styles.mainContent}>
        <div style={styles.bizHubContainer}>
          <h2 style={styles.bizHubTitle}>{translations[selectedLanguage].bizhub}<span style={styles.hubTitle}>{translations[selectedLanguage].hub}</span></h2>
          <ul style={styles.categoriesList}>
            {translations[selectedLanguage].categories.map((category) => (
              <li
                key={category}
                onClick={() => handleCategoryClick(category)}
                style={{
                  ...styles.categoryItem,
                  color: selectedCategory === category ? 'red' : 'white'
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'red';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = selectedCategory === category ? 'red' : 'white';
                }}
              >
                {category}
              </li>
            ))}
          </ul>
        </div>
        <div style={styles.advertisementContainer}>
          {selectedCategory && videoAds[selectedCategory] && Array.isArray(videoAds[selectedCategory]) ? (
            videoAds[selectedCategory].map((videoSrc) => (
              <video
                key={videoSrc}
                src={videoSrc}
                controls
                style={styles.adVideo}
                onClick={() => handleVideoClick(videoSrc)}
              />
            ))
          ) : (
            <p>No videos available for the selected category.</p>
          )}
          {currentVideo && (
            <div style={styles.videoPlayerContainer}>
              <video src={currentVideo} controls autoPlay style={styles.videoPlayer} />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#ffffff',
    fontFamily: 'Arial, sans-serif'
  },
  header: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '1em 2em',
    backgroundColor: '#ffffff',
    color: '#005bb5',
    position: 'relative'
  },
  logoContainer: {
    position: 'absolute',
    left: '1em',
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '60px',
    marginRight: '1em'
  },
  title: {
    margin: '0',
    fontSize: '2em',
    fontWeight: 'bold'
  },
  languageSearchContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'flex-end',
    padding: '1em 2em',
    backgroundColor: '#ffffff',
    color: '#ffd700'
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '1em'
  },
  languageText: {
    fontSize: '1em',
    fontWeight: 'bold',
    marginRight: '0.5em'
  },
  languageDropdown: {
    padding: '0.5em',
    borderRadius: '5px',
    border: '1px solid #ffd700',
    backgroundColor: '#fff',
    color: '#000',
    outline: 'none'
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  searchInput: {
    padding: '0.5em',
    borderRadius: '5px',
    border: '1px solid #ffd700',
    outline: 'none',
    marginRight: '0.5em'
  },
  searchButton: {
    padding: '0.5em',
    border: '1px solid #ffd700',
    backgroundColor: '#ffd700',
    color: '#ffffff',
    cursor: 'pointer',
    borderRadius: '5px'
  },
  mainContent: {
    display: 'flex',
    padding: '2em',
    gap: '2em'
  },
  bizHubContainer: {
    backgroundColor: '#005bb5',
    padding: '1em',
    borderRadius: '10px',
    color: '#ffffff',
    flex: '1'
  },
  bizHubTitle: {
    fontSize: '2em',
    marginBottom: '1em',
    color: '#ffd700'
  },
  hubTitle: {
    color: '#ffffff'
  },
  categoriesList: {
    listStyleType: 'none',
    padding: '0'
  },
  categoryItem: {
    fontSize: '1.2em',
    marginBottom: '0.5em',
    cursor: 'pointer',
    transition: 'color 0.3s',
  },
  advertisementContainer: {
    backgroundColor: '#005bb5',
    display: 'flex',
    flexDirection: 'column',
    flex: '2',
    gap: '1em',
    borderRadius: '10px'
  },
  adVideo: {
    width: '100%',
    borderRadius: '10px',
    cursor: 'pointer'
  },
  videoPlayerContainer: {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    zIndex: 1000,
    backgroundColor: '#000',
    padding: '10px',
    borderRadius: '10px'
  },
  videoPlayer: {
    width: '80vw',
    height: '80vh',
    borderRadius: '10px'
  },
  videoPlayerClose: {
    position: 'absolute',
    top: '10px',
    right: '10px',
    color: '#fff',
    fontSize: '1.5em',
    cursor: 'pointer'
  }
};

export default UserDashboard;

