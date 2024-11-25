import React from "react";

const WhyChooseUs = () => {
  const features = [
    {
      id: 1,
      title: "Trustworthy Services",
      description: "We deliver what we promise with utmost transparency and reliability.",
      icon: "✅", // Replace with an appropriate icon/image
    },
    {
      id: 2,
      title: "Quality Assurance",
      description: "Top-notch service standards to make your experience unforgettable.",
      icon: "🌟", // Replace with an appropriate icon/image
    },
    {
      id: 3,
      title: "Experienced Staff",
      description: "Our team comprises seasoned professionals ready to assist you.",
      icon: "👨‍💼", // Replace with an appropriate icon/image
    },
    {
      id: 4,
      title: "Cost-Effective",
      description: "We provide exceptional services that fit your budget.",
      icon: "💰", // Replace with an appropriate icon/image
    },
  ];

  return (
    <section className="bg-[#FBFBEC] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Small Heading */}
        <p className="text-gray-600 text-sm uppercase tracking-wide">
          Discover Our Advantage
        </p>
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Why Choose Us?</h2>

        {/* Features Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <div
              key={feature.id}
              className="bg-white shadow-lg rounded-lg p-6 hover:scale-105 transform transition-transform duration-300"
            >
              {/* Icon */}
              <div className="text-4xl text-orange-500 mb-4">{feature.icon}</div>
              {/* Title */}
              <h3 className="text-lg font-semibold mb-2">{feature.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
