import React, { useState } from 'react';

const PlanYourTrip = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleButtonClick = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <section className="bg-white py-16">
      {/* CTA Button */}
      <div className="text-center">
        <button
          onClick={handleButtonClick}
          className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
        >
          Plan Your Trip Now
        </button>
      </div>

      {/* Modal Form */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-8 w-96 shadow-lg">
            <h3 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Book Your Trip</h3>
            <form>
              <div className="space-y-4">
                {/* Name Field */}
                <div>
                  <label htmlFor="name" className="text-sm text-gray-600">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    placeholder="Enter your full name"
                    className="w-full p-3 border rounded-lg text-gray-800"
                  />
                </div>
                {/* Email Field */}
                <div>
                  <label htmlFor="email" className="text-sm text-gray-600">Email</label>
                  <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border rounded-lg text-gray-800"
                  />
                </div>
                {/* Contact Number */}
                <div>
                  <label htmlFor="contact" className="text-sm text-gray-600">Contact Number</label>
                  <input
                    type="tel"
                    id="contact"
                    placeholder="Enter your contact number"
                    className="w-full p-3 border rounded-lg text-gray-800"
                  />
                </div>
                {/* Date Field */}
                <div>
                  <label htmlFor="date" className="text-sm text-gray-600">Preferred Date</label>
                  <input
                    type="date"
                    id="date"
                    className="w-full p-3 border rounded-lg text-gray-800"
                  />
                </div>
                {/* Submit Button */}
                <div className="text-center mt-4">
                  <button
                    type="submit"
                    className="bg-orange-500 text-white py-3 px-6 rounded-lg shadow-lg hover:bg-orange-600 transition duration-300"
                  >
                    Submit
                  </button>
                </div>
              </div>
            </form>

            {/* Close Button */}
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-800 hover:text-gray-600"
            >
              &times;
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default PlanYourTrip;
