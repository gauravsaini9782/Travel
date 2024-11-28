import React, { useState } from "react";

const Testimonials = () => {
  // State to manage the active testimonial card
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Testimonials data
  const testimonials = [
    {
      id: 1,
      name: "Alice Johnson",
      title: "Traveler",
      feedback:
        "Amazing service and beautiful destinations! Everything was perfect from start to finish.",
      image: "/images/testi 1.jpg",
    },
    {
      id: 2,
      name: "Michael Smith",
      title: "Photographer",
      feedback:
        "Loved the landscapes! The team was friendly and accommodating throughout the trip.",
      image: "/images/testi 6.jpg",
    },
    {
      id: 3,
      name: "Sophia Lee",
      title: "Nature Enthusiast",
      feedback:
        "Unforgettable experience! The wildlife safari was the highlight of my journey.",
      image: "/images/testi3.jpg",
    },
    {
      id: 4,
      name: "David Wilson",
      title: "Explorer",
      feedback:
        "A perfect getaway with well-planned services and amazing hospitality.",
      image: "/images/testi 4.jpg",
    },
    {
      id: 5,
      name: "Emma Brown",
      title: "Solo Traveler",
      feedback: "Safe, exciting, and affordable. Highly recommend for solo travelers!",
      image: "/images/liam.jpg",
    },
    {
      id: 6,
      name: "Liam Davis",
      title: "Couple Traveler",
      feedback:
        "We loved the romantic destinations and the private taxi services. Outstanding!",
      image: "/images/testi2.jpg",
    },
  ];

  // Function to handle next testimonial
  const nextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  // Function to handle previous testimonial
  const prevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="py-16 bg-[#f7f7f7]">
      <div className="container mx-auto px-4 text-center">
        {/* Heading */}
        <h2 className="text-3xl font-bold text-gray-800 mb-8">Our Happy Customers</h2>
{/* Testimonials Section */}
<div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-8">
  {/* Left: Testimonial Cards */}
  <div className="w-full md:w-1/2">
    <div className="bg-white rounded-xl shadow-lg p-6 mb-6">
      {/* Image and Information */}
      <div className="flex items-center mb-4">
        <img
          src={testimonials[activeTestimonial].image}
          alt={testimonials[activeTestimonial].name}
          className="w-16 h-16 md:w-20 md:h-20 rounded-full mr-4 object-cover"
        />
        <div>
          <h3 className="font-bold text-lg md:text-xl text-gray-800">
            {testimonials[activeTestimonial].name}
          </h3>
          <p className="text-sm text-gray-600">{testimonials[activeTestimonial].title}</p>
        </div>
      </div>
      {/* Feedback */}
      <p className="text-gray-800 text-sm md:text-base">
        {testimonials[activeTestimonial].feedback}
      </p>
    </div>

    {/* Arrow buttons to navigate testimonials */}
    <div className="flex justify-center space-x-4 mt-4">
      <button
        onClick={prevTestimonial}
        className="p-2 bg-orange-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        &#8592;
      </button>
      <button
        onClick={nextTestimonial}
        className="p-2 bg-orange-500 text-white rounded-full shadow-lg hover:scale-110 transition-transform"
      >
        &#8594;
      </button>
    </div>
  </div>

  {/* Right: Traveler Image */}
  <div className="w-full md:w-1/2 mb-8 md:mb-0">
    <img
      src="/images/testi img.jpg"
      alt="Traveler"
      className="rounded-lg shadow-lg mx-auto max-w-full md:max-w-lg"
    />
  </div>
</div>

      </div>
    </section>
  );
};

export default Testimonials;
