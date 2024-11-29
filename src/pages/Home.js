import { Link } from "react-router-dom";
import { useEffect } from "react";

const navigateTo = (path) => {
  window.location.href = path;
};

const Home = () => {
  useEffect(() => {
    const elements = document.querySelectorAll(".fade-in");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("show");
          }
        });
      },
      { threshold: 0.1 }
    );

    elements.forEach((el) => observer.observe(el));
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <section className="bg-green-500 text-white py-16 h-1/4 flex items-center justify-center mt-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl font-bold mb-4 fade-in">Welcome to BHPS School</h1>
          <p className="text-lg mb-6 fade-in">
            Shaping young minds with quality education and holistic development.
          </p>
          <button className="bg-white text-black font-semibold py-2 px-6 rounded hover:bg-gray-100 transition fade-in">
            Learn More
          </button>
        </div>
      </section>

      {/* About Section */}
      <section className="py-12">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6 fade-in">About Our School</h2>
          <p className="text-gray-700 mb-6 fade-in">
            BHPS School has been a leader in education for over 25 years,
            dedicated to nurturing young minds with an innovative curriculum and
            a focus on holistic growth.
          </p>
          <button className="bg-green-500 text-white py-2 px-6 rounded hover:bg-yellow-300 transition fade-in">
            Read More
          </button>
        </div>
      </section>

      {/* Featured Courses */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8 fade-in">Featured Courses</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl fade-in">
              <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
              <p className="text-gray-700">
                Build strong problem-solving skills and logical thinking.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl fade-in">
              <h3 className="text-xl font-semibold mb-2">Science</h3>
              <p className="text-gray-700">
                Explore the wonders of physics, chemistry, and biology.
              </p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6 transition transform hover:scale-105 hover:shadow-xl fade-in">
              <h3 className="text-xl font-semibold mb-2">Arts</h3>
              <p className="text-gray-700">
                Develop creativity and self-expression through various art
                forms.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-green-500 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 fade-in">Join Us Today</h2>
          <p className="text-lg mb-6 fade-in">
            Enroll your child in BHPS School and provide them with a bright
            future.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition fade-in" onClick={() => navigateTo("/contact")}>
            <Link to="/contact" className="hover:underline">
              Contact Us
            </Link>
          </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
