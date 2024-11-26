import React from "react";

const JungleSafariBooking = () => {
  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4 md:px-10 text-center">
        {/* Section Heading */}
        <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Jungle Safari Booking
        </h1>
        <p className="text-gray-600 text-lg mb-8">
          Experience the thrill of the wild with our carefully curated jungle safari tours. Follow the steps below to book your adventure today.
        </p>

        {/* Booking Procedure */}
        <div className="bg-white rounded-lg shadow-lg p-6 md:p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-4">How to Book Jungle Safari Tickets</h2>
          <ol className="list-decimal text-left text-gray-600 pl-5 space-y-2">
            <li>Contact us through WhatsApp or Call using the buttons below.</li>
            <li>Provide your preferred date and number of people for the safari.</li>
            <li>Receive confirmation and payment details.</li>
            <li>Get ready to explore the beauty of nature and wildlife!</li>
          </ol>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-center gap-4 mb-12">
          <a
            href="https://wa.me/9257974891" // Replace "your-number" with your actual WhatsApp number
            className="bg-green-500 hover:bg-green-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
            target="_blank"
            rel="noopener noreferrer"
          >
            Contact Us on WhatsApp
          </a>
          <a
            href="tel:your-9257974891" // Replace "your-phone-number" with your actual phone number
            className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-3 px-6 rounded-lg shadow-md transition duration-300"
          >
            Call Us for Booking
          </a>
        </div>

        {/* Large Image */}
        <div className="overflow-hidden rounded-lg shadow-lg">
          <img
            src="/images/Ranthambore schedule1.png" // Replace with a real jungle safari image
            alt="Jungle Safari"
            className="w-full h-auto"
          />
        </div>
      </div>
    </section>
  );
};

export default JungleSafariBooking;
