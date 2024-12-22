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
    <section className="relative z-[900]">
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

     

      {offerData && (
        <div className="absolute top-8 left-8 bg-white p-4 rounded shadow-lg z-10 w-64">
          <h3 className="text-xl font-bold mb-2">{offerData.title}</h3>
          <p className="text-gray-600">{offerData.description}</p>
          <button
            className="mt-4 bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
            onClick={() => handleViewBreakdown(offerData.type)}
          >
            {offerData.buttonText}
          </button>
        </div>
      )}

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
