import React from 'react';

const Header = () => {
  return (
    <header style={styles.header}>
      <div style={styles.logoContainer}>
        <img 
          src="src/ayobalogo.png" // Update with the correct path to your logo
          alt="Ayoba Logo" 
          style={styles.logo}
        />
      </div>
      <h1 style={styles.title}>WELCOME TO AYOBA BIZ CONNECT!</h1>
      <div style={styles.languageContainer}>
        <span style={styles.languageText}>LANGUAGE</span>
        <img src="src/nigeria-flag.png" alt="Nigeria Flag" style={styles.flag} />
        <img src="src/uk-flag.png" alt="UK Flag" style={styles.flag} />
        <img src="src/southafrica-flag.png" alt="South Africa Flag" style={styles.flag} />
        <div style={styles.searchContainer}>
          <input type="text" placeholder="Search..." style={styles.searchInput} />
          <button style={styles.searchButton}>🔍</button>
        </div>
      </div>
    </header>
  );
}

const styles = {
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '1em 2em',
    backgroundColor: '#0066cc',
    color: '#fff'
  },
  logoContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  logo: {
    height: '60px',
    marginRight: '1em'
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    margin: '0'
  },
  languageContainer: {
    display: 'flex',
    alignItems: 'center'
  },
  languageText: {
    marginRight: '0.5em',
    fontSize: '1em',
    fontWeight: 'bold'
  },
  flag: {
    height: '20px',
    margin: '0 0.5em'
  },
  searchContainer: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: '1em'
  },
  searchInput: {
    padding: '0.5em',
    borderRadius: '5px',
    border: 'none',
    outline: 'none'
  },
  searchButton: {
    padding: '0.5em',
    border: 'none',
    backgroundColor: 'transparent',
    cursor: 'pointer',
    color: '#fff'
  }
};

export default Header;
