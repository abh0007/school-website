import React, { useState } from "react";

const Header = () => {
  const [dropdown, setDropdown] = useState({ achievements: false, events: false });
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle

  const toggleDropdown = (menu) => {
    setDropdown((prev) => ({ ...prev, [menu]: !prev[menu] }));
  };

  const closeDropdown = () => {
    setDropdown({ achievements: false, events: false });
  };

  const navigateTo = (path) => {
    window.location.href = path;
    setMenuOpen(false); // Close mobile menu after navigation
  };

  return (
    <header className="bg-yellow-300 text-black p-4 fixed w-full top-0 z-50 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <h1 className="text-2xl font-bold">LBSSN</h1>

        {/* Mobile Menu Button */}
        <button
          className="block md:hidden text-black text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </button>

        {/* Navigation */}
        <nav
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute md:static top-16 left-0 w-full md:w-auto bg-yellow-300 md:flex md:space-x-4 items-center shadow-md md:shadow-none`}
        >
          <ul className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 p-4 md:p-0">
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/")}>
                Home
              </button>
            </li>
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/about")}>
                About Us
              </button>
            </li>
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/academics")}>
                Academics
              </button>
            </li>
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/infrastructure")}>
                Infrastructure
              </button>
            </li>

            {/* Achievements Dropdown */}
            <li className="relative">
              <button
                className="hover:text-sky-500"
                onClick={() => toggleDropdown("achievements")}
              >
                Achievements
              </button>
              {dropdown.achievements && (
                <ul className="absolute bg-white text-black rounded shadow-md mt-2 z-10">
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/achievements/results");
                      }}
                    >
                      Results
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/achievements/scholarships");
                      }}
                    >
                      Scholarships
                    </button>
                  </li>
                  <li>
                    <button
                      className="block px-4 py-2 hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/achievements/toppers");
                      }}
                    >
                      Toppers
                    </button>
                  </li>
                </ul>
              )}
            </li>

            {/* Events Dropdown */}
            <li className="relative">
              <button
                className="hover:text-sky-500"
                onClick={() => toggleDropdown("events")}
              >
                Events
              </button>
              {dropdown.events && (
                <ul className="absolute bg-white text-black rounded shadow-md mt-2 z-10">
                  <li className="px-6 py-3 whitespace-nowrap">
                    <button
                      className="block hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/events/summercamp");
                      }}
                    >
                      Summer Camp
                    </button>
                  </li>
                  <li className="px-6 py-3 whitespace-nowrap">
                    <button
                      className="block hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/events/annualevents");
                      }}
                    >
                      Annual Events
                    </button>
                  </li>
                  <li className="px-6 py-3 whitespace-nowrap">
                    <button
                      className="block hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/events/sports");
                      }}
                    >
                      Sports
                    </button>
                  </li>
                  <li className="px-6 py-3 whitespace-nowrap">
                    <button
                      className="block hover:bg-gray-200 w-full text-left"
                      onClick={() => {
                        closeDropdown();
                        navigateTo("/events/excursion");
                      }}
                    >
                      Excursion
                    </button>
                  </li>
                </ul>
              )}
            </li>

            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/admissions")}>
                Admissions
              </button>
            </li>
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/gallery")}>
                Gallery
              </button>
            </li>
            <li>
              <button className="hover:text-sky-500" onClick={() => navigateTo("/contact")}>
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
