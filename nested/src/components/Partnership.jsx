import React from 'react';
import logo1 from '../assets/mpob.jpg';
import logo2 from '../assets/agrobank.png';
import logo3 from '../assets/perkeso.png';
import logo4 from '../assets/gov.svg';
import logo5 from '../assets/FGV.png';
import logo6 from '../assets/jpj2.png';
import logo7 from '../assets/BAT.jpg';
import logo8 from '../assets/ramly.jpg';


import './Partnership.css';

const Partnership = () => {
  const logos = [logo4, logo5, logo6, logo7, logo8]; // Original logos
  return (
    <div className="flex justify-center w-full">
       <div className="flex flex-col items-center justify-center py-16 mt-10 max-w-7xl">
      <h2 className="text-center text-2xl font-bold mt-10 text-gray-800 mb-5">Our Partners</h2>

      {/* Logos moving continuously */}
     {/* Moving Logos */}
      <div className="logos__marquee">
        <div className="marquee__logos">
          {/* Dynamically duplicate the logos instead of manually repeating */}
          {[...logos, ...logos].map((logo, index) => (
            <img key={index} src={logo} alt={`Partner ${index + 1}`} className="h-10 mx-4" />
          ))}
        </div>
      </div>
    

        {/* Logos static */}
        <div className="overflow-hidden mt-6 px-12 w-full flex justify-center">
          <div className="flex whitespace-nowrap justify-around w-full max-w-3xl">
            <img src={logo1} alt="Partner 4" className="h-16 mx-4" />
            <img src={logo2} alt="Partner 5" className="h-16 mx-4 rounded-lg" />
            <img src={logo3} alt="Partner 6" className="h-16 mx-4" />
          </div>
        </div>
      </div>
    </div>
  );
};


export default Partnership;
