// import React from 'react'
import AboutCard from './AboutCard';
// import Navbar from './Navbar';
import ProjectView from '../Projects/ProjectView';
import './style/Home.css';
import EducationView from '../Education/Education';
import WorkExpView from '../Work-Experience/WorkExp';
import SkillView from '../Skills/SkillView';
import ContactView from '../Contact/ContactView';
function HomeView() {
  return (
    <div>
      <AboutCard />
      <EducationView />
      <WorkExpView />
      <SkillView />
      <ProjectView />
      <ContactView />
    </div>
  )
}

export default HomeView