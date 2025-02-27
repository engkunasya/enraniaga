import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-green-200 py-8">
      <div className="max-w-6xl mx-auto px-6">
        {/* Footer Content */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left border-b border-gray-700 pb-4">
          {/* Company Info */}
          <p className="text-sm md:text-base">
            &copy; 2025 Enra Niaga | All Rights Reserved
          </p><br/>

          {/* Contact Section */}
          <p className="text-sm md:text-base mt-2 md:mt-0">
            General Enquiry:<br/>{" "}
            <a href="mailto:admin@enraniaga.com" className="text-green-200 hover:text-blue-300">
              admin@enraniaga.com
            </a>
          </p><br/>
           {/* Mobile Info */}
           <p className="text-sm md:text-base">
            Map:<br/>  <a href="https://maps.app.goo.gl/YjnXokngi5t8Zdf17" className="text-green-200 hover:text-blue-300">
              Google Maps
            </a>
          </p>
        </div>

        {/* Corporate Message */}
        <div className="flex flex-col md:flex-row justify-between items-center text-gray-400 text-sm pt-4">
          <p>Committed to Sustainability & Ethical Business Practices</p>
          <p className="mt-2 md:mt-0">Building a Greener Future, One Step at a Time</p>
          <p className="mt-2 md:mt-0">&copy; 2025</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
