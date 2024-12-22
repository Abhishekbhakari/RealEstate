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
      <h2 className="text-3xl font-bold mb-4 text-center">Floor Plans</h2>

      {/* Buttons to filter plans */}
      <div className="flex justify-center gap-4 mb-6">
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setFilter('2BHK')}
        >
          2BHK
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setFilter('3BHK')}
        >
          3BHK
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setFilter('4BHK')}
        >
          4BHK
        </button>
        <button
          className="bg-green-700 text-white px-4 py-2 rounded"
          onClick={() => setFilter('ALL')}
        >
          ALL
        </button>
      </div>

      {/* Container for the cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {filteredPlans.map((plan) => (
          <div key={plan.id} className="card-container rounded shadow cursor-pointer hover:scale-105 transform transition-transform">
            <img
              src={plan.image}
              alt={`Floor Plan ${plan.id}`}
              className="w-full h-auto rounded"
              onClick={() => setSelectedPlan(plan.image)}
            />
            <p className="text-center mt-2 font-bold">{plan.type}</p>
          </div>
        ))}
      </div>

      {/* Modal to display selected floor plan */}
      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[1000]">
          <div className="bg-white p-6 rounded shadow-lg relative w-1/2">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-4 py-2"
            >
              Close
            </button>
            <img src={selectedPlan} alt="Selected Floor Plan" className="w-full rounded" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;
