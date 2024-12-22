import React, { useState } from 'react';

const FloorPlans = ({ plans = [
  { id: 1, type: '2BHK', image: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/640px-Sample_Floorplan.jpg" },
  { id: 2, type: '3BHK', image: "https://c8.alamy.com/comp/2DT1GDM/house-floor-plan-with-furniturearchitectural-design-of-the-apartmentvector-illustration-2DT1GDM.jpg" },
  { id: 3, type: '4BHK', image: "https://housedesigner.com/wp-content/uploads/2023/11/2-5-min-1024x919-optimized.png" }
] }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);
  const [filter, setFilter] = useState('ALL');

  const filteredPlans = filter === 'ALL' ? plans : plans.filter(plan => plan.type === filter);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-center">Floor Plans</h2>

      {/* Buttons to filter plans */}
      <div className="flex flex-wrap justify-center gap-3 mb-8">
        {['2BHK', '3BHK', '4BHK', 'ALL'].map((type) => (
          <button
            key={type}
            className="bg-green-600 text-white px-4 py-2 rounded-md shadow hover:bg-green-700 transition-all"
            onClick={() => setFilter(type)}
          >
            {type}
          </button>
        ))}
      </div>

      {/* Container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div
            key={plan.id}
            className="card-container rounded overflow-hidden shadow-lg cursor-pointer transform hover:scale-105 transition-transform"
            onClick={() => setSelectedPlan(plan.image)}
          >
            <img
              src={plan.image}
              alt={`Floor Plan ${plan.id}`}
              className="w-full h-56 object-cover"
            />
            <p className="text-center mt-3 text-lg font-semibold">{plan.type}</p>
          </div>
        ))}
      </div>

      {/* Modal to display selected floor plan */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg relative w-11/12 sm:w-3/4 md:w-1/2">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-3 py-1 text-sm hover:bg-red-600 transition-all"
            >
              Close
            </button>
            <img
              src={selectedPlan}
              alt="Selected Floor Plan"
              className="w-full h-[400px] object-contain rounded mx-auto"
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;
