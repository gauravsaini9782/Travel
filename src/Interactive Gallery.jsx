import React from "react";

const InteractiveGallery = () => {
  const galleryItems = [
    {
      id: 1,
      image: "/images/p1.png", // Replace with a real image URL
      title: "Jungle Safari",
      description: "Experience the thrill of Ranthambore's wildlife.",
    },
    {
      id: 2,
      image: "/images/p5.jpg", // Replace with a real image URL
      title: "Luxury Hotels",
      description: "Stay in the finest accommodations surrounded by nature.",
    },
    {
      id: 3,
      image: "/images/p4.jpg", // Replace with a real image URL
      title: "Heritage Sites",
      description: "Explore the rich history of Ranthambore.",
    },
    {
      id: 4,
      image: "/images/p3.jpg", // Replace with a real image URL
      title: "Tour Guides",
      description: "Professional guides for an enriching experience.",
    },
    {
      id: 5,
      image: "/images/p2.jpg", // Replace with a real image URL
      title: "Local Cuisine",
      description: "Savor the authentic flavors of Rajasthan.",
    },
    {
      id: 6,
      image: "/images/image 647.png", // Replace with a real image URL
      title: "Scenic Landscapes",
      description: "Breathtaking views and serene environments.",
    },
  ];

  return (
    <section className=" py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Small Heading */}
        <p className="text-gray-600 text-sm uppercase tracking-wide">
          Our Collection
        </p>
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">Memorable Moments</h2>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {galleryItems.map((item) => (
            <div
              key={item.id}
              className="relative group overflow-hidden rounded-lg shadow-lg"
            >
              {/* Image */}
              <img
                src={item.image}
                alt={item.title}
                className="w-full h-64 object-cover transform transition-transform duration-300 group-hover:scale-110"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-center items-center text-white">
                <h3 className="text-lg font-bold">{item.title}</h3>
                <p className="text-sm mt-2">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InteractiveGallery;
