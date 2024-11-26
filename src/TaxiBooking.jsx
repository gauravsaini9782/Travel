import React, { useState } from "react";

const TaxiBooking = () => {
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    pickup: "",
    drop: "",
    date: "",
    time: "",
    taxiType: "sedan",
    passengers: "",
    contactNumber: "",
  });

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.contactNumber.trim()) {
      setIsPopupVisible(true);
    } else {
      alert("Please provide your contact number.");
    }
  };

  const closePopup = () => {
    setIsPopupVisible(false);
  };

  return (
    <section className="bg-FBFBEC py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Header Section */}
        <div className="text-center mb-12">
          <p className="text-gray-600 text-sm uppercase tracking-wide">
            Hassle-Free Rides
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Book Your Taxi Now!
          </h2>
          <p className="text-gray-600 mt-4">
            Reliable, affordable, and always on time.
          </p>
        </div>

        {/* Booking Form */}
        <div className="bg-white shadow-lg rounded-lg p-6 md:p-8">
          <h3 className="text-xl font-semibold text-gray-800 mb-6 text-center">
            Taxi Booking Form
          </h3>
          <form className="space-y-6" onSubmit={handleSubmit}>
            {/* Pickup Location */}
            <div>
              <label
                htmlFor="pickup"
                className="block text-sm font-medium text-gray-600"
              >
                Pickup Location
              </label>
              <input
                type="text"
                id="pickup"
                placeholder="Enter pickup location"
                className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                value={formData.pickup}
                onChange={handleInputChange}
              />
            </div>
            {/* Drop Location */}
            <div>
              <label
                htmlFor="drop"
                className="block text-sm font-medium text-gray-600"
              >
                Drop Location
              </label>
              <input
                type="text"
                id="drop"
                placeholder="Enter drop location"
                className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                value={formData.drop}
                onChange={handleInputChange}
              />
            </div>
            {/* Date and Time */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label
                  htmlFor="date"
                  className="block text-sm font-medium text-gray-600"
                >
                  Date
                </label>
                <input
                  type="date"
                  id="date"
                  className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                  value={formData.date}
                  onChange={handleInputChange}
                />
              </div>
              <div>
                <label
                  htmlFor="time"
                  className="block text-sm font-medium text-gray-600"
                >
                  Time
                </label>
                <input
                  type="time"
                  id="time"
                  className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                  value={formData.time}
                  onChange={handleInputChange}
                />
              </div>
            </div>
            {/* Taxi Type */}
            <div>
              <label
                htmlFor="taxiType"
                className="block text-sm font-medium text-gray-600"
              >
                Taxi Type
              </label>
              <select
                id="taxiType"
                className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                value={formData.taxiType}
                onChange={handleInputChange}
              >
                <option value="sedan">Sedan</option>
                <option value="suv">SUV</option>
                <option value="minibus">Minibus</option>
              </select>
            </div>
            {/* Passenger Count */}
            <div>
              <label
                htmlFor="passengers"
                className="block text-sm font-medium text-gray-600"
              >
                Number of Passengers
              </label>
              <input
                type="number"
                id="passengers"
                min="1"
                max="20"
                placeholder="Enter number of passengers"
                className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                value={formData.passengers}
                onChange={handleInputChange}
              />
            </div>
            {/* Contact Number */}
            <div>
              <label
                htmlFor="contactNumber"
                className="block text-sm font-medium text-gray-600"
              >
                Your Contact Number
              </label>
              <input
                type="tel"
                id="contactNumber"
                placeholder="Enter your contact number"
                className="w-full mt-2 p-3 border rounded-lg text-gray-800"
                value={formData.contactNumber}
                onChange={handleInputChange}
              />
            </div>
            {/* Submit and Call Us Buttons */}
            <div className="flex justify-center gap-4">
              <button
                type="submit"
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Book Now
              </button>
              <a
                href="tel:9257974891"
                className="bg-gray-800 hover:bg-gray-900 text-white font-semibold py-3 px-6 rounded-lg transition duration-300"
              >
                Call Us Directly
              </a>
            </div>
          </form>
        </div>

        {/* Thank You Popup */}
        {isPopupVisible && (
          <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg p-6 text-center shadow-lg">
              <h4 className="text-xl font-bold text-gray-800 mb-4">
                Thank You!
              </h4>
              <p className="text-gray-600 mb-6">
                We’ve received your booking request. Our team will contact you
                shortly.
              </p>
              <button
                onClick={closePopup}
                className="bg-orange-500 hover:bg-orange-600 text-white font-semibold py-2 px-4 rounded-lg transition duration-300"
              >
                Close
              </button>
            </div>
          </div>
        )}
      </div>
      {/* Illustration Section */}
      <div className="mt-12 text-center">
        <img
          src="/images/taxi 2.png"
          alt="Taxi Booking Illustration"
          className="mx-auto max-w-full md:max-w-screen-md rounded-lg"
        />
        <p className="text-gray-600 mt-4 text-sm italic">
          Travel comfortably and affordably with our taxi services.
        </p>
      </div>
    </section>
  );
};

export default TaxiBooking;

