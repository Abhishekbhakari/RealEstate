import React, { useState } from "react";
import PopupForm from "./PopupForm";

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch("http://localhost:5000/api/contacts", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      alert("Form submitted successfully!");
      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);
      alert("Failed to submit form");
    }
  };

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
    <aside className="hidden lg:block w-1/4 fixed top-0 right-0 h-screen bg-gray-100 shadow-lg z-[1000] flex flex-col">
      <h2 className="text-lg font-bold p-4 text-center bg-white text-black">Get The Best Quote</h2>

      <div className="p-4 text-center">
        <div className="flex items-center justify-center bg-green-600 text-white rounded-lg py-2 px-4 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6 mr-2"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3 10l1.47 4.41c.2.6.76 1.05 1.41 1.05H15c.66 0 1.21-.45 1.41-1.05L18 10M9 21h6"
            />
          </svg>
          <span className="font-medium">Call Us</span>
          <span className="ml-2">+91 98765 43210</span>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="flex-grow bg-white px-6 space-y-4">
        <div>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            value={formData.name}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div className="flex items-center">
          <div className="flex items-center justify-center bg-gray-200 px-3 rounded-l-lg">
            <img
              src="https://cdn-icons-png.flaticon.com/512/197/197452.png"
              alt="India flag"
              className="w-6 h-4"
            />
          </div>
          <input
            type="tel"
            name="phone"
            placeholder="Enter phone number"
            value={formData.phone}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-r-lg focus:outline-none focus:ring-2 focus:ring-green-500"
            required
          />
        </div>
        <div>
          <input
            type="email"
            name="email"
            placeholder="Enter your email (optional)"
            value={formData.email}
            onChange={handleChange}
            className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>
        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded-lg hover:bg-green-700"
        >
          Submit
        </button>
      </form>

      <div className="p-6">
        <img
          src="https://cdni.iconscout.com/illustration/premium/thumb/couple-visiting-construction-site-for-checking-work-progress-illustration-download-in-svg-png-gif-file-formats--crane-lifting-family-plot-area-real-estate-pack-buildings-illustrations-1757215.png"
          alt="Free Pickup"
          className="w-3/4 mx-auto mb-4"
        />
        <button
          className="w-full bg-green-700 text-white font-bold py-2 rounded-lg hover:bg-green-800"
          onClick={() => handleViewBreakdown("free site visit")}
        >
          Book A Free Site Visit
        </button>
      </div>

      {popupOpen && (
        <PopupForm isOpen={popupOpen} onClose={handleClosePopup} type={selectedType} />
      )}
    </aside>
  );
};

export default ContactForm;