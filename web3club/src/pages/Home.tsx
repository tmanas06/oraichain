import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import cityscape from './cityscape.png'; // Make sure to import the background image
import logo from './logo.png'; // Import your logo image
import bgdao from './bgdao.jpg'; // Import the background image for the About Us section
import teambg from './teambg.jpg'; // Import the background image for the Our Team section

const Home: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const teamRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);

    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 0.1,
    };

    const handleFade = (entries: IntersectionObserverEntry[]) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        } else {
          entry.target.classList.remove('visible');
        }
      });
    };

    const observer = new IntersectionObserver(handleFade, options);

    if (heroRef.current) observer.observe(heroRef.current);
    if (aboutRef.current) observer.observe(aboutRef.current);
    if (teamRef.current) observer.observe(teamRef.current);

    return () => {
      if (heroRef.current) observer.unobserve(heroRef.current);
      if (aboutRef.current) observer.unobserve(aboutRef.current);
      if (teamRef.current) observer.unobserve(teamRef.current);
    };
  }, []);

  return (
    <div style={styles.container}>
      <nav style={styles.navbar}>
        <Link to="/">
          <img src={logo} alt="Logo" style={styles.logo} />
        </Link>
        <Link to="/blog" style={styles.navLink} className="nav-link">Blog</Link>
        <Link to="/events-calendar" style={styles.navLink} className="nav-link">Events Calendar</Link>
        <Link to="/project-showcase" style={styles.navLink} className="nav-link">Project Showcase</Link>
        <Link to="/mint-nft" style={styles.navLink} className="nav-link">Mint NFT</Link>
      </nav>
      <div ref={heroRef} style={styles.heroSection}>
        <div style={styles.arrowContainer}>
          <div style={styles.arrow}>»»</div>
        </div>
      </div>
      <div ref={aboutRef} style={{ ...styles.section, backgroundImage: `url(${bgdao})` }}>
        <h2>About Us</h2>
        <p>
          The KLH University Web3 Club is dedicated to exploring the latest in Web3 technologies.
          Our mission is to educate and inspire students to innovate using blockchain and decentralized technologies.
        </p>
      </div>
      <div ref={teamRef} style={{ ...styles.section, backgroundImage: `url(${teambg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <h2>Our Team</h2>
        <p>
          Our team consists of passionate students who are enthusiastic about blockchain, cryptocurrencies, and decentralized applications. Together, we aim to build a strong Web3 community.
        </p>
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
  container: {
    backgroundColor: '#121212',
    color: '#ffffff',
    display: 'flex',
    flexDirection: 'column',
    fontFamily: "'Audiowide', sans-serif", // Apply Audiowide font to all text
  } as React.CSSProperties,
  navbar: {
    display: 'flex',
    justifyContent: 'space-between', // Adjusted for logo placement
    alignItems: 'center', // Center vertically
    padding: '1rem',
    backgroundColor: '#000000', // Black background
    position: 'sticky',
    top: 0,
    zIndex: 1000,
  } as React.CSSProperties,
  navLink: {
    color: '#ffffff',
    textDecoration: 'none',
    fontSize: '1rem',
    marginLeft: '1rem', // Add some space between links
    transition: 'color 0.3s ease-in-out', // Add transition for smooth color change
  } as React.CSSProperties,
  logo: {
    width: '5cm', // Width of 2cm
    height: '2cm', // Height of 2cm
    marginLeft: '1rem', // Adjusted for spacing
  } as React.CSSProperties,
  heroSection: {
    position: 'relative',
    height: '100vh',
    backgroundImage: `url(${cityscape})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    opacity: 0,
    transition: 'opacity 1s ease-in-out',
  } as React.CSSProperties,
  arrowContainer: {
    position: 'absolute',
    bottom: '240px',
    left: '50%',
    transform: 'translateX(-50%) rotate(90deg)', // Rotate the arrows
  } as React.CSSProperties,
  arrow: {
    color: '#ccff33', // Neon lime yellow color
    fontSize: '3rem',
    animation: 'floatUpDown 2s infinite',
  } as React.CSSProperties,
  section: {
    height: '100vh', // Set height to 100% of viewport height
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    opacity: 0,
    transition: 'opacity 1s ease-in-out',
  } as React.CSSProperties,
  visible: {
    opacity: 1,
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
    font-family: 'Audiowide', sans-serif;
    min-height: 100vh;
  }
  #root {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
  .visible {
    opacity: 1 !important;
  }
  .nav-link:hover {
    color: #cafc5d !important;
  }
  @keyframes floatUpDown {
    0% { transform: translateX(0); }
    50% { transform: translateX(-10px); }
    100% { transform: translateX(0); }
  }
`;
document.head.appendChild(globalStyles);

export default Home;
