import React from "react";

const Gallery = ({
  images = [
    "https://enviragallery.com/wp-content/uploads/2020/02/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg",
    "https://www.sandp.co.in/images/blogs/the-incredible-9-must-have-apartment-amenities.jpeg",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDHjYG-8TwEYQ5Q9Kt66gLqN-040NsPkltQ&s",
    "https://via.placeholder.com/300",
    "https://via.placeholder.com/400",
    "https://via.placeholder.com/500",
    "https://via.placeholder.com/600",
    "https://via.placeholder.com/700",
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
