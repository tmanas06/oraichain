import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import Blog from './pages/Blog';
import EventsCalendar from './pages/EventsCalendar';
import ProjectShowcase from './pages/ProjectShowcase';

const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Routes>
          <Route path="/" Component={Home} />
          <Route path="/blog" Component={Blog} />
          <Route path="/events-calendar" Component={EventsCalendar} />
          <Route path="/project-showcase" Component={ProjectShowcase} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
