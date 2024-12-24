import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";

const Location = () => {
  return (
    <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl sm:text-3xl font-bold mb-4">Location</h2>
      <p className="text-gray-600 mb-6 text-sm sm:text-base">Strategically located for your convenience</p>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        {/* Map View Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Map View</h3>
          <div className="relative">
            <iframe
              title="Location Map"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3768.613761269356!2d72.96990581421945!3d19.209796052515846!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7b7a97dbeb019%3A0x730cce5d1b8d445d!2sNarang%20Privado!5e0!3m2!1sen!2sin!4v1689952768297!5m2!1sen!2sin"
              width="100%"
              height="250"
              allowFullScreen=""
              loading="lazy"
              className="rounded-lg border"
            ></iframe>
            <button className="absolute bottom-4 right-4 bg-white px-3 py-2 text-xs sm:text-sm font-medium rounded-md shadow-md text-gray-700">
              Get Directions
            </button>
          </div>
        </div>

        {/* Location Details Section */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Location Details</h3>
          <div className="h-40 sm:h-60 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-sm sm:text-base">Placeholder for blurred map</span>
          </div>
        </div>
      </div>

      {/* Nearby Landmarks Section */}
      <div className="mt-6 md:mt-8 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Nearby Landmarks</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">D Mart is located within 5 mins reach.</p>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">The Chedi Fine dining just 10 minutes off.</p>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">Podar International School is just 15 minutes away.</p>
            </li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg sm:text-xl font-semibold mb-4">Other Key Locations</h3>
          <ul className="space-y-2">
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">Bhandup and Kanjurmarg Railway Station within 7 mins.</p>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">IIT Bombay is at a distance of 10 minutes.</p>
            </li>
            <li className="flex items-center">
              <span className="material-icons text-green-500 mr-2"><FaMapMarkerAlt /></span>
              <p className="text-sm sm:text-base">LH Hiranandani Hospital merely 15 minutes away.</p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Location;
