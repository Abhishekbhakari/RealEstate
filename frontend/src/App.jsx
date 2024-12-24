import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ContactForm from "./components/ContactForm";
import Amenities from "./components/Amenities";

const App = () => (
  <div className="grid grid-cols-1 lg:grid-cols-4 min-h-screen relative">
    <div className="col-span-4 lg:col-span-3">
      <main>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/#aminities" element={<Amenities />} />
        </Routes>
        <ContactForm />
      </main>
      <Footer />
    </div>
  </div>
);

export default App;
