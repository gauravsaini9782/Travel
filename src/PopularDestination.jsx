import React, { useRef } from "react";

const PopularDestination = () => {
  const cardContainer = useRef(null);

  // Slide left
  const slideLeft = () => {
    if (cardContainer.current) {
      cardContainer.current.scrollBy({
        left: -300,
        behavior: "smooth",
      });
    }
  };

  // Slide right
  const slideRight = () => {
    if (cardContainer.current) {
      cardContainer.current.scrollBy({
        left: 300,
        behavior: "smooth",
      });
    }
  };

  const destinations = [
    {
      id: 1,
      name: "Ranthambore Fort",
      description: "An ancient hill fort known for its history and views.",
      image: "/images/Ranthambore fort.jpg", // Replace with actual image URL
    },
    {
      id: 2,
      name: "Padam Lake",
      description: "A serene lake, ideal for spotting wildlife and birds.",
      image: "/images/Padam Talao.jpg",
    },
    {
      id: 3,
      name: "Trinetra Ganesh Temple",
      description: "A famous temple located inside the Ranthambore Fort.",
      image: "/images/ganesh temple.png",
    },
    {
      id: 4,
      name: "Raj Bagh Ruins",
      description: "Picturesque ruins amidst nature and wildlife.",
      image: "/images/crocodile safari.png",
    },
    {
        id: 1,
        name: "Ranthambore Fort",
        description: "An ancient hill fort known for its history and views.",
        image: "/images/amareshwar.jpg", // Replace with actual image URL
      },
      {
        id: 2,
        name: "Padam Lake",
        description: "A serene lake, ideal for spotting wildlife and birds.",
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: 3,
        name: "Trinetra Ganesh Temple",
        description: "A famous temple located inside the Ranthambore Fort.",
        image: "https://via.placeholder.com/300x200",
      },
      {
        id: 4,
        name: "Raj Bagh Ruins",
        description: "Picturesque ruins amidst nature and wildlife.",
        image: "https://via.placeholder.com/300x200",
      },
  ];

  return (
    <section className="bg-[#FBFBEC] py-16">
      <div className="container mx-auto px-4 text-center">
        {/* Small Heading */}
        <p className="text-gray-600 text-sm uppercase tracking-wide">Most Attractive</p>
        {/* Main Heading */}
        <h2 className="text-3xl md:text-4xl font-bold mb-8">
          Popular Destinations
        </h2>

        {/* Carousel Section */}
        <div className="relative">
          {/* Left Arrow */}
          <button
            onClick={slideLeft}
            className="absolute left-0 z-10 p-3 bg-orange-500 text-white rounded-full -translate-y-1/2 top-1/2 hover:bg-orange-600 transition"
          >
            &#8592;
          </button>

          {/* Cards */}
          <div
            ref={cardContainer}
            className="flex gap-6 overflow-x-scroll scrollbar-hide scroll-smooth w-full py-4"
          >
            {destinations.map((destination) => (
              <div
                key={destination.id}
                className="flex-none w-[300px] bg-white shadow-lg rounded-lg hover:scale-105 transition-transform duration-300"
              >
                <img
                  src={destination.image}
                  alt={destination.name}
                  className="rounded-t-lg w-full h-48 object-cover"
                />
                <div className="p-4 text-left">
                  <h3 className="text-lg font-semibold mb-2">
                    {destination.name}
                  </h3>
                  <p className="text-sm text-gray-600 mb-4">
                    {destination.description}
                  </p>
                  <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition">
                    Explore
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* Right Arrow */}
          <button
            onClick={slideRight}
            className="absolute right-0 z-10 p-3 bg-orange-500 text-white rounded-full -translate-y-1/2 top-1/2 hover:bg-orange-600 transition"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default PopularDestination;

