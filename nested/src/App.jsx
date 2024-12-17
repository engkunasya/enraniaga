import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import SectionOne from './components/SectionOne';
import SectionTwo from './components/SectionTwo';
import Footer from './components/Footer';


function App() {
  return (
    <div className="font-sans text-gray-800">
      <Navbar/>
      
      
      <HeroSection />
      <SectionOne />
      <SectionTwo />
      <Footer />
    </div>
  );
}

export default App
