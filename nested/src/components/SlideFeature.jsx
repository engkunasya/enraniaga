import React, { useState } from 'react';

const SlideFeature = () => {
  // Define slides data
  const slides = [
    {
      id: 1,
      title: 'Establishment',
      content: 'As a registered entity (RA0099403-X) Enra Niaga integrates cutting-edge innovation and precision to promote health-focused organic farming alongside large-scale palm oil production. From ethical plantation management to premium cattle breeding, we are dedicated to delivering high-grade edible productions while preserving Pahang’s natural ecosystem and uplifting Orang Asli and local communities.',
    },
    {
      id: 2,
      title: 'Farm Engineering & Growth',
      content: 'Driving innovation in energy production while ensuring safety and efficiency.',
    },
    {
      id: 3,
      title: 'Integrated Farming Systems (IFS / R&D)',
      content: 'Creating clean and renewable energy systems to power a sustainable future.',
    },
    {
      id: 4,
      title: 'Nature & Community Support',
      content: 'Driving innovation in energy production while ensuring safety and efficiency.',
    },
  ];

  // State to track the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to change slide
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="flex justify-center items-center pt-20 bg-gray-50">
    <div className="max-w-7xl w-full px-12">
      {/* Outer Container */}
      <div className="flex justify-between items-start min-w-[788px] overflow-hidden">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={`py-2 font-semibold text-2xl max-w-40 text-left ${
              activeSlide === index
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            } slb:flex-shrink-0`} // Prevent shrinking at the "slb" breakpoint
            style={{
              whiteSpace: 'normal', // Allow text to wrap
              wordBreak: 'break-word', // Break long words
            }}
          >
            {slide.title}
          </button>
        ))}
      </div>
      <div className="mb-8 p-4 bg-gray-100 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-2">{slides[activeSlide].title}</h2>
        <p className="text-gray-700">{slides[activeSlide].content}</p>
      </div>
    </div>
  </div>
  

  
  );
};

export default SlideFeature;
