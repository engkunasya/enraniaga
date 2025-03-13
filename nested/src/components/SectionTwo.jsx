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
          <b>Pahang</b>, the green heritage protected by the <b>Federal Constitution of Malaysia</b>, is home to this thriving 50-hectare estate. Blessed with rich natural rivers and fertile land, it has flourished since 1999, nestled in the countryside of formerly British treasure town of Sungai Lembing. Committed to sustainable palm oil and beef production, we blend responsible farming practices with modern techniques to ensure high-quality edible exports while protecting the environment for generations.


          </p>
          <p className="text-lg text-gray-600 leading-relaxed mt-4">
          <i>We are guided by the strategic collaboration across local, federal and private ventures, focusing on protecting the right way, for today and tomorrow.</i>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;

