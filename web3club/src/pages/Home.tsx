import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link to="/" style={styles.navLink}>Home</Link>
        <Link to="/blog" style={styles.navLink}>Blog</Link>
        <Link to="/projects" style={styles.navLink}>Projects</Link>
        <Link to="/submit-project" style={styles.navLink}>Submit Project</Link>
        <Link to="/student-projects" style={styles.navLink}>Student Projects</Link>
        <Link to="/mint-nft" style={styles.navLink}>Mint NFT</Link>
      </nav>
      <div style={styles.content}>
        <h1>Welcome to the KLH University Web3 Club</h1>
        <p>Learn and explore Web3 technologies with us.</p>
      </div>
    </div>
  );
};

const styles = {
  // CSS Reset
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  } as React.CSSProperties,
  body: {
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: 'Arial, sans-serif',
    minHeight: '100vh',
  } as React.CSSProperties,
  '#root': {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh',
  } as React.CSSProperties,
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#1e1e1e',
    borderBottom: '1px solid #333',
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  } as React.CSSProperties,
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
  } as React.CSSProperties,
  content: {
    padding: '2rem',
    textAlign: 'center',
    flex: 1,
  } as React.CSSProperties,
};

// Apply the styles globally
const globalStyles = document.createElement('style');
globalStyles.innerHTML = `
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background-color: #121212;
    color: #ffffff;
    font-family: Arial, sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;
document.head.appendChild(globalStyles);

export default Home;
