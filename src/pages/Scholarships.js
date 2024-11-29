const Scholarships = () => {
    return (
      <div className="bg-gray-50">
        <header className="bg-green-500 text-white py-24 text-center mt-10">
          <h1 className="text-4xl font-bold">Scholarships</h1>
          <p className="mt-4 text-lg">
            Rewarding academic excellence and supporting future leaders.
          </p>
        </header>
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Available Scholarships</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Merit-Based Scholarship</h3>
              <p className="text-gray-700">Awarded to top-performing students.</p>
            </div>
            <div className="bg-white shadow-md rounded-lg p-6">
              <h3 className="text-xl font-semibold mb-4">Need-Based Scholarship</h3>
              <p className="text-gray-700">
                Supporting students from economically weaker sections.
              </p>
            </div>
          </div>
        </section>
      </div>
    );
  };
  
  export default Scholarships;
  