import React from 'react';

const SectionThree = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto flex flex-col md:flex-row items-start p-8 bg-white">
      {/* Left Section - Logo and Story */}
      <div className="md:w-1/3 flex items-start mb-6 md:mb-0">
        <div>
          <h1 className="text-4xl font-bold text-blue-800 mb-2">AgriGrowth</h1>
          <div className="rounded-full bg-gray-300 w-16 h-16 flex items-center justify-center">
            {/* Logo Placeholder */}
            <span className="text-blue-600 text-2xl font-bold">AG</span>
          </div>
        </div>
      </div>

      {/* Right Section - Content */}
      <div className="md:w-2/3 text-gray-700">
        <p className="mb-4">
          Our journey began in <span className="font-bold">2005</span>—from a small family-owned farm, 
          we have grown into one of the nation’s trusted leaders in sustainable agriculture and food production.
        </p>

        <p className="mb-4">
          With a mission to promote <span className="font-bold">eco-friendly farming</span>, 
          we have expanded our operations to focus on key sectors: Crop Production, Precision Agriculture, 
          Organic Farming, and Sustainable Agri-Tech Innovations.
        </p>

        <p className="mb-4">
          Our team’s dedication, expertise, and the latest technologies allow us to deliver consistent, 
          high-quality produce while ensuring <span className="font-bold">zero waste</span> 
          and environmental preservation for future generations.
        </p>

        <p className="mb-4">
          As part of our responsibility, we collaborate with local communities and stakeholders, 
          providing employment, training, and resources to uplift rural economies. 
          Together, we are shaping the future of agriculture with integrity, innovation, and care.
        </p>

        <h2 className="text-xl font-bold text-gray-900 mt-6">We are AgriGrowth</h2>

        {/* Button */}
        <button className="mt-4 bg-blue-700 hover:bg-blue-800 text-white font-semibold py-2 px-6 rounded-full shadow-md">
          Our Story
        </button>
      </div>
    </div>
  );
};

export default SectionThree;
