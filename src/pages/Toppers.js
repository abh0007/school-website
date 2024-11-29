const Toppers = () => {
    return (
      <div className="bg-gray-50">
        <header className="bg-green-500 text-white py-24 text-center m-10 padding-0">
          <h1 className="text-4xl font-bold">Toppers</h1>
          <p className="mt-4 text-lg">
            Honoring our brightest minds who have set new benchmarks.
          </p>
        </header>
        <section className="py-12 container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-8">Top Achievers</h2>
          <ul className="space-y-4 text-gray-700">
            <li>1. John Doe - Science Stream (98.5%)</li>
            <li>2. Jane Smith - Commerce Stream (96.8%)</li>
            <li>3. Michael Lee - Humanities Stream (95.2%)</li>
          </ul>
        </section>
      </div>
    );
  };
  
  export default Toppers;
  