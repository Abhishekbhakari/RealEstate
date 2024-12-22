import React from 'react';
import Slider from 'react-slick'; 
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Amenities = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3, 
    slidesToScroll: 1,
    arrows: true,
    responsive: [
      {
        breakpoint: 1024, 
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 768, 
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  const amenities = [
    { image: 'https://images.squarespace-cdn.com/content/v1/5ada11772714e5eb213ab1df/1658252097679-8H8VC8R6H1LYVECFCF74/Yard-8-Fitness-Amenity2.jpg', title: 'Open Air Gym', description: 'Stay fit with outdoor exercise equipment in a natural setting' },
    { image: 'https://mylevel.in/assets/amenities/yogazone.jpg', title: 'Yoga Zone', description: 'Find your inner peace in our dedicated yoga and meditation area' },
    { image: 'https://www.wellable.co/blog/wp-content/uploads/2023/07/MicrosoftTeams-image-3-1024x683.jpg', title: 'Relaxation Zone', description: '24/7 medical assistance and health services at your doorstep' },
    { image: 'path/to/image4.jpg', title: 'Indoor Games Room', description: 'A luxurious space for community gatherings and events' },
    { image: 'path/to/image5.jpg', title: 'Zen Garden', description: 'Tranquil garden space for relaxation and meditation' },
    { image: 'path/to/image6.jpg', title: 'Pre-School & Day Care', description: 'Quality childcare and early education facilities' },
  ];

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h2 className="text-2xl font-bold text-center mb-4">Amenities</h2>
      <Slider {...settings}>
        {amenities.map((amenity, index) => (
          <div key={index} className="flex justify-center">
            <div
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
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Amenities;
