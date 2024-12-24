import React, { useState, useEffect } from 'react';
import axios from 'axios';
import PopupForm from './PopupForm';

const PriceSection =  ({ prices = [
  { type: "1 BHK", carpetArea: "737 Sq.ft.",location:"Pune", price: "₹50 Lakh" },
  { type: "2 BHK Luxury", carpetArea: "800 Sq.ft.",location:"Pune", price: "₹1.77 Cr" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.",location:"Pune", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.",location:"Pune", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.",location:"Pune", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.",location:"Pune", price: "₹50 Lakh" },
] }) => {
  // const [prices, setPrices] = useState([]);
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

  // useEffect(() => {
  //   const fetchPrices = async () => {
  //     try {
  //       const response = await axios.get('http://localhost:5000/api/properties');
  //       setPrices(response.data);
  //     } catch (error) {
  //       console.error('Error fetching property data:', error);
  //     }
  //   };

  //   fetchPrices();
  // }, []);

  const handleViewBreakdown = (type) => {
    setSelectedType(type);
    setPopupOpen(true);
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedType(null);
  };

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Prices</h2>
      <div className="hidden lg:block">
        <table className="table-auto w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="p-4 text-left">Title</th>
              <th className="p-4 text-left">carpetArea</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-left">Location</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{price.type}</td>
                <td className="p-4">{price.carpetArea}</td>
                <td className="p-4">{price.price}</td>
                <td className="p-4">{price.location}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleViewBreakdown(price.title)}
                    className="px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
                  >
                    View Breakdown
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {prices.map((price, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold mb-2">{price.title}</h3>
            <p className="text-gray-600 mb-2">Description: {price.description}</p>
            <p className="text-gray-600 mb-2">Price: {price.price}</p>
            <p className="text-gray-600 mb-4">Location: {price.location}</p>
            <button
              onClick={() => handleViewBreakdown(price.title)}
              className="w-full px-4 py-2 bg-green-700 text-white rounded hover:bg-green-800"
            >
              View Breakdown
            </button>
          </div>
        ))}
      </div>
      {popupOpen && (
        <PopupForm isOpen={popupOpen} onClose={handleClosePopup} type={selectedType} />
      )}
    </section>
  );
};

export default PriceSection;
