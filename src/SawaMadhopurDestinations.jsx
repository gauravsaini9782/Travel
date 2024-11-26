import React from 'react';

const SawaiMadhopurDestinations = () => {
  const destinations = [
    {
      name: 'Ranthambore National Park',
      description:
        'Famous for its tiger sightings, this national park is home to tigers, leopards, and a variety of other wildlife. Safari tours are available for a chance to experience the park up close.',
      image: '/images/ranthambore-park.jpg',
    },
    {
      name: 'Ranthambore Fort',
      description:
        'A UNESCO World Heritage site, the Ranthambore Fort is over 1,000 years old and offers panoramic views of the surrounding landscape and park.',
      image: '/images/ranthambore-fort.jpg',
    },
    {
      name: 'Trinetra Ganesh Temple',
      description:
        'Located inside the national park, this ancient temple is dedicated to Lord Ganesh, offering both spiritual solace and a peaceful retreat.',
      image: '/images/trinetra-ganesh.jpg',
    },
    {
      name: 'Kala Gaura Bhairav Temple',
      description:
        'Known for its tantric rituals, this hilltop temple provides a unique spiritual experience, offering stunning views of the surrounding wilderness.',
      image: '/images/kala-gaura-bhairav.jpg',
    },
    {
      name: 'Rajiv Gandhi Regional Museum of Natural History',
      description:
        'This museum in Sawai Madhopur educates visitors about the region’s rich biodiversity, displaying various exhibits on the area’s flora and fauna.',
      image: '/images/museum.jpg',
    },
    {
        name: 'Ranthambore National Park',
        description:
          'Famous for its tiger sightings, this national park is home to tigers, leopards, and a variety of other wildlife. Safari tours are available for a chance to experience the park up close.',
        image: '/images/ranthambore-park.jpg',
      },
      {
        name: 'Ranthambore Fort',
        description:
          'A UNESCO World Heritage site, the Ranthambore Fort is over 1,000 years old and offers panoramic views of the surrounding landscape and park.',
        image: '/images/ranthambore-fort.jpg',
      },
      {
        name: 'Trinetra Ganesh Temple',
        description:
          'Located inside the national park, this ancient temple is dedicated to Lord Ganesh, offering both spiritual solace and a peaceful retreat.',
        image: '/images/trinetra-ganesh.jpg',
      },
      {
        name: 'Kala Gaura Bhairav Temple',
        description:
          'Known for its tantric rituals, this hilltop temple provides a unique spiritual experience, offering stunning views of the surrounding wilderness.',
        image: '/images/kala-gaura-bhairav.jpg',
      },
      {
        name: 'Rajiv Gandhi Regional Museum of Natural History',
        description:
          'This museum in Sawai Madhopur educates visitors about the region’s rich biodiversity, displaying various exhibits on the area’s flora and fauna.',
        image: '/images/museum.jpg',
      },
      {
        name: 'Kala Gaura Bhairav Temple',
        description:
          'Known for its tantric rituals, this hilltop temple provides a unique spiritual experience, offering stunning views of the surrounding wilderness.',
        image: '/images/kala-gaura-bhairav.jpg',
      },
      {
        name: 'Rajiv Gandhi Regional Museum of Natural History',
        description:
          'This museum in Sawai Madhopur educates visitors about the region’s rich biodiversity, displaying various exhibits on the area’s flora and fauna.',
        image: '/images/museum.jpg',
      },
  ];

  return (
    <section className="bg-FBFBEC py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">Top Destinations in Sawai Madhopur</h2>
          <p className="text-gray-600 mt-4">
            Explore the beauty, wildlife, and history of Sawai Madhopur, with its iconic attractions and serene landscapes.
          </p>
        </div>

        {/* Destinations List */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination, index) => (
            <div
              key={index}
              className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-2xl duration-300"
            >
              <img
                src={destination.image}
                alt={destination.name}
                className="w-full h-56 object-cover transition-all duration-500 hover:opacity-80"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-gray-800 hover:text-orange-500 transition duration-300">
                  {destination.name}
                </h3>
                <p className="text-gray-600 mt-2">{destination.description}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <a
            href="/contact-us"
            className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
          >
            Plan Your Trip Now
          </a>
        </div>
      </div>
    </section>
  );
};

export default SawaiMadhopurDestinations;

