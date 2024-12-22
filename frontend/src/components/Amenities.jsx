// AmenitiesSlider.js
import React from 'react';
import Slider from 'react-slick'; // Install react-slick and slick-carousel
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Amenities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
  };

  const amenities = [
    { image: 'path/to/image1.jpg', title: 'Open Air Gym', description: 'Stay fit with outdoor exercise equipment in a natural setting' },
    { image: 'path/to/image2.jpg', title: 'Yoga Zone', description: 'Find your inner peace in our dedicated yoga and meditation area' },
    { image: 'path/to/image3.jpg', title: 'Relaxation Zone', description: '24/7 medical assistance and health services at your doorstep' },
    { image: 'path/to/image4.jpg', title: 'Indoor Games Room', description: 'A luxurious space for community gatherings and events' },
    { image: 'path/to/image5.jpg', title: 'Zen Garden', description: 'Tranquil garden space for relaxation and meditation' },
    { image: 'path/to/image6.jpg', title: 'Pre-School & Day Care', description: 'Quality childcare and early education facilities' },
  ];

  // Divide amenities into chunks of 3
  const slides = [];
  for (let i = 0; i < amenities.length; i += 3) {
    slides.push(amenities.slice(i, i + 3));
  }

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Amenities</h2>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="flex flex-row gap-4">
            {slide.map((amenity, i) => (
              <div
                key={i}
                className="relative flex overflow-hidden rounded-lg shadow-lg h-60 bg-gray-800 text-white w-60"
              >
                <img
                  src={amenity.image}
                  alt={amenity.title}
                  className="absolute inset-0 w-full h-full object-cover opacity-70"
                />
                <div className="absolute inset-0 bg-black bg-opacity-40"></div>
                <div className="relative p-4 flex flex-col justify-end h-full">
                  <h3 className="text-lg font-bold mb-2">{amenity.title}</h3>
                  <p className="text-sm">{amenity.description}</p>
                </div>
              </div>
            ))}
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Amenities;
