const Courses = () => {
    return (
      <div className="bg-gray-50">
        {/* Page Header */}
        <header className="bg-blue-500 text-white py-16 text-center">
          <h1 className="text-4xl font-bold">Our Courses</h1>
          <p className="mt-4 text-lg">
            Explore the wide variety of courses offered at BHPS to nurture
            excellence in every student.
          </p>
        </header>
  
        {/* Courses Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Featured Courses</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {/* Course 1 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
                <p className="text-gray-700">
                  Build strong foundations in arithmetic, algebra, geometry, and
                  advanced problem-solving techniques.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
  
              {/* Course 2 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Science</h3>
                <p className="text-gray-700">
                  Engage in the exciting world of physics, chemistry, and biology
                  through experiments and theories.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
  
              {/* Course 3 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Arts & Crafts</h3>
                <p className="text-gray-700">
                  Encourage creativity and artistic expression through various
                  mediums and techniques.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
  
              {/* Course 4 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Computer Science</h3>
                <p className="text-gray-700">
                  Learn programming, web development, and other IT skills to
                  excel in the digital age.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
  
              {/* Course 5 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Physical Education</h3>
                <p className="text-gray-700">
                  Develop strength, discipline, and sportsmanship through a range
                  of physical activities.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
  
              {/* Course 6 */}
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-2">Music & Dance</h3>
                <p className="text-gray-700">
                  Discover the joy of performing arts through lessons in music,
                  dance, and theater.
                </p>
                <button className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition">
                  Learn More
                </button>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action */}
        <section className="bg-blue-500 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Ready to Join BHPS?</h2>
          <p className="mb-6 text-lg">
            Take the first step towards a brighter future by enrolling in one of
            our courses today!
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
            Enroll Now
          </button>
        </section>
      </div>
    );
  };
  
  export default Courses;
  