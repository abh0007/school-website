// src/pages/AnnualEvents.js
import React from 'react';

const AnnualEvents = () => {
  return (
    <div className="container mx-auto p-8 mt-10">
      <h2 className="text-4xl font-bold mb-6">Annual Events at BHPS</h2>
      <p className="mb-6">
        BHPS hosts a variety of exciting annual events that foster school spirit, showcase student talent, and build a
        sense of community. From cultural performances to academic competitions, these events are highlights of the school year.
      </p>

      <h3 className="text-3xl font-semibold mb-4">Major Annual Events:</h3>
      <ul className="list-disc pl-8 mb-6">
        <li>Annual Science Fair: Explore innovative projects and experiments</li>
        <li>Cultural Festival: Dance, music, and drama performances</li>
        <li>Sports Meet: Inter-house athletic competition</li>
        <li>Literary Fest: Spelling bee, poetry recitations, and debates</li>
        <li>School Annual Day: Grand celebration of the year's achievements</li>
      </ul>

      <h3 className="text-3xl font-semibold mb-4">Upcoming Event: Cultural Festival</h3>
      <p className="mb-6">
        This year’s Cultural Festival will be held in December, featuring performances from students in drama, music, 
        and dance. There will be a special showcase of traditional and contemporary cultural performances.
      </p>
      <div className="mb-6">
        <h4 className="text-2xl font-semibold">Event Details:</h4>
        <ul className="list-none pl-6">
          <li>Dates: December 10-12</li>
          <li>Time: 6:00 PM onwards</li>
          <li>Location: School Auditorium</li>
        </ul>
      </div>

      <h3 className="text-3xl font-semibold mb-4">Event Gallery:</h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <img src="path-to-your-image.jpg" alt="Annual Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Annual Event" className="w-full h-64 object-cover rounded-lg" />
        <img src="path-to-your-image.jpg" alt="Annual Event" className="w-full h-64 object-cover rounded-lg" />
      </div>
    </div>
  );
};

export default AnnualEvents;
