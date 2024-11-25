import React, { useState } from "react";

const Header = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileDropdownOpen, setIsMobileDropdownOpen] = useState(false);

  const handleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const handleMobileDropdown = () => {
    setIsMobileDropdownOpen(!isMobileDropdownOpen);
  };

  return (
    <header className="bg-[#FBFBEC] text-black relative z-[20]"> {/* Ensure header is above hero */}
      <div className="container mx-auto flex items-center justify-between p-4">
        {/* Logo */}
        <div className="flex items-center space-x-4">
          <img
            src="your-logo-url.png"
            alt="Logo"
            className="h-8 w-8 object-contain"
          />
          <span className="font-bold text-lg">Your Brand</span>
        </div>

        {/* Navigation */}
        <nav className="hidden md:flex space-x-6">
          <a href="/" className="hover:text-orange-500 transition">
            Home
          </a>
          <div className="relative">
            {/* Services with Dropdown */}
            <button
              className="flex items-center hover:text-orange-500 transition"
              onClick={handleDropdown}
            >
              Services
              <span className="ml-1">&#9662;</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-40 bg-white text-black shadow-md rounded-md z-[30]"> {/* Ensure dropdown is above */}
                <a
                  href="/hotel-booking"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Hotel Booking
                </a>
                <a
                  href="/safari-booking"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Safari Booking
                </a>
                <a
                  href="/taxi-booking"
                  className="block px-4 py-2 hover:bg-gray-100"
                >
                  Taxi Booking
                </a>
              </div>
            )}
          </div>
          <a href="/destinations" className="hover:text-orange-500 transition">
            Destinations
          </a>
          <a href="/about-us" className="hover:text-orange-500 transition">
            About Us
          </a>
        </nav>

        {/* Explore Packages Button - Desktop Only */}
        <a
          href="/explore-packages"
          className="hidden md:block bg-orange-500 hover:bg-orange-600 transition text-white px-4 py-2 rounded-full"
        >
          Explore Packages
        </a>

        {/* Mobile Menu */}
        <div className="md:hidden relative">
          <button
            className="text-black hover:text-orange-500"
            onClick={handleMobileMenu}
          >
            ☰
          </button>
          {isMobileMenuOpen && (
            <div className="absolute right-0 mt-4 w-48 bg-white text-black shadow-lg rounded-lg z-[30]">
              <a href="/" className="block px-4 py-2 hover:bg-gray-100">
                Home
              </a>
              <div className="relative">
                <button
                  className="w-full text-left px-4 py-2 hover:bg-gray-100 flex items-center justify-between"
                  onClick={handleMobileDropdown}
                >
                  Services
                  <span className="ml-1">&#9662;</span>
                </button>
                {isMobileDropdownOpen && (
                  <div className="pl-4">
                    <a
                      href="/hotel-booking"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Hotel Booking
                    </a>
                    <a
                      href="/safari-booking"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Safari Booking
                    </a>
                    <a
                      href="/taxi-booking"
                      className="block px-4 py-2 hover:bg-gray-100"
                    >
                      Taxi Booking
                    </a>
                  </div>
                )}
              </div>
              <a
                href="/destinations"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                Destinations
              </a>
              <a
                href="/about-us"
                className="block px-4 py-2 hover:bg-gray-100"
              >
                About Us
              </a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;

