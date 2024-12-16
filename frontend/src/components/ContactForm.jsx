// src/components/ContactForm/ContactForm.js
import React, { useState } from 'react';

const ContactForm = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch('https://api.example.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      if (!response.ok) throw new Error('Failed to submit form');
      alert('Form submitted successfully!');
    } catch (error) {
      console.error(error);
      alert('Failed to submit form');
    }
  };

  return (
    <aside className="w-1/4 fixed top-0 right-0 h-screen bg-gray-100 shadow-lg z-50 flex flex-col">
      <h2 className="text-3xl font-bold p-4 text-center bg-yellow-500 text-white">Contact Us</h2>
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
        <button type="submit" className="w-full py-2 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600">Submit</button>
      </form>
    </aside>
  );
};

export default ContactForm;
