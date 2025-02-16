import React, { useState } from "react";
import heroImage from "../assets/images/contact.jpg"; // ✅ Import Background Image

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  // ✅ Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // ✅ Handle Form Submission via `mailto`
  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;
    const mailtoLink = `mailto:info@kesp.net?subject=Contact%20Form%20Submission&body=Name:%20${encodeURIComponent(
      name
    )}%0AEmail:%20${encodeURIComponent(email)}%0AMessage:%20${encodeURIComponent(
      message
    )}`;

    window.location.href = mailtoLink;
  };

  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[400px] flex justify-center items-center bg-cover bg-center text-white text-5xl font-bold"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        Contact Us
      </div>

      {/* Contact Form */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Get in Touch</h2>

        <form onSubmit={handleSubmit} className="bg-gray-100 p-6 rounded-md">
          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your Email"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700 font-semibold">Message</label>
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full p-2 border rounded-md"
              placeholder="Your Message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
