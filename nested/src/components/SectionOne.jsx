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
    <div className="flex justify-center items-center pt-20 bg-gray-100">
    <div className="max-w-7xl w-full px-6">
      {/* Outer Container */}
      <div className="flex justify-between items-start flex-wrap">
        {/* Left Side: Headline and Paragraph */}
        <div className="max-w-lg mb-7">
        <p
    
            className="text-blue-600 text-lg font-medium hover:underline"
          >Resolution</p>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
          A Vision for 2025: Refresh for <i>New Pahang.</i>
          </h1>
          <p className="mt-4 text-gray-600 text-lg leading-relaxed">
            Enra Niaga adopts sustainable farming techniques, blending
            innovation and precision to transform the palm oil industry. From
            plantation management to eco-friendly harvesting, we aim to
            ensure quality production while protecting the environment and
            empowering local communities.
          </p>
        </div>

        {/* Right Side: Link */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-blue-600 text-lg font-medium hover:underline"
          >
            Explore our roadmap →
          </a>
        </div>
      </div>
    </div>
  </div>
);
};

export default EnraNiagaLayout;
