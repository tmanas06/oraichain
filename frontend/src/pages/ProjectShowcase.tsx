/** @jsxImportSource @emotion/react */
import React, { useEffect, useState } from 'react';
import { css, keyframes } from '@emotion/react';
import backImage from './back.png'; // Import the back image

const neonBlink = keyframes`
  from {
    color: #7900f2; // Initial color
  }
  to {
    color: #a706ff; // Neon burple color
  }
`;

const ProjectShowcase: React.FC = () => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css?family=Audiowide';
    link.rel = 'stylesheet';
    document.head.appendChild(link);
  }, []);

  const projects = [
    {
      title: 'Turbo-Eth',
      description: 'Description of project 1',
      imageUrl: 'https://repository-images.githubusercontent.com/583595113/470ebfa7-e25a-43a6-bc6f-c6f119149e33',
      link: 'https://github.com/turbo-eth/template-web3-app',
    },
    {
      title: 'Open-source nft marketplace',
      description: 'Description of project 2',
      imageUrl: 'https://raw.githubusercontent.com/yessGlory17/nft-marketplace/main/docs/images/home.png',
      link: 'https://github.com/yessGlory17/nft-marketplace',
    },
    {
      title: 'Project 3',
      description: 'Description of project 3',
      imageUrl: 'https://opengraph.githubassets.com/f7ccc84f0e3e1b8d4340e5091487c0373b87da34d702faf20eeaffe73f93969b/microgift/web3-developer-solana-evm-etc',
      link: 'https://github.com/microgift/web3-developer-solana-evm-etc',
    },
    {
      title: 'Project 4',
      description: 'Description of project 4',
      imageUrl: 'https://repository-images.githubusercontent.com/127246132/4bab4d45-efde-4f9d-ad7c-6bdfd5c5776d',
      link: 'https://github.com/WalletConnect/web3modal',
    },
    {
      title: 'Open-source nft marketplace',
      description: 'Description of project 2',
      imageUrl: 'https://raw.githubusercontent.com/yessGlory17/nft-marketplace/main/docs/images/home.png',
      link: 'https://github.com/yessGlory17/nft-marketplace',
    },
    // Add more projects as needed
  ];

  const [isHovered, setIsHovered] = useState(false);

  return (
    <div css={styles.container}>
      <img
        src={backImage}
        alt="Back"
        css={styles.backButton(isHovered)}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onClick={() => window.history.back()}
      />
      <h1 css={styles.heading}>Project Showcase</h1>
      <div
        css={styles.submitCard}
        onClick={() => window.open('https://forms.gle/fHApmiFoh66vRfBK7', '_blank')}
        onMouseEnter={(e) => (e.currentTarget.style.backgroundImage = 'linear-gradient(to right, #6a11cb 0%, #2575fc 100%)')}
        onMouseLeave={(e) => (e.currentTarget.style.backgroundImage = 'linear-gradient(-20deg, #92fe9d 0%, #00c9ff 100%)')}
      >
        Want to contribute? Submit your project here
      </div>
      <div css={styles.grid}>
        {projects.map((project, index) => (
          <div key={index} css={styles.card}>
            <img src={project.imageUrl} alt={project.title} css={styles.image} />
            <div css={styles.cardContent}>
              <h2>{project.title}</h2>
              <p>{project.description}</p>
              <button
                css={styles.githubButton}
                onClick={() => window.open(project.link, '_blank')}
              >
                View on GitHub
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: css({
    padding: '2rem',
    fontFamily: "'Audiowide', sans-serif", // Apply the Audiowide font to the entire container
  }),
  heading: css({
    fontSize: '6rem', // Bigger font size
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#7900f2', // Neon burple color
    textShadow: '0 0 5px #a706ff', // Neon burple glow
    animation: `${neonBlink} 1s infinite alternate`, // Blinking effect
  }),
  backButton: (isHovered: boolean) => css({
    width: '70px',
    height: '70px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    transform: isHovered ? 'scale(1.2)' : 'scale(1)',
  }),
  submitCard: css({
    display: 'block',
    marginBottom: '1rem',
    padding: '1rem',
    backgroundImage: 'linear-gradient(-20deg, #92fe9d 0%, #00c9ff 100%)',
    color: '#fff',
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: '10px',
    cursor: 'pointer',
    transition: 'background-image 0.3s',
    textDecoration: 'none',
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
  }),
  card: css({
    display: 'flex',
    flexDirection: 'column',
    background: 'linear-gradient(to right, #000000, #330867)', // Black to lime yellow gradient
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
  }),
  image: css({
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '10px',
  }),
  cardContent: css({
    color: '#fff',
  }),
  githubButton: css({
    backgroundImage: 'linear-gradient(180deg, #2af598 0%, #009efd 100%)', // Gradient background
    color: '#000000', // Black text color
    border: 'none',
    padding: '0.5rem 1rem',
    borderRadius: '5px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
    '&:hover': {
      backgroundImage: 'none', // Remove background image on hover
      backgroundColor: '#9b34eb', // Adjusted hover color
      color: '#000000', // Black text color on hover
    },
}),

};

export default ProjectShowcase;
