import React from 'react';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/HighLights';
import Gallery from '../components/Gallery';
import Amenities from '../components/Amenities';
import FloorPlans from '../components/FloorPlans';
import ContactForm from '../components/ContactForm';
import PriceSection from '../components/PriceSection';

const Home = () => (
  <div className="space-y-8 ">
    <HeroSection />
    <PriceSection/>
    <Highlights />
    <Gallery />
    <Amenities />
    <FloorPlans />
    <ContactForm />
  </div>
);

export default Home;