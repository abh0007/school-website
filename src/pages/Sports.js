// src/pages/Sports.js
import React from 'react';

const Sports = () => {
  return (
    <div className="container mx-auto p-8 mt-10">
      <h2 className="text-4xl font-bold mb-6">Sports at LBSSN</h2>
      <p className="mb-6">
        Sports play an important role in the development of our students at LBSSN. We believe in nurturing physical 
        fitness, teamwork, and a competitive spirit through various sporting activities throughout the year.
      </p>

      <h3 className="text-3xl font-semibold mb-4">Featured Sports:</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>Track and Field: Sprinting, long jump, high jump, etc.</li>
        <li>Football: Inter-house and inter-school football tournaments</li>
        <li>Cricket: Friendly matches and annual cricket championship</li>
        <li>Basketball: School league matches and tournaments</li>
        <li>Swimming: Annual swimming gala</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Sports Day Highlights:</h3>
      <p>
        Every year, LBSSN celebrates its annual Sports Day, where students compete in track and field events, relays,
        and team sports. The event is filled with energy and school spirit as students cheer for their teams.
      </p>

      <h4 className="text-2xl font-semibold mt-6">Date and Time:</h4>
      <p className="mb-6">
        Date: March 25th, 2024
        <br />
        Time: 8:00 AM - 4:00 PM
        <br />
        Location: School Sports Ground
      </p>

      <h3 className="text-3xl font-semibold mb-4">Event Gallery:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="path-to-your-image.jpg" alt="Sports Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Sports Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Sports Event" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Sports;
