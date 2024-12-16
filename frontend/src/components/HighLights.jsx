import React from 'react';

const Highlights = () => (
  <section className="p-6 bg-gray-100">
    <h2 className="text-3xl font-bold mb-4 text-center">Project Highlights</h2>
    <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <li className="p-4 bg-white shadow rounded">Spacious Apartments</li>
      <li className="p-4 bg-white shadow rounded">Modern Amenities</li>
      <li className="p-4 bg-white shadow rounded">Prime Location</li>
    </ul>
  </section>
);

export default Highlights;