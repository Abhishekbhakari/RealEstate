import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import { Pagination, Autoplay } from "swiper/modules";
import PopupForm from "./PopupForm";

const HeroSection = ({ offerData }) => {
  const slides = [
    {
      image:
        "https://www.jll.co.in/images/global/jll-future-vision-real-estate-social-1200x628.jpg",
      title: "Find Your Dream Home",
    },
    {
      image:
        "https://www.bankrate.com/2023/03/09124248/how-to-invest-in-real-estate-in-2024.jpeg",
      title: "Luxury Living Spaces",
    },
    {
      image:
        "https://images.unsplash.com/photo-1605146769289-440113cc3d00?fm=jpg&q=60&w=3000&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8cmVhbCUyMGVzdGF0ZXxlbnwwfHwwfHx8MA%3D%3D",
      title: "Affordable Homes",
    },
  ];

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
    <section className="relative z-[800]">
      <Swiper
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Autoplay]}
        className="h-[90vh]"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <div
              className="h-full w-full bg-cover bg-center flex flex-col justify-center items-center"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
             
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Offer component */}

      {offerData && (
        <div className="absolute top-8 left-8 bg-gradient-to-br from-green-600 to-blue-800 text-white p-4 rounded-lg shadow-lg z-10 w-72 border border-gray-200">
          <h3 className="text-lg font-semibold mb-1 uppercase tracking-wide bg-green-800 text-center p-2 rounded">
            A LIMITED TIME OFFER
          </h3>
          <h2 className="text-2xl font-bold mb-1">{offerData.title}</h2>
          <p className="text-sm font-medium">{offerData.description}</p>
          <div className="mt-4 space-y-2">
            <p className="text-sm flex justify-between">
              <span>Land Parcel</span>
              <span>{offerData.landParcel}</span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Floors</span>
              <span>{offerData.floors}</span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Possession</span>
              <span>{offerData.possession}</span>
            </p>
            <p className="text-sm flex justify-between">
              <span>Ownership</span>
              <span>{offerData.ownership}</span>
            </p>
          </div>
          <ul className="bg-green-200 text-green-900 rounded-md p-3 mt-4 text-sm space-y-1">
            {offerData.features.map((feature, index) => (
              <li key={index} className="flex items-center gap-2">
                <span className="inline-block w-2 h-2 bg-green-500 rounded-full"></span>
                {feature}
              </li>
            ))}
          </ul>
          <p className="mt-4 font-bold text-center text-lg">
            Luxurious {offerData.configurations} Starts At
          </p>
          <p className="text-center text-2xl font-bold">₹ {offerData.price} All Inc</p>
          <button
            className="mt-4 w-full bg-green-800 text-white py-2 rounded hover:bg-green-700"
            onClick={() => handleViewBreakdown(offerData.type)}
          >
            {offerData.buttonText}
          </button>
        </div>
      )}

    {/* Form PoupUp */}
    
      {popupOpen && (
          <PopupForm
            isOpen={popupOpen}
            onClose={handleClosePopup}
            type={selectedType}
          />
        
      )}
    </section>
  );
};

export default HeroSection;
