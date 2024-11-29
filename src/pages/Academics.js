const Academics = () => {
    return (
      <div className="bg-gray-50">
        {/* Page Header */}
        <header className="bg-green-500 text-white py-24 text-center mt-10">
          <h1 className="text-4xl font-bold">Academics at BHPS</h1>
          <p className="mt-4 text-lg">
            Empowering students with knowledge, critical thinking, and a passion
            for lifelong learning.
          </p>
        </header>
  
        {/* Academic Programs Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Our Academic Programs</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Primary Education</h3>
                <p className="text-gray-700">
                  Focusing on foundational skills in literacy, numeracy, and
                  critical thinking in a nurturing environment.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">Middle School</h3>
                <p className="text-gray-700">
                  Building on the foundations with an emphasis on academics,
                  creativity, and self-expression.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6 hover:shadow-lg transition">
                <h3 className="text-xl font-semibold mb-4">High School</h3>
                <p className="text-gray-700">
                  Preparing students for higher education and careers through a
                  robust and diverse curriculum.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Curriculum Overview Section */}
        <section className="bg-gray-100 py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Curriculum Overview</h2>
            <p className="text-center text-gray-700 mb-8">
              Our curriculum is designed to foster holistic growth, combining
              academic rigor with extracurricular activities.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Science & Technology</h3>
                <p className="text-gray-700">
                  Hands-on learning in physics, chemistry, biology, and computer
                  science.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Mathematics</h3>
                <p className="text-gray-700">
                  Developing logical reasoning and problem-solving skills through
                  advanced mathematical concepts.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Languages</h3>
                <p className="text-gray-700">
                  Mastery in English, regional languages, and additional
                  international languages.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Arts & Humanities</h3>
                <p className="text-gray-700">
                  Encouraging creative expression and an understanding of history,
                  culture, and society.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Physical Education</h3>
                <p className="text-gray-700">
                  Promoting physical health, teamwork, and sportsmanship through
                  diverse activities.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-2">Electives</h3>
                <p className="text-gray-700">
                  A wide range of electives to cater to individual interests and
                  career aspirations.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Achievements Section */}
        <section className="py-12">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-center mb-8">Academic Achievements</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">Top State Ranks</h3>
                <p className="text-gray-700">
                  Our students consistently achieve top ranks in board
                  examinations.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">National Science Fair</h3>
                <p className="text-gray-700">
                  Winners of the prestigious National Science Fair for three
                  consecutive years.
                </p>
              </div>
              <div className="bg-white shadow-md rounded-lg p-6">
                <h3 className="text-xl font-semibold mb-4">International Olympiads</h3>
                <p className="text-gray-700">
                  Students have excelled in international math and science
                  olympiads.
                </p>
              </div>
            </div>
          </div>
        </section>
  
        {/* Call-to-Action Section */}
        <section className="bg-blue-500 text-white py-16 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Academic Journey</h2>
          <p className="mb-6 text-lg">
            Unlock your potential at BHPS with a world-class education and
            opportunities.
          </p>
          <button className="bg-white text-blue-500 font-semibold py-2 px-6 rounded hover:bg-gray-100 transition">
            Contact Us
          </button>
        </section>
      </div>
    );
  };
  
  export default Academics;
  