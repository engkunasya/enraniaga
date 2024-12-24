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
    <div className="flex justify-center items-center pt-20 bg-grey-50">
    <div className="max-w-7xl w-full px-6">
      {/* Outer Container */}
      <div className="flex justify-between items-start flex-wrap">
        {/* Left Side: Headline and Paragraph */}
        <div className="max-w-lg mb-7">
        <p
    
            className="text-blue-700 text-lg font-medium hover:underline"
          >Resolution</p>
          <h1 className="text-3xl md:text-4xl 2xl:text-5xl text-gray-900 leading-snug md:max-w-64 lg:max-w-96">
          A Vision for <br/>2025: Redefine Pahang as the Greenest, Cleanest Food Powerhouse.
          </h1>
          <p className="mt-4 text-gray-900 text-lg leading-relaxed text-justify">
          Enra Niaga (RA0099403-X) champions sustainable farming through partnerships with biologists from Australia and New Zealand. By integrating innovation and precision, we promote a health-focused approach to large-scale palm oil production. From ethical plantation estate management to premium cattle breeding, we are committed to delivering high-quality food chain outputs while preserving Pahang's natural ecosystem and uplifting local communities
          </p>
        </div>

        {/* Right Side: Link */}
        <div className="flex-shrink-0">
          <a
            href="#"
            className="text-blue-700 text-lg font-medium hover:underline"
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
