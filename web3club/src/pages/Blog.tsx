import React, { useState } from 'react';

interface Post {
  title: string;
  content: string;
}

const Blog: React.FC = () => {
  const [posts] = useState<Post[]>([
    { title: 'Intro to Web3', content: 'Lorem ipsum...' },
    // Add more posts
  ]);

  return (
    <div>
      <h1>Blog</h1>
      {posts.map((post, index) => (
        <div key={index}>
          <h2>{post.title}</h2>
          <p>{post.content}</p>
        </div>
      ))}
    </div>
  );
};

export default Blog;
