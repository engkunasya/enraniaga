// import React from 'react';

// const SectionOne = () => {
//   return (
//     <div className="h-screen flex items-center justify-center bg-white">
//       <div className="max-w-4xl p-6 text-center animate-fade-in">
//         <h2 className="text-4xl font-bold mb-4 text-gray-800">Our Vision</h2>
//         <p className="text-gray-600 leading-relaxed">
//         Our estate leads the way in producing high-quality, sustainably farmed palm oil, focusing on responsible practices and fresh, premium produce. Join us on our journey towards a greener future while offering our customers the best in agricultural innovation.
// <br/>


//         </p>
        
//       </div>
//     </div>
//   );
// };

// export default SectionOne;


// PART TWO ALTERNATIVE
import React from "react";

const EnraNiagaLayout = () => {
  return (
    <div className="w-full flex justify-center items-center px-6 py-16 bg-white">
      <div className="max-w-4xl w-full text-left md:text-center justify-between">
        <div>
        {/* Focus Section */}
        <h4 className="text-blue-600 text-lg font-semibold mb-4">Focus</h4>

        {/* Main Heading */}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 leading-snug">
          Driving sustainability and innovation across palm oil agriculture with
          advanced practices and eco-conscious solutions.
        </h1>

        {/* Supporting Paragraph */}
        <p className="text-gray-600 text-lg leading-relaxed mb-8">
          Enra Niaga adopts sustainable farming techniques, blending innovation
          and precision to transform the palm oil industry. From plantation
          management to eco-friendly harvesting, we aim to ensure quality
          production while protecting the environment and empowering local
          communities.
        </p></div>

        {/* Call to Action */}
        <a
          href="#"
          className="text-blue-600 text-lg font-medium flex items-center justify-center hover:underline"
        >
          Explore our approach
          <span className="ml-2">→</span>
        </a>
      </div>
    </div>
  );
};

export default EnraNiagaLayout;
