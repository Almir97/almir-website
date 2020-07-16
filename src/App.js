import React from 'react';
import HomePage from './pages/HomePage';
import AboutPage from './pages/AboutPage';
import ProjectPage from './pages/ProjectPage';
import EducationPage from './pages/EducationPage';
import ContactPage from './pages/ContactPage';
import NavBar from './NavBar.js';
import './App.css';

function App() {
  return (
      <div className="App">
        <NavBar />
        <div id="page-body">
          <HomePage/>
          <AboutPage />
          <EducationPage />
          <ProjectPage />
          <ContactPage />
        </div>
      </div>
  );
}

export default App;
