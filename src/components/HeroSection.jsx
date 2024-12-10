import React from 'react';

const HeroSection = () => {
  return (
    <div className="h-screen bg-gray-900 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 animate-fade-in">
          Welcome to My Website
        </h1>
        <p className="text-lg md:text-2xl animate-slide-up">
          Bringing ideas to life with smooth animations.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
