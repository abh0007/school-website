// src/pages/Gallery.js
import React from 'react';

const Gallery = () => {
  return (
    <div className="container mx-auto p-8 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center">Gallery</h2>
      <p className="text-center mb-6">
        Explore the various moments captured at BHPS, showcasing our school events, activities, and memories from the school year.
      </p>

      {/* Grid of Images */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {/* Image 1 */}
        <div className="relative">
          <img
            src="path-to-image-1.jpg" // Replace with actual image URL
            alt="Event 1"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Sports Day</p>
          </div>
        </div>

        {/* Image 2 */}
        <div className="relative">
          <img
            src="path-to-image-2.jpg" // Replace with actual image URL
            alt="Event 2"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Cultural Fest</p>
          </div>
        </div>

        {/* Image 3 */}
        <div className="relative">
          <img
            src="path-to-image-3.jpg" // Replace with actual image URL
            alt="Event 3"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Annual Day</p>
          </div>
        </div>

        {/* Image 4 */}
        <div className="relative">
          <img
            src="path-to-image-4.jpg" // Replace with actual image URL
            alt="Event 4"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Field Trip</p>
          </div>
        </div>

        {/* Image 5 */}
        <div className="relative">
          <img
            src="path-to-image-5.jpg" // Replace with actual image URL
            alt="Event 5"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Classroom Activities</p>
          </div>
        </div>

        {/* Image 6 */}
        <div className="relative">
          <img
            src="path-to-image-6.jpg" // Replace with actual image URL
            alt="Event 6"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Science Exhibition</p>
          </div>
        </div>

        {/* Image 7 */}
        <div className="relative">
          <img
            src="path-to-image-7.jpg" // Replace with actual image URL
            alt="Event 7"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Sports Championship</p>
          </div>
        </div>

        {/* Image 8 */}
        <div className="relative">
          <img
            src="path-to-image-8.jpg" // Replace with actual image URL
            alt="Event 8"
            className="w-full h-64 object-cover rounded-lg shadow-lg"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-lg"></div>
          <div className="absolute inset-0 flex items-center justify-center text-white opacity-0 hover:opacity-100 transition-opacity duration-300">
            <p className="text-xl font-bold">Music Concert</p>
          </div>
        </div>
      </div>

      <div className="text-center mt-8">
        <button className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-yellow-300 transition duration-300">
          View More
        </button>
      </div>
    </div>
  );
};

export default Gallery;
