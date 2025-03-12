import React from 'react';
import logo1 from '../assets/mpob.jpg';
import logo2 from '../assets/agrobank.png';
import logo3 from '../assets/perkeso.png';
import logo4 from '../assets/FGV.png';
import logo5 from '../assets/pahang.png';
import logo6 from '../assets/jpj.png';
import logo7 from '../assets/BAT.jpg';


import './Partnership.css';

const Partnership = () => {
  return (
    <>
      <div className="overflow-hidden">
        <h2 className="text-center text-2xl font-bold mb-4 text-green-800">Partners:</h2>
        {/* Logos moving from right to left */}
        <div className="flex animate-marquee-left whitespace-nowrap justify-around">
          <img src={logo4} alt="Partner 3" className="h-16 mx-4" />
          <img src={logo5} alt="Partner 3" className="h-16 mx-4" />
          <img src={logo6} alt="Partner 3" className="h-16 mx-4" />
          <img src={logo7} alt="Partner 3" className="h-16 mx-4" />
        </div>
      </div>

      <div className="overflow-hidden mt-4">
        {/* Logos moving from left to right */}
        <div className="flex  whitespace-nowrap justify-around">
          <img src={logo1} alt="Partner 4" className="h-16 mx-4" />
          <img src={logo2} alt="Partner 5" className="h-16 mx-4 rounded-lg" />
          <img src={logo3} alt="Partner 6" className="h-16 mx-4" />
        </div>
      </div>
    </>
  );
};

export default Partnership;
