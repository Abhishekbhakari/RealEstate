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
    { image: 'https://suncrestestate.com/wp-content/uploads/2019/09/indoor-game-img.jpg', title: 'Indoor Games Room', description: 'A luxurious space for community gatherings and events' },
    { image: 'https://www.redcliffegardeners.co.uk/wp-content/uploads/2023/12/relaxing-zen-garden-design.jpg', title: 'Zen Garden', description: 'Tranquil garden space for relaxation and meditation' },
    { image: 'https://www.thegardnerschool.com/wp-content/uploads/2019/09/The-Gardner-School-of-Eagan_8936_-1-1900x1258.jpg', title: 'Pre-School & Day Care', description: 'Quality childcare and early education facilities' },
  ];

  return (
    <div className="p-6 max-w-screen-lg mx-auto">
      <h2 className="text-3xl font-extrabold text-center mb-8 text-gray-800">Amenities</h2>
      <Slider {...settings}>
        {amenities.map((amenity, index) => (
          <div key={index} className="px-4">
            <div className="relative rounded-lg overflow-hidden shadow-lg h-72 bg-gray-900 text-white">
              <img
                src={amenity.image}
                alt={amenity.title}
                className="absolute inset-0 w-full h-full object-cover opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-50"></div>
              <div className="relative p-4 flex flex-col justify-end h-full">
                <h3 className="text-xl font-semibold mb-2">{amenity.title}</h3>
                <p className="text-sm leading-relaxed">{amenity.description}</p>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Amenities;
