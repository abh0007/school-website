const Infrastructure = () => {
    return (
      <div className="bg-gray-50">
        {/* Page Header */}
        <header className="bg-green-500 text-white py-24 text-center mt-10">
          <h1 className="text-4xl font-bold">Our Infrastructure</h1>
          <p className="mt-4 text-lg">
            State-of-the-art facilities to support holistic learning and growth.
          </p>
        </header>
  
        {/* Facilities Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Facilities</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Facility 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Modern Classrooms</h3>
                <p className="text-gray-700">
                  Well-ventilated and tech-enabled classrooms designed for
                  interactive learning.
                </p>
              </div>
              {/* Facility 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Science Laboratories</h3>
                <p className="text-gray-700">
                  Fully equipped labs for physics, chemistry, and biology to
                  support hands-on experiments.
                </p>
              </div>
              {/* Facility 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Library</h3>
                <p className="text-gray-700">
                  A vast collection of books, journals, and digital resources to
                  inspire learning.
                </p>
              </div>
              {/* Facility 4 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Computer Labs</h3>
                <p className="text-gray-700">
                  Advanced computer labs with high-speed internet and modern
                  software for IT skills.
                </p>
              </div>
              {/* Facility 5 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Sports Facilities</h3>
                <p className="text-gray-700">
                  Spacious grounds for football, cricket, athletics, and indoor
                  games.
                </p>
              </div>
              {/* Facility 6 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Auditorium</h3>
                <p className="text-gray-700">
                  A modern auditorium for school events, seminars, and cultural
                  activities.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Gallery Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Photo Gallery</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              <img
                src="https://via.placeholder.com/300"
                alt="Classroom"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Laboratory"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Library"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Computer Lab"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Sports Ground"
                className="rounded-lg shadow-md"
              />
              <img
                src="https://via.placeholder.com/300"
                alt="Auditorium"
                className="rounded-lg shadow-md"
              />
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-blue-500 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Visit BHPS</h2>
          <p className="mb-6 text-lg">
            Experience our world-class infrastructure firsthand. Schedule a visit
            today!
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </section>
      </div>
    );
  };
  
  export default Infrastructure;
  