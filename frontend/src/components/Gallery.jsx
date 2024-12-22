import React from "react";

const Gallery = ({
  images = [
    "https://enviragallery.com/wp-content/uploads/2020/02/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg",
    "https://www.sandp.co.in/images/blogs/the-incredible-9-must-have-apartment-amenities.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDHjYG-8TwEYQ5Q9Kt66gLqN-040NsPkltQ&s",
    "https://images.ctfassets.net/n2ifzifcqscw/3QRMlAcJFrYAEAbhziixZW/d4b9aa50215c5ea7a161b8a6b59f1974/hero-real-estate-facts-trends.jpeg",
    "https://png.pngtree.com/thumb_back/fw800/background/20240614/pngtree-luxury-real-estate-house-property-image_15868457.jpg",
    "https://www.build-review.com/wp-content/uploads/2020/07/luxury-real-estate.jpg",
    "https://d1b3667xvzs6rz.cloudfront.net/2024/09/real-estate-property.jpg",
    "https://prod.rockmedialibrary.com/api/public/content/ff061825fa8e44bf8108de5c786c0062?v=4c4f7c7a",
  ],
}) => (
  <section className="p-6 bg-gray-100">
    <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div
          key={index}
          className="w-full h-48 overflow-hidden rounded shadow flex items-center justify-center"
        >
          <img
            src={image}
            alt={`Gallery ${index + 1}`}
            className="object-cover w-full h-full"
          />
        </div>
      ))}
    </div>
  </section>
);

export default Gallery;
