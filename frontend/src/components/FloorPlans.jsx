import React, { useState } from 'react';

const FloorPlans = ({ plans = ["https://upload.wikimedia.org/wikipedia/commons/thumb/9/9a/Sample_Floorplan.jpg/640px-Sample_Floorplan.jpg","https://c8.alamy.com/comp/2DT1GDM/house-floor-plan-with-furniturearchitectural-design-of-the-apartmentvector-illustration-2DT1GDM.jpg","https://housedesigner.com/wp-content/uploads/2023/11/2-5-min-1024x919-optimized.png"] }) => {
  const [selectedPlan, setSelectedPlan] = useState(null);

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Floor Plans</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {plans.map((plan, index) => (
          <img
            key={index}
            src={plan}
            alt={`Floor Plan ${index + 1}`}
            className="rounded shadow cursor-pointer hover:scale-105 transform transition-transform"
            onClick={() => setSelectedPlan(plan)}
          />
        ))}
      </div>

      {selectedPlan && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
          <div className="bg-white p-6 rounded shadow-lg relative">
            <button
              onClick={() => setSelectedPlan(null)}
              className="absolute top-2 right-2 bg-red-500 text-white rounded-full px-4 py-2"
            >
              Close
            </button>
            <img src={selectedPlan} alt="Selected Floor Plan" className="max-w-full rounded" />
          </div>
        </div>
      )}
    </section>
  );
};

export default FloorPlans;
