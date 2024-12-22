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
    title: "Runwal Forest Tower",
    description: "Thane West, Mumbai By Runwal Group",
    landParcel: "6.20 Acres",
    floors: "2B+3P+38 Storeys",
    possession: "Dec 2026",
    ownership: "Freehold",
    features: [
      "Early Buy Discounts",
      "Construction Linked Pay Plan",
      "All Flats Are Vastu-Compliant",
    ],
    configurations: "2, 3 & 4 BHK",
    price: "1.62 Cr",
    buttonText: "Book A Free Site Visit",
    type: "limited-offer",
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
    <div className="contact-form-container">
      <ContactForm />
    </div>
    </>
  )

};

export default Home;