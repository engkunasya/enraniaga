import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';

import Footer from './components/Footer';
import EnraNiagaLayout from './components/SectionOne';
import SlideFeature from './components/SlideFeature';


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar/>
      
      
      <HeroSection />
     <EnraNiagaLayout/>
     <SlideFeature/>
      <SectionTwo />
      
   
      <Footer />
    </div>
  );
}

export default App
