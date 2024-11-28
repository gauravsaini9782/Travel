import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-[#FBFBEC] py-12">
      <div className="container mx-auto px-4 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Left Column - Branding */}
          <div className="text-center md:text-left">
            <h2 className="text-3xl font-semibold text-gray-800 mb-4">Ranthambore Tour</h2>
            <p className="text-gray-600 mb-4">
              Your ultimate destination for a seamless and unforgettable adventure.
            </p>
            <p className="text-gray-600">© 2024 Ranthambore Tour. All Rights Reserved.</p>
          </div>

          {/* Center Column - Quick Links */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#home"
                  className="text-gray-600 hover:text-orange-500 transition duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#services"
                  className="text-gray-600 hover:text-orange-500 transition duration-300"
                >
                  Services
                </a>
              </li>
              <li>
                <a
                  href="#destinations"
                  className="text-gray-600 hover:text-orange-500 transition duration-300"
                >
                  Destinations
                </a>
              </li>
              <li>
                <a
                  href="#about"
                  className="text-gray-600 hover:text-orange-500 transition duration-300"
                >
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="#contact"
                  className="text-gray-600 hover:text-orange-500 transition duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Right Column - Contact & Social */}
          <div className="text-center md:text-left">
            <h3 className="text-xl font-semibold text-gray-800 mb-4">Contact & Follow Us</h3>
            <p className="text-gray-600 mb-4">
              For inquiries, reach us on WhatsApp or email:
            </p>
            <a
              href="https://wa.me/9782312413"
              className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center justify-center md:justify-start"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/whatsapp.png"
                alt="WhatsApp"
                className="w-6 h-6 mr-2"
              />
              WhatsApp Us
            </a>
            <a
              href="info.hilltopresidency@gmail.com"
              className="text-gray-600 hover:text-orange-500 transition duration-300 flex items-center justify-center md:justify-start mt-4"
            >
              <img
                src="https://img.icons8.com/ios-filled/50/000000/email.png"
                alt="Email"
                className="w-6 h-6 mr-2"
              />
              Email Us
            </a>
          </div>
        </div>

        {/* Bottom Section - Terms & Privacy */}
        <div className="mt-8 text-center">
          <ul className="flex justify-center space-x-6">
            <li>
              <a
                href="/terms"
                className="text-gray-600 hover:text-orange-500 transition duration-300"
              >
                Terms of Service
              </a>
            </li>
            <li>
              <a
                href="/privacy"
                className="text-gray-600 hover:text-orange-500 transition duration-300"
              >
                Privacy Policy
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
