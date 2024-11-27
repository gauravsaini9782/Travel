import React from "react";

const packages = [
  {
    id: 1,
    title: "Classic Ranthambore Safari Package",
    description:
      "Experience morning and evening safaris with chances of tiger sightings.",
    duration: "2 Days / 1 Night",
    price: "₹5,500/person",
    image: "/images/exp1.jpg",
    link: "#",
  },
  {
    id: 2,
    title: "Heritage & Safari Combo",
    description:
      "Combine a jungle safari with exploring the historic Ranthambore Fort.",
    duration: "3 Days / 2 Nights",
    price: "₹8,000/person",
    image: "/images/exp2.webp",
    link: "#",
  },
  {
    id: 3,
    title: "Weekend Getaway at Sawai Madhopur",
    description: "Relax and explore temples, forts, and wildlife nearby.",
    duration: "2 Days / 1 Night",
    price: "₹4,000/person",
    image: "/images/exp3.webp",
    link: "#",
  },
  {
    id: 4,
    title: "Ranthambore Adventure Tour",
    description: "Jungle walks, bird watching, and thrilling gypsy safaris.",
    duration: "4 Days / 3 Nights",
    price: "₹10,000/person",
    image: "/images/exp5.webp",
    link: "#",
  },
  {
    id: 5,
    title: "Luxury Wildlife Experience",
    description:
      "Enjoy premium safaris, stays at 5-star resorts, and VIP treatment.",
    duration: "3 Days / 2 Nights",
    price: "₹15,000/person",
    image: "/images/exp7.jpg",
    link: "#",
  },
  {
    id: 6,
    title: "Cultural Escape in Sawai Madhopur",
    description: "Immerse yourself in the local culture and cuisines.",
    duration: "2 Days / 1 Night",
    price: "₹5,000/person",
    image: "/images/culture.webp",
    link: "#",
  },
  {
    id: 7,
    title: "Family Wildlife Package",
    description: "A safari experience tailored for families and kids.",
    duration: "2 Days / 1 Night",
    price: "₹7,000/family",
    image: "/images/family.webp",
    link: "#",
  },
  {
    id: 8,
    title: "Ranthambore Photography Tour",
    description: "Exclusive tours for wildlife photographers.",
    duration: "3 Days / 2 Nights",
    price: "₹12,000/person",
    image: "/images/phoyooo.jpg",
    link: "#",
  },
  {
    id: 9,
    title: "Eco-Wildlife Experience",
    description: "Stay in eco-lodges and focus on conservation activities.",
    duration: "3 Days / 2 Nights",
    price: "₹8,000/person",
    image: "/images/deert.jpg",
    link: "#",
  },
];

const ExplorePackages = () => {
  return (
    <section className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        <h2 className="text-4xl font-bold text-gray-800 text-center mb-8">
          Explore Our Packages
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {packages.map((pkg) => (
            <div
              key={pkg.id}
              className="relative bg-white shadow-lg rounded-lg overflow-hidden group hover:scale-105 transition-transform duration-300"
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800">
                  {pkg.title}
                </h3>
                <p className="text-sm text-gray-600 mt-2">{pkg.description}</p>
                <p className="text-sm text-gray-500 mt-2">{pkg.duration}</p>
                <p className="text-orange-500 font-bold mt-3">{pkg.price}</p>
                <a
                  href={pkg.link}
                  className="mt-4 inline-block bg-orange-500 text-white py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-300"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExplorePackages;
