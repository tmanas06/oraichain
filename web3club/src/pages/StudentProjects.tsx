import React, { useState, useEffect } from 'react';

interface Project {
  title: string;
  link: string;
  screenshot: string;
}

const StudentProjects: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);

  useEffect(() => {
    // Fetch projects from a backend or local storage
    setProjects([
      { title: 'Project 1', link: 'https://github.com/example', screenshot: 'url-to-screenshot' },
      // Add more projects
    ]);
  }, []);

  return (
    <div>
      <h1>Student Projects</h1>
      {projects.map((project, index) => (
        <div key={index}>
          <h2>{project.title}</h2>
          <a href={project.link} target="_blank" rel="noopener noreferrer">GitHub Link</a>
          <img src={project.screenshot} alt={`${project.title} screenshot`} />
        </div>
      ))}
    </div>
  );
};

export default StudentProjects;
