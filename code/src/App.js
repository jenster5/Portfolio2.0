import React from 'react';
import { Header } from './components/Header';
import ProjectsCarousel from './components/Projects';

export const App = () => {
  return (
    <div className="entire-wrapper">
      <Header />
      <ProjectsCarousel />

    </div>
  )
}