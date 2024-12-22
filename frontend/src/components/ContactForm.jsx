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
      const response = await fetch("https://api.example.com/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error("Failed to submit form");
      alert("Form submitted successfully!");
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
    <aside className="hidden lg:block w-1/4 fixed top-0 right-0 h-screen bg-gray-100 shadow-lg z-[900] flex flex-col">
      <h2 className="text-3xl font-bold p-4 text-center bg-green-700 text-white">Contact Us</h2>
      <form onSubmit={handleSubmit} className="flex-grow bg-white p-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} className="w-full p-2 border rounded" required />
        </div>
        <div className="mb-4">
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea id="message" name="message" rows="4" value={formData.message} onChange={handleChange} className="w-full p-2 border rounded" required></textarea>
        </div>
        <button type="submit" className="w-full py-2 bg-green-700 text-white font-bold rounded hover:bg-green-800">Submit</button>
      </form>
      <div>
        <img src="https://cdni.iconscout.com/illustration/premium/thumb/couple-visiting-construction-site-for-checking-work-progress-illustration-download-in-svg-png-gif-file-formats--crane-lifting-family-plot-area-real-estate-pack-buildings-illustrations-1757215.png" className="w-1/2 mx-auto" />
        <button 
        className="w-full py-2 bg-green-700 text-white font-bold rounded hover:bg-green-800"
        onClick={() => handleViewBreakdown("free site visit")}
        >Book a free site visit</button>
      </div>
      {/* Popup Form */}
      {popupOpen && (
        <PopupForm isOpen={popupOpen} onClose={handleClosePopup} type={selectedType} />
      )}
    </aside>
  );
};

export default ContactForm;