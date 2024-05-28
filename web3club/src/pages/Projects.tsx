import React from 'react';

const Projects: React.FC = () => {
  const projectIdeas = [
    'Decentralized Voting System',
    'NFT Marketplace',
    // Add more ideas
  ];

  return (
    <div>
      <h1>Project Ideas</h1>
      <ul>
        {projectIdeas.map((idea, index) => (
          <li key={index}>{idea}</li>
        ))}
      </ul>
    </div>
  );
};

export default Projects;
