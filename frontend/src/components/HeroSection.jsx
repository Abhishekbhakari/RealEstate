import React from 'react';
const HeroSection = () => (
    <section className="bg-gradient-to-r from-blue-500 to-green-500 h-96 flex items-center justify-center">
      <div className="text-center text-white animate-fade-in-down">
        <h1 className="text-6xl font-extrabold mb-4">Welcome to Sai World</h1>
        <p className="text-xl mb-6">Your dream home awaits.</p>
        <button className="px-6 py-3 bg-yellow-500 text-white font-bold rounded hover:bg-yellow-600 transition-transform transform hover:scale-105">Learn More</button>
      </div>
    </section>
  );
  
  export default HeroSection;