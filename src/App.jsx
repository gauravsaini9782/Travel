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
import JungleSafariBooking from "./JungleSafariBooking";
import TaxiBooking from "./TaxiBooking";
import SawaiMadhopurDestinations from "./SawaMadhopurDestinations";
import PlanYourTrip from "./PlanYourTripPage";
import AboutUs from "./AboutUs";

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
          <Route path="/safari-booking" element={<JungleSafariBooking/>} />
          <Route path="/taxi-booking" element={<TaxiBooking />} />
          <Route path="/destinations" element={<SawaiMadhopurDestinations/>} />
          <Route path="/contact-us" element={<PlanYourTrip/>} />
          <Route path="/about-us" element={<AboutUs/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
