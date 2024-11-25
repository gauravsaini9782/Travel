import React from 'react';

export const Services = () => {
  const services = [
    {
      id: 1,
      icon: '🏨', // Replace with an appropriate hotel icon if needed
      title: 'Budget Hotels',
      description: 'Affordable stays with excellent facilities.',
    },
    {
      id: 2,
      icon: '🚖', // Replace with a taxi icon
      title: 'Personalised Taxi',
      description: 'Reliable and comfortable travel options.',
    },
    {
      id: 3,
      icon: '🎟️', // Replace with a ticket icon
      title: 'Wildlife Tickets',
      description: 'Book your safari tickets easily.',
    },
    {
      id: 4,
      icon: '🧭', // Replace with a guide icon
      title: 'Tour Guides',
      description: 'Expert guides for an unforgettable experience.',
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4 md:px-10">
        {/* Heading Section */}
        <div className="text-center mb-12">
          <p className="text-sm text-orange-500 uppercase tracking-wider">Category</p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            We Offer Best Services
          </h2>
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service) => (
            <div
              key={service.id}
              className="bg-white rounded-lg shadow-lg p-6 flex flex-col items-center text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-2xl"
            >
              {/* Icon */}
              <div className="text-5xl mb-4">{service.icon}</div>
              {/* Title */}
              <h3 className="text-lg font-bold text-gray-800 mb-2">{service.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-600">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
