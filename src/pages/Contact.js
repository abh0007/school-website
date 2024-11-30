import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
    date: null,
    timeSlot: "",
    timeZone: "UTC", // Default to UTC
  });

  const [status, setStatus] = useState("");

  const timeZones = ["UTC", "GMT", "IST", "EST", "PST", "CST"];

  // Generate 30-minute time slots for a working day (9:00 AM to 5:00 PM in UTC)
  const generateTimeSlots = () => {
    const slots = [];
    const startHour = 9; // 9:00 AM
    const endHour = 17; // 5:00 PM

    for (let hour = startHour; hour < endHour; hour++) {
      slots.push(`${hour}:00`, `${hour}:30`);
    }
    slots.push("17:00"); // Add the last slot
    return slots.map((slot) => {
      const [hours, minutes] = slot.split(":");
      const timeLabel = new Date(Date.UTC(2023, 0, 1, hours, minutes)).toLocaleTimeString("en-US", {
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
        timeZone: formData.timeZone,
      });
      return { value: slot, label: timeLabel };
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleDateChange = (date) => {
    setFormData((prevData) => ({
      ...prevData,
      date,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    const serviceID = "service_letg0l6";
    const templateID = "template_uf6x32g";
    const publicKey = "Piekq47LlwdNXkKbE";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "", date: null, timeSlot: "", timeZone: "UTC" });
        },
        (error) => {
          console.log("FAILED...", error);
          setStatus("Failed to send message. Please try again.");
        }
      );
  };

  return (
    <div className="container mx-auto p-8 mt-20">
      <h2 className="text-4xl font-bold mb-6 text-center">Contact Us</h2>
      <p className="text-center mb-6">
        If you have any questions or need further information, feel free to reach out to us.
      </p>

      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-lg">
        <form onSubmit={handleSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Enter Your Name Here"
              required
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="example@gmail.com"
              required
            />
          </div>

          {/* Phone Field */}
          <div className="mb-4">
            <label htmlFor="phone" className="block text-lg font-medium text-gray-700">
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="123456789"
              required
            />
          </div>

          {/* Date Picker */}
          <div className="mb-4">
            <label htmlFor="date" className="block text-lg font-medium text-gray-700">
              Select Date
            </label>
            <DatePicker
              selected={formData.date}
              onChange={handleDateChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholderText="Select a date"
              required
            />
          </div>

          {/* Time Slot */}
          <div className="mb-4">
            <label htmlFor="timeSlot" className="block text-lg font-medium text-gray-700">
              Select Time Slot
            </label>
            <select
              id="timeSlot"
              name="timeSlot"
              value={formData.timeSlot}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Choose a time slot
              </option>
              {generateTimeSlots().map((slot, index) => (
                <option key={index} value={slot.value}>
                  {slot.label}
                </option>
              ))}
            </select>
          </div>

          {/* Time Zone */}
          <div className="mb-4">
            <label htmlFor="timeZone" className="block text-lg font-medium text-gray-700">
              Select Time Zone
            </label>
            <select
              id="timeZone"
              name="timeZone"
              value={formData.timeZone}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            >
              <option value="" disabled>
                Choose a time zone
              </option>
              {timeZones.map((zone, index) => (
                <option key={index} value={zone}>
                  {zone}
                </option>
              ))}
            </select>
          </div>

          {/* Message Field */}
          <div className="mb-4">
            <label htmlFor="message" className="block text-lg font-medium text-gray-700">
              Your Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              className="w-full p-3 mt-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
             
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-300 text-white rounded-lg hover:bg-yellow-500 transition duration-300"
            >
              Send Message
            </button>
          </div>
        </form>

        {/* Status Message */}
        {status && (
          <p className="mt-4 text-center text-lg font-semibold text-blue-500">{status}</p>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
