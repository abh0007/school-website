// src/pages/SummerCamp.js
import React from 'react';

const SummerCamp = () => {
  return (
    <div className="container mx-auto p-8 mt-10">
      <h2 className="text-4xl font-bold mb-6">Summer Camp at BHPS</h2>
      <p className="mb-6">
        BHPS Summer Camp offers a diverse set of activities designed to engage, challenge, and inspire students of all ages.
        Our summer camp focuses on fun-filled activities that promote physical fitness, creativity, and teamwork.
      </p>
      
      <h3 className="text-3xl font-semibold mb-4">Key Activities:</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>Outdoor Adventures: Hiking, treasure hunts, nature walks</li>
        <li>Creative Workshops: Painting, sculpture, and pottery</li>
        <li>Sports Activities: Swimming, soccer, basketball</li>
        <li>Drama & Dance: Theater performance and dance competitions</li>
        <li>STEM Activities: Building robots, coding workshops</li>
      </ul>
      
      <h3 className="text-3xl font-semibold mb-4">Schedule:</h3>
      <table className="table-auto w-full mb-6 border-collapse border border-gray-200">
        <thead>
          <tr className="bg-green-500 text-white">
            <th className="py-2 px-4">Day</th>
            <th className="py-2 px-4">Activity</th>
            <th className="py-2 px-4">Time</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="py-2 px-4">Monday</td>
            <td className="py-2 px-4">Outdoor Adventure: Nature Walk</td>
            <td className="py-2 px-4">9:00 AM - 12:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Tuesday</td>
            <td className="py-2 px-4">Creative Workshop: Painting</td>
            <td className="py-2 px-4">1:00 PM - 3:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Wednesday</td>
            <td className="py-2 px-4">Sports: Soccer</td>
            <td className="py-2 px-4">9:00 AM - 12:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Thursday</td>
            <td className="py-2 px-4">STEM Activity: Build a Robot</td>
            <td className="py-2 px-4">1:00 PM - 3:00 PM</td>
          </tr>
          <tr>
            <td className="py-2 px-4">Friday</td>
            <td className="py-2 px-4">Drama & Dance Performance</td>
            <td className="py-2 px-4">4:00 PM - 6:00 PM</td>
          </tr>
        </tbody>
      </table>

      <h3 className="text-3xl font-semibold mb-4">Photos from Previous Camps:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
        <img src="path-to-your-image.jpg" alt="Summer Camp Activity" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Summer Camp Activity" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Summer Camp Activity" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default SummerCamp;
