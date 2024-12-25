import React, { useState } from 'react';

const SlideFeature = () => {
  // Define slides data
  const slides = [
    {
      id: 1,
      title: 'Our Story',
      content: 'As a registered entity (RA0099403-X) Enra Niaga integrates cutting-edge innovation and precision to promote health-focused organic farming alongside large-scale palm oil production. From ethical plantation management to premium cattle breeding, we are dedicated to delivering high-grade edible productions while preserving Pahang’s natural ecosystem and uplifting Orang Asli and local communities.',
    },
    {
      id: 2,
      title: 'Green Policy',
      content: 'Driving innovation in energy production while ensuring safety and efficiency.',
    },
    {
      id: 3,
      title: 'Sustainable Energy Systems',
      content: 'Creating clean and renewable energy systems to power a sustainable future.',
    },
  ];

  // State to track the active slide
  const [activeSlide, setActiveSlide] = useState(0);

  // Function to change slide
  const handleSlideChange = (index) => {
    setActiveSlide(index);
  };

  return (
    <div className="w-full max-w-screen-lg mx-auto p-4 px-20">
      {/* Slide Content */}
      

      {/* Buttons */}
      <div className="flex justify-between border-b-2 border-gray-300">
        {slides.map((slide, index) => (
          <button
            key={slide.id}
            onClick={() => handleSlideChange(index)}
            className={`py-2 px-4 font-semibold ${
              activeSlide === index
                ? 'text-blue-600 border-t-2 border-blue-600'
                : 'text-gray-500 hover:text-gray-700'
            }`}
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
  );
};

export default SlideFeature;
