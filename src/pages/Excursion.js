// src/pages/Excursion.js
import React from 'react';

const Excursion = () => {
  return (
    <div className="container mx-auto p-8 mt-10">
      <h2 className="text-4xl font-bold mb-6">Excursions at BHPS</h2>
      <p className="mb-6">
        BHPS believes in providing holistic learning experiences. Our excursion program allows students to explore new places, 
        immerse themselves in nature, and engage in cultural activities outside the classroom.
      </p>

      <h3 className="text-3xl font-semibold mb-4">Recent Excursions:</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>Visit to the National Science Museum</li>
        <li>Historical site tour: Exploring the ruins of an ancient fort</li>
        <li>Cultural Exchange Program: Trip to a neighboring state</li>
        <li>Nature Trail: Camping and hiking in the mountains</li>
        <li>Beach Excursion: Educational trip to the coastline</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Upcoming Excursion: Nature Trail</h3>
      <p>
        Our upcoming excursion to the lush green hills of Kodaikanal is scheduled for the second week of November. 
        This excursion aims to give students a hands-on experience of nature through hiking, bird watching, and environmental education.
      </p>

      <h4 className="text-2xl font-semibold mt-6">Excursion Details:</h4>
      <ul className="list-none pl-6">
        <li>Location: Kodaikanal Hills</li>
        <li>Duration: 3 Days, 2 Nights</li>
        <li>Dates: November 12-14</li>
        <li>Price: ₹5,000 (Includes travel, food, and accommodation)</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Excursion Gallery:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="path-to-your-image.jpg" alt="Excursion Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Excursion Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Excursion Event" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default Excursion;
