import React, {useState} from 'react';
import destinations from './destinations';
import PlanYourTrip from './PlanYourTripPage';


const SawaiMadhopurDestinations = () => {
  const [visiblity, setVisibility] = useState(false)

  const visibilityHandler = () => {
    setVisibility(true)
  }
  if(visiblity) return <PlanYourTrip setVisibility={setVisibility} />
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
          <button
            className="bg-orange-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-orange-600 transition duration-300"
            onClick={visibilityHandler}
          >
            Plan Your Trip Now
          </button>
        </div>
      </div>
    </section>
  );
};

export default SawaiMadhopurDestinations;

