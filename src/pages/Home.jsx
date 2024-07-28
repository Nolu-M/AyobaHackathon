import { Link } from "react-router-dom"
import AyobaLogo from '../assets/ayoba-logo.png'
import { useState } from "react";

const translations = {
  en: {
    welcome: "WELCOME TO AYOBA BIZ CONNECT!",
    language: "LANGUAGE",
    searchPlaceholder: "Search...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['SPORTS', 'BEAUTY', 'ENTERTAINMENT', 'FURNITURE', 'FASHION', 'EDUCATIONAL']
  },
  // Other translations...
  zu: {
    welcome: "SIYAKWAMUKELA KU AYOBA BIZ CONNECT!",
    language: "ULIMI",
    searchPlaceholder: "Sesha...",
    bizhub: "BIZ",
    hub: "HUB",
    categories: ['EZEMIDLALO', 'UBUHLE', 'OKWEMIDLALO', 'IFANITHA', 'IMFASHINI', 'IMFUNDO']
  }
};



const Home = () => {
  const [selectedLanguage, setSelectedLanguage] = useState('en');
  


  const handleLanguageChange = (event) => {
    setSelectedLanguage(event.target.value);
  };


  return (
    <div>
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
            <option value="en">English</option>
            <option value="af">Afrikaans</option>
            <option value="am">Amharic</option>
            <option value="ha">Hausa</option>
            <option value="lg">Luganda</option>
            <option value="rw">Kinyarwanda</option>
            <option value="so">Somali</option>
            <option value="st">Sesotho</option>
            <option value="sw">Swahili</option>
            <option value="ts">Tsonga</option>
            <option value="tn">Setswana</option>
            <option value="ve">Venda</option>
            <option value="xh">Xhosa</option>
            <option value="yo">Yoruba</option>
            <option value="zu">Zulu</option>
          </select>
        </div>
        <div style={styles.searchContainer}>
          <input type="text" placeholder={translations[selectedLanguage].searchPlaceholder} style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>
      </div>
    </div>
      <h1>Home</h1>
      <Link to='/user-dashboard'>Login</Link>
      <Link to='/user-dashboard'>Register</Link>
      <Link to='/business-dashboard'>Business Dashboard</Link>
      <Link to='/business-page'>Business Page</Link>
      <Link to='/user-dashboard'>User Dashboard</Link>
    </div>
  )
}

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

export default Home

