import React, { useState } from 'react';

const Amenities = () => {
  const amenities = ["Swimming Pool", "Gymnasium", "Children's Play Area", "Clubhouse", "24x7 Security"];
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextAmenity = () => setCurrentIndex((currentIndex + 1) % amenities.length);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Amenities</h2>
      <div className="relative">
        <div className="overflow-hidden">
          <div className="w-full p-4 bg-white shadow rounded text-center transition-transform" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {amenities[currentIndex]}
          </div>
        </div>
        <button onClick={nextAmenity} className="mt-4 px-4 py-2 bg-yellow-500 text-white rounded hover:bg-yellow-600">Next</button>
      </div>
    </section>
  );
};

export default Amenities;