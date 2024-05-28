import React, { useState } from 'react';

interface Project {
  title: string;
  link: string;
  screenshot: string;
}

const SubmitProject: React.FC = () => {
  const [project, setProject] = useState<Project>({ title: '', link: '', screenshot: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle project submission logic
    console.log('Project submitted:', project);
  };

  return (
    <div>
      <h1>Submit Your Project</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Project Title"
          value={project.title}
          onChange={(e) => setProject({ ...project, title: e.target.value })}
        />
        <input
          type="url"
          placeholder="GitHub Link"
          value={project.link}
          onChange={(e) => setProject({ ...project, link: e.target.value })}
        />
        <input
          type="url"
          placeholder="Screenshot URL"
          value={project.screenshot}
          onChange={(e) => setProject({ ...project, screenshot: e.target.value })}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default SubmitProject;
