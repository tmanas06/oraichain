import React from 'react';
import styled from 'styled-components';

// Sample card data (replace with your actual images, text, title, date, and links)
const cards = [
  { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Honkong web3 event',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'red'
  },
  { 
    id: 2, 
    imageUrl: 'https://ukrainianblockchainweek.com/wp-content/uploads/2024/05/featured-kumekathon-1-2048x1075.jpg', 
    title: 'Ukrainian blockchain week',
    date: '2024-06-22',
    link: 'https://example.com/event2',
    color: 'red'
  },
  { 
    id: 3, 
    imageUrl: 'https://ukrainianblockchainweek.com/wp-content/uploads/2024/02/online-marathon.png', 
    title: 'Inncrypted online marathon',
    date: '2024-06-23',
    link: 'https://example.com/event3',
    color: 'red'
  },
  { 
    id: 1, 
    imageUrl: 'https://ukrainianblockchainweek.com/wp-content/uploads/2024/05/eth-hack-banner.png', 
    title: 'Eth Kyiv hackathon',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'green'
  },
  { 
    id: 1, 
    imageUrl: 'https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,quality=75,width=300,height=300/event-covers/eh/8e80e791-3956-4301-9bb1-019a13fd3385', 
    title: 'L2con brazil',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'green'
  },
  { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'green'
  },
  { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'blue'
  }, { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'blue'
  }, { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'blue'
  }, { 
    id: 1, 
    imageUrl: 'https://images.cointelegraph.com/cdn-cgi/image/format=auto,onerror=redirect,quality=90,width=717/https://s3.cointelegraph.com/storage/uploads/view/b5f8b92626b253df6dd1ea74f55720cf.jpg', 
    title: 'Event 1',
    date: '2024-06-21',
    link: 'https://example.com/event1',
    color: 'purple'
  },
  // Add more cards as needed
];

const Digiboard: React.FC = () => {
  const handleCardClick = (link: string) => {
    window.open(link, '_blank'); // Open link in a new tab
  };

  const handleBackButtonClick = () => {
    window.history.back();
  };

  return (
    <Container>
      <BackButton onClick={handleBackButtonClick}>Back</BackButton>
      <Header>
        <Title>Welcome to Wallstreet DAO's Digiboard</Title>
        <Subtitle>Check out future events, what's upcoming, and RSVP for the coolest stuff!</Subtitle>
      </Header>
      <CardGrid>
        {cards.map(card => (
          <ClickableCard key={card.id} onClick={() => handleCardClick(card.link)}>
            <Card imageUrl={card.imageUrl}>
              <Overlay color={card.color} />
              <CardContent>
                <CardTitle>{card.title}</CardTitle>
                <CardDate>{card.date}</CardDate>
              </CardContent>
            </Card>
          </ClickableCard>
        ))}
      </CardGrid>
    </Container>
  );
};

// Styled components
const Container = styled.div`
  width: 100%;
  min-height: 100vh; /* Ensure the container takes at least the full viewport height */
  display: flex;
  flex-direction: column; /* Align items vertically */
  align-items: center; /* Center items horizontally */
  justify-content: flex-start; /* Align content to the top */
  background-color: #111;
  padding: 20px; /* Add padding to separate from edges */
`;

const BackButton = styled.button`
  font-size: 1.2rem;
  padding: 1rem 2.5rem;
  border: none;
  outline: none;
  border-radius: 0.4rem;
  cursor: pointer;
  text-transform: uppercase;
  background-color: rgb(14, 14, 26);
  color: rgb(234, 234, 234);
  font-weight: 700;
  transition: 0.6s;
  box-shadow: 0px 0px 60px #1f4c65;
  -webkit-box-reflect: below 10px linear-gradient(to bottom, rgba(0,0,0,0.0), rgba(0,0,0,0.4));

  &:active {
    transform: scale(0.92);
  }

  &:hover {
    background: rgb(2, 29, 78);
    background: linear-gradient(270deg, rgba(2, 29, 78, 0.681) 0%, rgb(112, 255, 3) 60%);
    color: rgb(4, 4, 38);
  }

  /* Position the button at top left */
  position: absolute;
  top: 20px; /* Adjust top position */
  left: 20px; /* Adjust left position */
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px; /* Space below the header */
`;

const Title = styled.h1`
  font-size: 2.5rem;
  background-image: linear-gradient(180deg, #2af598 0%, #009efd 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0 0 10px 0;
`;

const Subtitle = styled.h2`
  font-size: 1.5rem;
  background-image: linear-gradient(to right, #b8cbb8 0%, #b8cbb8 0%, #b465da 0%, #cf6cc9 33%, #ee609c 66%, #ee609c 100%);
  background-clip: text;
  -webkit-background-clip: text;
  color: transparent;
  margin: 0;
`;

const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); /* Square cards with a minimum width of 300px */
  gap: 10px; /* Thin gap between cards */
  max-width: 1200px;
  width: 100%;
  padding: 20px;
  margin: 0 auto; /* Center the grid horizontally */
`;

const ClickableCard = styled.div`
  cursor: pointer;
`;

const Card = styled.div<{ imageUrl: string }>`
  position: relative;
  overflow: hidden;
  padding-top: 100%; /* Square aspect ratio */
  background-image: url(${props => props.imageUrl});
  background-size: cover;
  background-position: center;
  border-radius: 0px; /* Sharp edges */
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }
`;

const Overlay = styled.div<{ color: string }>`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%; /* Adjust the height of the color overlay */
  background: ${props => {
    switch(props.color) {
      case 'green':
        return 'linear-gradient(to top, rgba(0, 255, 0, 0.8), transparent)';
      case 'red':
        return 'linear-gradient(to top, rgba(255, 0, 0, 0.8), transparent)';
      case 'purple':
        return 'linear-gradient(to top, rgba(128, 0, 128, 0.8), transparent)';
      default:
        return 'linear-gradient(to top, rgba(0, 255, 255, 0.8), transparent)';
    }
  }};
`;

const CardContent = styled.div`
  position: absolute;
  bottom: 10px;
  left: 0;
  right: 0;
  text-align: center;
  padding: 10px;
  color: #fff;
`;

const CardTitle = styled.h3`
  font-size: 1.5em;
  font-weight: bold;
  margin: 0;
`;

const CardDate = styled.p`
  font-size: 0.8em;
  margin: 5px 0;
`;

export default Digiboard;