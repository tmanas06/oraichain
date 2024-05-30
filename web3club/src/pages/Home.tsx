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
      <div style={{ ...styles.content, textAlign: 'center' }}>
        <h1>Welcome to the KLH University Web3 Club</h1>
        <p>Learn and explore Web3 technologies with us.</p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    minHeight: '100vh',
    fontFamily: 'Arial, sans-serif',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-around',
    padding: '1rem',
    backgroundColor: '#1e1e1e',
    borderBottom: '1px solid #333',
  },
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
  },
  content: {
    padding: '2rem',
    textAlign: 'center',
  }
};

export default Home;
