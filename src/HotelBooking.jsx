import React from "react";

const HotelBooking = () => {
  const hotels = [
    {
      id: 1,
      name: "Hill Top Residency",
      location: "Ranthambore, Sawai Madhopur",
      price: "$50/night",
      description: "A cozy and affordable stay near the wildlife reserve.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
    {
      id: 2,
      name: "Safari View Lodge",
      location: "Ranthambore, Sawai Madhopur",
      price: "$70/night",
      description: "Comfortable rooms with stunning views of the jungle.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
    {
      id: 3,
      name: "Relaxation Retreat",
      location: "Ranthambore, Sawai Madhopur",
      price: "$60/night",
      description: "Affordable luxury with excellent amenities.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
    {
      id: 1,
      name: "Hilltop Budget Inn",
      location: "Ranthambore, Sawai Madhopur",
      price: "$50/night",
      description: "A cozy and affordable stay near the wildlife reserve.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
    {
      id: 2,
      name: "Safari View Lodge",
      location: "Ranthambore, Sawai Madhopur",
      price: "$70/night",
      description: "Comfortable rooms with stunning views of the jungle.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
    {
      id: 3,
      name: "Relaxation Retreat",
      location: "Ranthambore, Sawai Madhopur",
      price: "$60/night",
      description: "Affordable luxury with excellent amenities.",
      image: "/images/htop.jpg",
      link: "https://www.booking.com/hotel/in/hill-top-residency.en-gb.html?aid=2405329&sid=2c6908fb3bac4b0853d320d06b8eaef2&age=0&all_sr_blocks=1051314701_377851330_2_42_0&checkin=2024-11-30&checkout=2024-12-01&dest_id=-2110654&dest_type=city&dist=0&group_adults=2&group_children=0&hapos=1&highlighted_blocks=1051314701_377851330_2_42_0&hpos=1&matching_block_id=1051314701_377851330_2_42_0&no_rooms=1&req_adults=2&req_children=0&room1=A%2CA&sb_price_type=total&sr_order=popularity&sr_pri_blocks=1051314701_377851330_2_42_0__120000&srepoch=1732773737&srpvid=d5032a69210f0093&type=total&ucfs=1&", // Unique link for this hotel
    },
  ];

  return (
    <div className="bg-[#f7f7f6] min-h-screen">
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
                <a
                  href={hotel.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-orange-500 text-white px-4 py-2 rounded-full mt-4 w-full inline-block text-center"
                >
                  Book Now
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      <footer className="bg-white py-8">
        <div className="container mx-auto text-center">
          <p className="text-gray-600">© 2024 Hotel Booking. All Rights Reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default HotelBooking;

