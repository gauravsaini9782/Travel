import React from "react";
import Header from "./Header";
import HeroSection from "./HeroSection";
import { Services } from "./Services";
import PopularDestination from "./PopularDestination";
import WhyChooseUs from "./WhyChooseUs";
import InteractiveGallery from "./Interactive Gallery";
import Testimonials from "./Testimonials";
import Footer from "./Footer";


function App() {
  return (
    <div>
      <Header />
      <HeroSection/>
      <Services/>
      <PopularDestination/>
      <InteractiveGallery/>
      <WhyChooseUs/>
      <Testimonials/>
      <Footer/>
     
    </div>
  );
}

export default App;
