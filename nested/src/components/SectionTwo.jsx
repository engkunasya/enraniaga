import React from 'react';
import enraIV from '../assets/enra-iv.jpg'; // Adjust the path as necessary

const SectionTwo = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center py-16 px-6">
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
          <p className="text-lg text-gray-600 leading-relaxed">
          Since 1999, our Pahang estate has grown in the countryside of Kuantan, near historic town of Sungai Lembing. With decades in sustainable palm oil production, we balance tradition and modern practices to produce fresh, high-quality yields while respecting nature.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
          Guided by collaboration across local, state, federal and private enterprises, we focus on growing the right way—for today and the future.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

