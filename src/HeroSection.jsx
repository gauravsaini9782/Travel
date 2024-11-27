import React from "react";

const HeroSection = () => {
  return (
    <section
      className="relative w-full h-[calc(100vh-80px)] bg-cover bg-center"
      style={{
        backgroundImage: `url('/images/herrrrrrooooo.jpg')`, // Replace with your tiger image URL
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-black via-transparent to-black"></div>

      {/* Content */}
      <div className="container mx-auto relative z-10 h-full flex flex-col justify-center items-center text-center px-4 space-y-6">
        {/* Heading */}
        <h1 className="text-4xl md:text-6xl font-extrabold text-white leading-snug tracking-wide drop-shadow-lg">
          Explore <span className="text-orange-500">Ranthambore</span> Like Never Before
        </h1>

        {/* Subheading */}
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl leading-relaxed">
          Your all-in-one travel partner for Ranthambore. From luxury stays to exciting safaris—
          <span className="font-semibold text-white"> everything tailored for you.</span>
        </p>

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto justify-center">
          {/* Contact Us */}
          <a
            href="https://wa.me/9782312413?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20your%20Ranthambore%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg shadow-md transition duration-300 w-full md:w-auto"
          >
            <img
              src="https://img.icons8.com/color/48/whatsapp.png"
              alt="WhatsApp Icon"
              className="w-6 h-6 mr-2"
            />
            Contact Us
          </a>

          {/* Explore More */}
          <a
            href="explore-packages"
            className="bg-transparent border-2 border-white text-white px-8 py-3 rounded-full text-lg hover:bg-white hover:text-orange-500 transition duration-300 shadow-md w-full md:w-auto"
          >
            Explore Packages
          </a>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
