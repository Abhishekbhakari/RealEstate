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
    setPopupOpen(true); // Open the popup immediately when the button is clicked
  };

  const handleClosePopup = () => {
    setPopupOpen(false);
    setSelectedType(null);
  };

  return (
    <section className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold mb-4 text-center">Prices</h2>
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
                  className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
                >
                  View Breakdown
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {popupOpen && (
        <PopupForm isOpen={popupOpen} onClose={handleClosePopup} type={selectedType} />
      )}
    </section>
  );
};

export default PriceSection;
