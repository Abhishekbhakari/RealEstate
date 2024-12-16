import React from 'react';

const Gallery = ({ images = ["https://enviragallery.com/wp-content/uploads/2020/02/stephen-leonardi-Al9Cl-b7EFU-unsplash.jpg", "https://www.sandp.co.in/images/blogs/the-incredible-9-must-have-apartment-amenities.jpeg", "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRTDHjYG-8TwEYQ5Q9Kt66gLqN-040NsPkltQ&s"] }) => (
  <section className="p-6 bg-gray-100">
    <h2 className="text-3xl font-bold mb-4 text-center">Gallery</h2>
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {images.map((image, index) => (
        <img key={index} src={image} alt={`Gallery ${index + 1}`} className="rounded shadow" />
      ))}
    </div>
  </section>
);

export default Gallery;