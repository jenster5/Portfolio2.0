import React from 'react';
import { Header } from './components/Header';
import ProjectsCarousel from './components/Projects';
import { Tech } from './components/Tech';

export const App = () => {
  return (
    <div className="entire-wrapper">
      <Header />
      <Tech />
      <ProjectsCarousel />

    </div>
  )
}