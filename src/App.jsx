import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { Services } from "./Services";
import PopularDestination from "./PopularDestination";
import WhyChooseUs from "./WhyChooseUs";
import InteractiveGallery from "./Interactive Gallery";
import Testimonials from "./Testimonials";
import Footer from "./Footer";
import HotelBooking from "./HotelBooking";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />

        <Routes>
          <Route
            path="/"
            element={
              <div>
                <HeroSection />
                <Services />
                <PopularDestination />
                <InteractiveGallery />
                <WhyChooseUs />
                <Testimonials />
              </div>
            }
          />
          <Route path="/hotel-booking" element={<HotelBooking />} />
          <Route path="/safari-booking" element={<HotelBooking />} />
          <Route path="/xyz-booking" element={<HotelBooking />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
