import React from "react";
import { useForm } from "react-hook-form";

const PopupForm = ({ isOpen, onClose, type }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log("Form Data:", data);
    reset();
    onClose(); // Close the popup after submitting the form
  };

  if (!isOpen) return null; // Don't render the popup if it's not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50">
      <div className="bg-white rounded-lg p-6 w-full max-w-6xl shadow-lg relative flex flex-col lg:flex-row z-60">
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-800 z-70"
        >
          &times;
        </button>

        {/* Form Section */}
        <div className="flex-1 p-4">
          <h2 className="text-xl font-bold mb-4 text-center">Get The Best Quote for {type}</h2>

          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Name</label>
              <input
                type="text"
                {...register('name', { required: 'Name is required' })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
              <input
                type="tel"
                {...register('phone', {
                  required: 'Phone number is required',
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: 'Enter a valid 10-digit phone number',
                  },
                })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.phone && <p className="text-red-500 text-sm mt-1">{errors.phone.message}</p>}
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
              <input
                type="email"
                {...register('email', {
                  required: 'Email is required',
                  pattern: {
                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                    message: 'Enter a valid email address',
                  },
                })}
                className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
              />
              {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email.message}</p>}
            </div>

            <button
              type="submit"
              className="w-full bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600"
            >
              Submit
            </button>
          </form>
        </div>

        {/* Content Section (for large screens) */}
        <div className="flex-1 hidden lg:block bg-cover bg-center rounded-lg p-6" style={{ backgroundImage: `url('https://www.example.com/background.jpg')` }}>
          <div className="text-white space-y-6">
            <h3 className="text-2xl font-bold">We Promise</h3>
            <ul className="space-y-2">
              <li>Instant Call Back - Get a call from our experts</li>
              <li>Free Site Visit - Schedule at your convenience</li>
              <li>Unmatched Price - Best offers guaranteed</li>
              <li>Call Us - +91 98765 43210</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopupForm;
