import React from "react";

const HeroSection = () => {
  return (
    <section
  className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center"
  style={{
    backgroundImage: `url('/images/hero section.png')`, // Replace with your tiger image URL
  }}
>
  <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Overlay */}
  <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-start pl-4 md:pl-10 space-y-6 text-white">
    {/* Heading */}
    <h1 className="text-4xl md:text-5xl font-bold leading-snug">
      Ranthambore’s <span className="text-orange-500">All-in-One Travel Solution<br></br></span> at Your Fingertips!
    </h1>
    {/* Description */}
    <p className="text-lg md:text-xl">
      Say goodbye to the hassle of multiple bookings. With us, your Ranthambore adventure<br></br> is just a click away—
      <span className="font-semibold">all within your budget.</span>
    </p>
    {/* Contact Us Button */}
    <a
      href="https://wa.me/9782312413?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20your%20Ranthambore%20services."
      target="_blank"
      rel="noopener noreferrer"
      className="flex items-center bg-orange-500 hover:bg-orange-600 text-white px-6 py-3 rounded-full text-lg shadow-md"
    >
      <img
        src="https://img.icons8.com/color/48/whatsapp.png"
        alt="WhatsApp Icon"
        className="w-6 h-6 mr-2"
      />
      Contact Us
    </a>
  </div>
</section>

  );
};

export default HeroSection;
