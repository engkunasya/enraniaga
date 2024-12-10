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
          <h3 className="text-3xl font-bold mb-2 text-gray-800">Beautiful Designs</h3>
          <p className="text-gray-600">
            Leveraging Tailwind CSS for rapid styling and React for dynamic component-based 
            architecture.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SectionTwo;
