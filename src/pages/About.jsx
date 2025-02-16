import React from "react";
import heroImage from "../assets/images/hero.jpg"; // ✅ Import Image Properly

const About = () => {
  return (
    <div>
      {/* Hero Section with Background Image */}
      <div
        className="h-[400px] flex justify-center items-center bg-cover bg-center text-white text-5xl font-bold"
        style={{ backgroundImage: `url(${heroImage})` }} // ✅ Use Imported Image
      >
        About Us
      </div>

      {/* About Content */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-4">Who We Are</h2>
        <p className="text-gray-700">
        Kessp is a trusted distributor and provider of cutting-edge analytical instrumentation and solutions, empowering industries to achieve precision, efficiency, and compliance in their operations. With a commitment to innovation and quality, we deliver a comprehensive range of instruments and support products designed to meet the diverse needs of laboratories, research facilities, and industrial applications.
        </p>
      </div>
    </div>
  );
};

export default About;
