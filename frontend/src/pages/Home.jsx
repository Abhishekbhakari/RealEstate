import React from 'react';
import HeroSection from '../components/HeroSection';
import Highlights from '../components/HighLights';
import Gallery from '../components/Gallery';
import Amenities from '../components/Amenities';
import FloorPlans from '../components/FloorPlans';
import ContactForm from '../components/ContactForm';
import PriceSection from '../components/PriceSection';
import About from './About';
import VideoComponent from '../components/VideoComponent';
import Offers from '../components/Offer';

const Home = () => {
  const offerData = {
    title: "Special Offer",
    description: "Get up to 20% off on selected properties. Limited time offer!",
    buttonText: "Learn More"
  };
  return(
    <>
    <HeroSection offerData={offerData} />
    <About />
    <PriceSection />
    {/* <Highlights /> */}
    <Offers/>
    <Amenities />
    <Gallery />
    <FloorPlans />
    <VideoComponent/>
    <ContactForm />
    </>
  )

};

export default Home;