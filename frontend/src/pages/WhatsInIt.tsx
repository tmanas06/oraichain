import React from 'react';
import bg2 from './bg2.png';
import whatsImage from './whats.png';
import andromedaFont from '../fonts/Andromeda-eR2n.ttf';
import futuristicShoreFont from '../fonts/FuturisticShoreRegular-2JP8.otf';

// Define the keyframes for floating animation
const floatAnimation = `
  @keyframes float {
    0% { transform: translateY(0); }
    50% { transform: translateY(-10px); }
    100% { transform: translateY(0); }
  }
`;

// Injecting font-face rules to apply the custom fonts
const globalStyles = `
  @font-face {
    font-family: 'Andromeda';
    src: url(${andromedaFont}) format('truetype');
  }
  @font-face {
    font-family: 'Futuristic Shore';
    src: url(${futuristicShoreFont}) format('opentype');
  }
`;

// Inject styles into the document head
const styleTag = document.createElement('style');
styleTag.innerHTML = globalStyles + floatAnimation;
document.head.appendChild(styleTag);

const WhatsInit: React.FC = () => {
  return (
    <div style={styles.container}>
      <div style={styles.overlay}>
        <div style={styles.contentWrapper}>
          <div style={styles.imageBottomLeft}>
            <img src={whatsImage} alt="What's in it" style={{ ...styles.image, ...styles.floatAnimation }} />
          </div>
          <div style={styles.gradientBox}>
            <h2 style={styles.title}>WHAT'S IN IT FOR YOU?</h2>
            <p style={styles.content}>
              Get access to exclusive content, participate in community events, and much more.
            </p>
          </div>
          <div style={styles.imageBottomRight}>
            <img src={whatsImage} alt="What's in it" style={{ ...styles.image, ...styles.floatAnimation }} />
          </div>
        </div>
      </div>
    </div>
  );
};

const styles = {
  container: {
    background: `url(${bg2}) no-repeat center center fixed`,
    backgroundSize: 'cover',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontFamily: 'Arial, sans-serif',
  } as React.CSSProperties,
  overlay: {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${bg2}) no-repeat center center',
    backgroundSize: 'cover',
  } as React.CSSProperties,
  contentWrapper: {
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    zIndex: 1, // Ensure content is above the overlay
  } as React.CSSProperties,
  gradientBox: {
    background: 'transparent',
    borderRadius: '12px',
    padding: '3rem',
    boxShadow: '0px 8px 32px rgba(0, 0, 0, 0.3)',
    color: '#ffffff',
    width: '45%',
    height: '35rem',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: '2rem',
    textAlign: 'center',
    backdropFilter: 'blur(10px)',
    border: '1px solid rgba(255, 255, 255, 0.18)',
    position: 'relative',
    overflow: 'hidden',
  } as React.CSSProperties,
  imageBottomLeft: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    zIndex: 0,
    width: '30%', // Adjust size as needed
    height: 'auto',
  } as React.CSSProperties,
  imageBottomRight: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    zIndex: 0,
    width: '30%', // Adjust size as needed
    height: 'auto',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
  } as React.CSSProperties,
  title: {
    fontSize: '4rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    transform: 'rotate(-5deg)',
    fontFamily: 'Andromeda',
    textTransform: 'uppercase', // Ensure text is uppercase
    background: '-webkit-linear-gradient(#21ff25, #8c21ff)',
    '-webkit-background-clip': 'text',
    '-webkit-text-fill-color': 'transparent',
  } as React.CSSProperties,
  content: {
    color: '#21ff25',
    fontSize: '1.9rem',
    lineHeight: '1.5',
    transform: 'rotate(-5deg)',
    fontFamily: 'Futuristic Shore, sans-serif', // Normal font for content
    textTransform: 'uppercase', // Capital letters for content
  } as React.CSSProperties,
  floatAnimation: {
    animation: 'float 3s ease-in-out infinite', // Apply floating animation
  } as React.CSSProperties,
};

export default WhatsInit;
