import React from 'react';
import backgroundImage from '../assets/nazar.jpg'; // Adjust the path as necessary

const HeroSection = () => {
  return (
    <div
      className="h-screen bg-cover bg-center text-white flex items-center justify-center"
      style={{ backgroundImage: `url(${backgroundImage})` }} // Apply the background image
    >
      <div className="text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in">
        Redefining Sustainability in Palm Oil Plantation
        </h1>
        <p className="text-lg md:text-2xl animate-slide-up">
          Harvesting National Commodity, Ensuring Future Sustainability
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
