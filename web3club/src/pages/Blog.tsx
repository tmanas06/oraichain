import React, { useState } from 'react';
import backImage from './back.png'; // Import the back image

interface BlogPost {
  title: string;
  imageUrl: string;
  link: string;
}

const Blog: React.FC = () => {
  const blogPosts: BlogPost[] = [
    {
      title: 'Intro to Web3',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP4Bc0-q9wQ3EbckyqzhGyH2r-6QegBGTQ5iPZkWRIXZ3zwJTjJCqb5A_3wE3iy9bBi1w&usqp=CAU',
      link: 'https://example.com/intro-to-web3',
    },
    {
      title: 'Understanding Blockchain',
      imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0yuSTo19yVXs89SBdqgPeILv8gIT9PA47kg&s',
      link: 'https://example.com/understanding-blockchain',
    },
    // Add more posts as needed
  ];

  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <div style={styles.container}>
      <img 
        src={backImage} 
        alt="Back" 
        style={{...styles.backButton, transform: hoveredIndex === -1 ? 'scale(1.2)' : 'scale(1)'}} 
        onMouseEnter={() => setHoveredIndex(-1)} 
        onMouseLeave={() => setHoveredIndex(null)} 
        onClick={() => window.history.back()} 
      />
      <h1 style={{ ...styles.header, fontFamily: "'Audiowide', sans-serif" }}>Blogs</h1>
      <div style={styles.grid}>
        {blogPosts.map((post, index) => (
          <a 
            key={index} 
            href={post.link} 
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ 
              ...styles.card, 
              transform: hoveredIndex === index ? 'scale(1.05)' : 'scale(1)' 
            }}
            onMouseEnter={() => setHoveredIndex(index)} 
            onMouseLeave={() => setHoveredIndex(null)}
          >
            <img src={post.imageUrl} alt={post.title} style={styles.image} />
            <h2 style={{ ...styles.title, fontFamily: "'Audiowide', sans-serif" }}>{post.title}</h2>
          </a>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: {
    padding: '2rem',
    backgroundColor: '#121212',
    color: '#ffffff',
    fontFamily: "'Audiowide', sans-serif",
  } as React.CSSProperties,
  backButton: {
    width: '70px',
    height: '70px',
    cursor: 'pointer',
    marginBottom: '1rem',
    transition: 'transform 0.3s ease-in-out', // Add transition for smooth scaling
  } as React.CSSProperties,
  header: {
    textAlign: 'center',
    marginBottom: '2rem',
  } as React.CSSProperties,
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  } as React.CSSProperties,
  card: {
    textDecoration: 'none',
    color: '#ffffff',
    border: '1px solid #333',
    borderRadius: '8px',
    overflow: 'hidden',
    transition: 'transform 0.2s',
  } as React.CSSProperties,
  image: {
    width: '100%',
    height: '200px',
    objectFit: 'cover',
  } as React.CSSProperties,
  title: {
    padding: '1rem',
    textAlign: 'center',
    backgroundColor: '#000000', // Black background
  } as React.CSSProperties,
};

export default Blog;
