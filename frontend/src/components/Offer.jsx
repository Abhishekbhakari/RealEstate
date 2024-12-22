import React from "react";

const Offers = () => {
  const offers = [
    {
      icon: "🏡",
      title: "Wide Range of Properties",
      description: "Find properties that match your preferences."
    },
    {
      icon: "💰",
      title: "Affordable Pricing",
      description: "Competitive pricing to suit all budgets."
    },
    {
      icon: "⭐",
      title: "Top-Rated Listings",
      description: "Browse only verified and highly-rated properties."
    }
  ];

  return (
    <section className="bg-gray-100 py-12">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">What We Offer</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {offers.map((offer, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded shadow-md text-center hover:shadow-lg transition"
            >
              <div className="text-4xl mb-4">{offer.icon}</div>
              <h3 className="text-xl font-semibold mb-2">{offer.title}</h3>
              <p className="text-gray-600">{offer.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Offers;