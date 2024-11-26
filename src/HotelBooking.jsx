import React from "react";

const HotelBooking = () => {
  const hotels = [
    {
      id: 1,
      name: "Hilltop Budget Inn",
      location: "Ranthambore, Sawai Madhopur",
      price: "$50/night",
      description: "A cozy and affordable stay near the wildlife reserve.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 2,
      name: "Safari View Lodge",
      location: "Ranthambore, Sawai Madhopur",
      price: "$70/night",
      description: "Comfortable rooms with stunning views of the jungle.",
      image: "https://via.placeholder.com/400x300",
    },
    {
      id: 3,
      name: "Relaxation Retreat",
      location: "Ranthambore, Sawai Madhopur",
      price: "$60/night",
      description: "Affordable luxury with excellent amenities.",
      image: "https://via.placeholder.com/400x300",
    },
    {
        id: 1,
        name: "Hilltop Budget Inn",
        location: "Ranthambore, Sawai Madhopur",
        price: "$50/night",
        description: "A cozy and affordable stay near the wildlife reserve.",
        image: "https://via.placeholder.com/400x300",
      },
      {
        id: 2,
        name: "Safari View Lodge",
        location: "Ranthambore, Sawai Madhopur",
        price: "$70/night",
        description: "Comfortable rooms with stunning views of the jungle.",
        image: "https://via.placeholder.com/400x300",
      },
      {
        id: 3,
        name: "Relaxation Retreat",
        location: "Ranthambore, Sawai Madhopur",
        price: "$60/night",
        description: "Affordable luxury with excellent amenities.",
        image: "https://via.placeholder.com/400x300",
      },
  ];

  return (
    <div className="bg-[#f7f7f6] min-h-screen">
     

      {/* Hero Section */}
      <section className="py-12 text-center">
        <h2 className="text-4xl font-bold text-gray-800">Find Your Budget Hotel</h2>
        <p className="text-gray-600 mt-4">Affordable stays tailored to your needs.</p>
        {/* Search Filters */}
        <div className="mt-8 flex justify-center gap-4">
          <input
            type="text"
            placeholder="Destination"
            className="border rounded-lg px-4 py-2 w-1/4"
          />
          <input
            type="date"
            className="border rounded-lg px-4 py-2 w-1/4"
          />
          <input
            type="number"
            placeholder="Guests"
            className="border rounded-lg px-4 py-2 w-1/4"
          />
          <button className="bg-orange-500 text-white px-6 py-2 rounded-full">Search</button>
        </div>
      </section>

      {/* Hotel List */}
      <section className="container mx-auto px-4 py-12">
        <h3 className="text-3xl font-bold text-gray-800 text-center mb-8">Available Hotels</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hotels.map((hotel) => (
            <div
              key={hotel.id}
              className="bg-white rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300"
            >
              <img src={hotel.image} alt={hotel.name} className="w-full h-40 object-cover" />
              <div className="p-4">
                <h4 className="text-xl font-bold text-gray-800">{hotel.name}</h4>
                <p className="text-gray-600">{hotel.location}</p>
                <p className="text-gray-600 mt-2">{hotel.description}</p>
                <p className="text-orange-500 font-bold mt-4">{hotel.price}</p>
                <button className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4 w-full">
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Hotel Booking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HotelBooking;
