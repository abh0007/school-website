import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-white py-8">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4">
        {/* Quick Links Section */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Quick Links</h3>
          <ul className="space-y-2">
            <li>
              <Link to="/" className="hover:underline">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about" className="hover:underline">
                About Us
              </Link>
            </li>
            <li>
              <Link to="/academics" className="hover:underline">
                Academics
              </Link>
            </li>
            <li>
              <Link to="/infrastructure" className="hover:underline">
                Infrastructure
              </Link>
            </li>
            <li>
              <Link to="/achievements" className="hover:underline">
                Achievements
              </Link>
            </li>
            <li>
              <Link to="/events" className="hover:underline">
                Events
              </Link>
            </li>
            <li>
              <Link to="/admissions" className="hover:underline">
                Admissions
              </Link>
            </li>
            <li>
              <Link to="/gallery" className="hover:underline">
                Gallery
              </Link>
            </li>
            <li>
              <Link to="/contact-us" className="hover:underline">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>

        {/* Contact Information */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Contact Information</h3>
          <p className="mb-2">Lal Bahadur Shastri Siksha Niketan</p>
          <p className="mb-2">Rajeev Colony, Pilibhit</p>
          <p className="mb-2">Phone: +91 12345678</p>
          <p>Email: info@lbssn.edu.in</p>
        </div>

        {/* Social Media Links */}
        <div>
          <h3 className="text-lg sm:text-xl font-bold mb-4">Follow Us</h3>
          <ul className="space-y-2">
            <li>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Facebook
              </a>
            </li>
            <li>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Twitter
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                Instagram
              </a>
            </li>
            <li>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                LinkedIn
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Copyright Section */}
      <div className="mt-8 text-center border-t border-gray-600 pt-4 px-4">
        <p className="text-sm sm:text-base">
          &copy; {new Date().getFullYear()} LBSSN. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
