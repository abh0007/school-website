import { useEffect, useState } from "react";

const About = () => {
  const [animate, setAnimate] = useState(false);

  useEffect(() => {
    // Trigger animations after the component mounts
    const timer = setTimeout(() => {
      setAnimate(true);
    }, 100); // Delay to ensure smooth animation
    return () => clearTimeout(timer); // Cleanup timer
  }, []);

  return (
    <div className="bg-gray-50">
      {/* Page Header */}
      <header className="bg-green-500 text-white py-24 text-center mt-10">
        <h1 className="text-4xl font-bold">About LBSSN</h1>
        <p className="mt-4 text-lg">
          Discover our journey, mission, and commitment to excellence in education.
        </p>
      </header>

      {/* Mission and Vision Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Mission & Vision</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div
              className={`bg-white shadow-md rounded-lg p-6 transition-all duration-700 ease-out transform ${
                animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Our Mission</h3>
              <p className="text-gray-700">
                At LBSSN, our mission is to empower students with knowledge, skills, and
                values to thrive in a dynamic and interconnected world. We focus on
                holistic development, fostering creativity, and nurturing a lifelong love
                for learning.
              </p>
            </div>
            <div
              className={`bg-white shadow-md rounded-lg p-6 transition-all duration-700 ease-out transform ${
                animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
              }`}
            >
              <h3 className="text-xl font-semibold mb-4">Our Vision</h3>
              <p className="text-gray-700">
                We envision a future where LBSSN students lead with innovation, compassion,
                and resilience, contributing meaningfully to their communities and beyond.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="bg-gray-100 py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our History</h2>
          <p className="text-center text-gray-700 mb-6">
            Established in 1995, LBSSN has grown from a small institution to a leading
            educational hub known for its academic rigor and innovative teaching methods.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {["1995", "2005", "2020"].map((year, index) => (
              <div
                key={year}
                className={`bg-white shadow-md rounded-lg p-6 transition-all duration-700 ease-out transform ${
                  animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-2">{year}</h3>
                <p className="text-gray-700">
                  {year === "1995"
                    ? "LBSSN was founded with a vision to provide quality education to students in the region."
                    : year === "2005"
                    ? "Expansion of facilities and introduction of modern teaching methodologies."
                    : "Recognized as one of the top schools in the state for academic excellence."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Core Values Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {["Excellence", "Integrity", "Innovation", "Community"].map((value, index) => (
              <div
                key={value}
                className={`bg-white shadow-md rounded-lg p-6 transition-all duration-700 ease-out transform ${
                  animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
                }`}
                style={{ transitionDelay: `${index * 200}ms` }}
              >
                <h3 className="text-xl font-semibold mb-4">{value}</h3>
                <p className="text-gray-700">
                  {value === "Excellence"
                    ? "Striving for the highest standards in academics, sports, and arts."
                    : value === "Integrity"
                    ? "Promoting honesty, fairness, and accountability in all endeavors."
                    : value === "Innovation"
                    ? "Encouraging creative thinking and problem-solving."
                    : "Building a supportive and inclusive school environment."}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="bg-green-500 text-white py-16 text-center">
        <h2 className="text-3xl font-bold mb-4">Want to Know More About LBSSN?</h2>
        <p className="mb-6 text-lg">
          Contact us today to learn more about our programs, faculty, and admissions
          process.
        </p>
        <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
          Contact Us
        </button>
      </section>
    </div>
  );
};

export default About;
