import React, { useState } from 'react'; 
import { useNavigate } from 'react-router-dom';
import PopupForm from './PopupForm';

const PriceSection = ({ prices = [
  { type: "1 BHK", carpetArea: "737 Sq.ft.", price: "₹50 Lakh" },
  { type: "2 BHK Luxury", carpetArea: "800 Sq.ft.", price: "₹1.77 Cr" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.", price: "₹50 Lakh" },
  { type: "1 BHK", carpetArea: "737 Sq.ft.", price: "₹50 Lakh" },
] }) => {
  const [popupOpen, setPopupOpen] = useState(false);
  const [selectedType, setSelectedType] = useState(null);

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
      
      {/* For desktop/tablet, show table layout */}
      <div className="hidden lg:block">
        <table className="table-auto w-full bg-white shadow rounded">
          <thead>
            <tr>
              <th className="p-4 text-left">Type</th>
              <th className="p-4 text-left">Carpet Area</th>
              <th className="p-4 text-left">Price</th>
              <th className="p-4 text-center">Action</th>
            </tr>
          </thead>
          <tbody>
            {prices.map((price, index) => (
              <tr key={index} className="border-t">
                <td className="p-4">{price.type}</td>
                <td className="p-4">{price.carpetArea}</td>
                <td className="p-4">{price.price}</td>
                <td className="p-4 text-center">
                  <button
                    onClick={() => handleViewBreakdown(price.type)}
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

      {/* For mobile/tablet (smaller screens), display cards */}
      <div className="lg:hidden grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {prices.map((price, index) => (
          <div key={index} className="bg-white shadow rounded p-4">
            <h3 className="text-xl font-bold mb-2">{price.type}</h3>
            <p className="text-gray-600 mb-2">Carpet Area: {price.carpetArea}</p>
            <p className="text-gray-600 mb-4">Price: {price.price}</p>
            <button
              onClick={() => handleViewBreakdown(price.type)}
              className="w-full px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
            >
              View Breakdown
            </button>
          </div>
        ))}
      </div>

      {/* Popup Form */}
      {popupOpen && (
        <PopupForm isOpen={popupOpen} onClose={handleClosePopup} type={selectedType} />
      )}
    </section>
  );
};

export default PriceSection;
