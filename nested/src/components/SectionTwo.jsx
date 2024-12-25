import React from 'react';

const SectionTwo = () => {
  return (
    <div className="h-screen bg-gray-100 flex items-center justify-center">
      <div className="flex flex-col md:flex-row items-center md:space-x-8">
        <img 
          src="https://via.placeholder.com/400" 
          alt="Placeholder"
          className="w-full md:w-1/2 rounded-lg shadow-lg animate-slide-in-left"
        />
        <div className="mt-6 md:mt-0">
          <h3 className="text-3xl mb-2 text-gray-800">Rooted in Sustainability, Growing for Generations</h3>
          <p className="text-gray-600">
          With decades of expertise in sustainable palm oil production, our estate stands at the forefront of the agricultural sector, blending tradition with modern techniques. We are committed to delivering top-tier, fresh palm oil while safeguarding the environment. We prioritize transparency, efficiency, and collaboration to ensure that our operations are as ethical as they are profitable. Our estate is built on trust, quality, and environmental stewardship.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
