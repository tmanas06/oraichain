import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import Projects from './pages/Projects';
import SubmitProject from './pages/SubmitProject';
import StudentProjects from './pages/StudentProjects';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/projects" Component={Projects} />
          <Route path="/submit-project" Component={SubmitProject} />
          <Route path="/student-projects" Component={StudentProjects} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
