/** @jsxImportSource @emotion/react */
import React from 'react';
import { css } from '@emotion/react';
import backImage from './back.png'; // Import the back image

const News: React.FC = () => {
  // Define your news data
  const news = [
    {
      title: 'ODHACK 4.0 community call',
      description: 'W3CG Labs',
      imageUrl: 'https://pbs.twimg.com/media/GO675WAW4AkNeha?format=jpg&name=900x900',
      link: 'https://x.com/OnlyDust_com/status/1796580000092578196',
    },
    {
      title: 'Hack ON Blocks Hackathon',
      description: 'Hyderabad DAO',
      imageUrl: 'https://pbs.twimg.com/media/GOV1fGhWsAAfj3t?format=jpg&name=900x900',
      link: 'https://x.com/hyderabaddao/status/1793969206624698613?t=XzpesqOVSn4BjpsiNPpEFQ&s=19',
    },
    {
        title: 'MetaSchool x Mantra chain',
        description: 'metaschool',
        imageUrl: 'https://pbs.twimg.com/media/GOV-TTcW4AAsmMl?format=jpg&name=900x900',
        link: 'https://x.com/0xmetaschool/status/1793978952886648853',
      },
      {
        title: 'Aethir Checker nodes Airdrops',
        description: 'Aethir',
        imageUrl: 'https://pbs.twimg.com/card_img/1796170237449994240/vYOYqD9A?format=jpg&name=900x900',
        link: 'https://x.com/AethirCloud/status/1796180443999416615',
      },
      {
        title: 'Aethir pre launch day news',
        description: 'Aethir',
        imageUrl: 'https://pbs.twimg.com/card_img/1797345741154766848/rm7wq-1f?format=png&name=900x900',
        link: 'https://x.com/AethirCloud/status/1796118820488183877',
      },
      {
        title: 'Onchain summer Buildathon',
        description: 'Devfolio',
        imageUrl: 'https://pbs.twimg.com/card_img/1796132343176212480/Rsdbp9ag?format=jpg&name=900x900',
        link: 'https://x.com/OnlyDust_com/status/1796580000092578196',
      },
      {
        title: 'Solana Floor learn Solana guide',
        description: 'Solana',
        imageUrl: 'https://pbs.twimg.com/card_img/1796232087617552387/w-kJuNSX?format=jpg&name=900x900',
        link: 'https://x.com/solana/status/1797130268534608267',
      },
    // Add more news items as needed
  ];

  return (
    <div css={styles.container}>
      <img src={backImage} alt="Back" css={styles.backButton} onClick={() => window.history.back()} />
      <h1 css={[styles.heading, styles.font]}>News</h1>
      <div css={styles.grid}>
        {news.map((item, index) => (
          <div key={index} css={[styles.card, styles.font]}>
            <h2>{item.title}</h2>
            <p>{item.description}</p>
            <a href={item.link} target="_blank" rel="noopener noreferrer">
              <img src={item.imageUrl} alt={item.title} css={styles.image} />
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

const styles = {
  container: css({
    padding: '2rem',
    fontFamily: "'Audiowide', sans-serif",
  }),
  heading: css({
    fontSize: '7rem',
    marginBottom: '1.5rem',
    textAlign: 'center',
    color: '#7fff00', // Bright lime color
    textShadow: '0 0 100px #7fff00', // Neon lime yellow shadow
  }),
  font: css({
    fontFamily: "'Audiowide', sans-serif",
  }),
  backButton: css({
    width: '70px',
    height: '70px',
    cursor: 'pointer',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.2)',
    },
  }),
  grid: css({
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gridGap: '20px',
  }),
  card: css({
    background: 'linear-gradient(to top, #fcc5e4 0%, #fda34b 15%, #ff7882 35%, #c8699e 52%, #7046aa 71%, #0c1db8 87%, #020f75 100%)',
    borderRadius: '10px',
    padding: '20px',
    boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
    transition: 'transform 0.3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.05)',
    },
  }),
  image: css({
    width: '100%',
    height: 'auto',
    marginBottom: '20px',
    borderRadius: '10px',
  }),
};

export default News;
