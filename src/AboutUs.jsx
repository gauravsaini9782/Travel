import React from 'react';

const AboutUs = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-4 md:px-8">
        {/* Section 1: Company Introduction */}
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">About Us</h2>
          <p className="text-lg text-gray-600">
            We are a dedicated team passionate about delivering exceptional services to our customers.
            Our vision is to create memorable experiences that help you discover and enjoy life’s best moments.
          </p>
        </div>

        {/* Section 2: Mission */}
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Our Mission</h3>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Our mission is to bring unique experiences to travelers, offering them a chance to explore new destinations with ease and comfort. We are committed to providing high-quality services with a customer-first approach.
          </p>
        </div>

        {/* Section 3: Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-16">
          <div className="text-center">
          <img
                src="/images/custo3.png"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Customer Focused</h4>
            <p className="text-gray-600">
              We believe in putting our customers first, delivering services that meet their needs and exceed expectations.
            </p>
          </div>
          <div className="text-center">
          <img
                src="/images/integrity.png"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Integrity</h4>
            <p className="text-gray-600">
              Integrity is at the core of everything we do. We value transparency and honesty in our operations.
            </p>
          </div>
          <div className="text-center">
          <img
                src="/images/sustainable.png"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
            <h4 className="text-xl font-semibold text-gray-800 mb-4">Sustainability</h4>
            <p className="text-gray-600">
              We are dedicated to ensuring that our services and operations are sustainable and benefit the community.
            </p>
          </div>
        </div>

        {/* Section 4: Our Team
        <div className="text-center mb-16">
          <h3 className="text-2xl font-semibold text-gray-800 mb-4">Meet Our Team</h3>
          <div className="flex flex-wrap justify-center gap-8">
            <div className="w-60 text-center">
              <img
                src="/images/team-member-1.jpg"
                alt="Team Member 1"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
              <h5 className="font-semibold text-lg text-gray-800">John Doe</h5>
              <p className="text-gray-600">CEO & Founder</p>
            </div>
            <div className="w-60 text-center">
              <img
                src="/images/team-member-2.jpg"
                alt="Team Member 2"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
              <h5 className="font-semibold text-lg text-gray-800">Jane Smith</h5>
              <p className="text-gray-600">Marketing Director</p>
            </div>
            <div className="w-60 text-center">
              <img
                src="/images/team-member-3.jpg"
                alt="Team Member 3"
                className="w-full h-60 object-cover rounded-full mb-4"
              />
              <h5 className="font-semibold text-lg text-gray-800">Alex Johnson</h5>
              <p className="text-gray-600">Operations Manager</p>
            </div>
          </div>
        </div> */}

        {/* Action Buttons */}
        <div className="flex flex-col md:flex-row md:space-x-4 space-y-4 md:space-y-0 w-full md:w-auto justify-center">
          {/* Contact Us */}
          <a
            href="https://wa.me/9782312413?text=Hi%20there!%20I'm%20interested%20in%20learning%20more%20about%20your%20Ranthambore%20services."
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-full text-lg shadow-md transition duration-300 w-full md:w-auto"
          >
            <img
              src="https://img.icons8.com/color/48/whatsapp.png"
              alt="WhatsApp Icon"
              className="w-6 h-6 mr-2"
            />
            Contact Us
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
