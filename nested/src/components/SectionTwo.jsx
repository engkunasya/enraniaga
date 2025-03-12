import React from 'react';
import enraIV from '../assets/enra-iv.jpg'; // Adjust the path as necessary

const SectionTwo = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-16 px-6 mt-10">
      <div className="max-w-6xl w-full flex flex-col md:flex-row items-center md:items-start gap-12">
        {/* Image Section */}
        <img 
          src={enraIV}
          alt="Palm Oil Estate"
          className="w-full md:w-1/2 rounded-lg shadow-lg animate-slide-in-left"
        />

        {/* Text Section */}
        <div className="text-center md:text-left lg:max-w-lg">
          <h3 className="text-3xl font-semibold text-gray-800 mb-4">
            Growing for Generations, and Regrowth.
          </h3>
          <p className="text-lg text-gray-600 leading-relaxed text-justify">
          Since 1999, our 50-hectare estate in Pahang has flourished in the countryside of Kuantan, near the historic town of Sungai Lembing. Committed to sustainable palm oil and beef productions, we integrate responsible farming practices with modern techniques to ensure high-quality yields of edible supply while preserving the environment for future generations.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Guided by collaboration across local, state, federal and private enterprises, we focus on growing the right way, today and tomorrow.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

