import React from 'react';
import AboutSection from '../Components/AboutSection';
import ProjectsSection from '../Components/ProjectsSection';
import ContactBanner from '../Components/ContactBanner';
import HeroSection from '../Components/HeroSection';

export default function Home() {
  return (
    <div>
      <HeroSection />
      <ProjectsSection />
      <AboutSection />
      <ContactBanner />
    </div>
  );
}
