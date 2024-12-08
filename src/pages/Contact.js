import React, { useState } from "react";
import emailjs from "@emailjs/browser";

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus("Sending...");

    // Replace these with your EmailJS IDs
    const serviceID = "service_letg0l6";
    const templateID = "template_uf6x32g";
    const publicKey = "Piekq47LlwdNXkKbE";

    emailjs
      .send(serviceID, templateID, formData, publicKey)
      .then(
        (response) => {
          console.log("SUCCESS!", response.status, response.text);
          setStatus("Message sent successfully!");
          setFormData({ name: "", email: "", phone: "", message: "" });
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
              required
            />
          </div>

          {/* Submit Button */}
          <div className="text-center">
            <button
              type="submit"
              className="px-6 py-2 bg-yellow-300 text-white-5000 rounded-lg hover:bg-yellow-500 transition duration-300"
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
      <div className="mt-12 text-center">
        <h3 className="text-2xl font-semibold text-gray-700">Contact Information</h3>
        <p className="mt-4 text-lg text-gray-600">Feel free to contact us using the following details:</p>

        <div className="mt-6">
          <p className="text-lg text-gray-600">
            <strong>Email:</strong> contact@bhpsschool.com
          </p>
          <p className="text-lg text-gray-600">
            <strong>Phone:</strong> +91 123 456 7890
          </p>
          <p className="text-lg text-gray-600">
            <strong>Address:</strong> 123 School Road, BHPS Town, India
          </p>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
