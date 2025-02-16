import React from "react";
import {
  CogIcon,
  ComputerDesktopIcon,
  AcademicCapIcon,
  WrenchScrewdriverIcon,
} from "@heroicons/react/24/solid"; // ✅ Correct import path for Heroicons v2
import heroImage from "../assets/images/hero.jpg"; // ✅ Import Background Image

const services = [
  {
    title: "Equipment Sales",
    description: "Distribution of advanced analytical instruments, including:",
    points: [
      "Ion analysis systems",
      "Chromatography systems",
      "Electrochemical instruments",
    ],
    icon: <CogIcon className="h-24 w-24 text-emerald-600" />, // ✅ Larger Icon (h-24 = 6rem, w-24 = 6rem)
  },
  {
    title: "Software Solutions",
    description:
      "Sales of data management and analysis software to seamlessly integrate with our equipment.",
    points: [
      "Real-time data tracking",
      "Advanced analytics",
      "Customizable reporting",
    ],
    icon: <ComputerDesktopIcon className="h-24 w-24 text-emerald-600" />, // ✅ Larger Icon
  },
  {
    title: "Training & Consultation",
    description: "Specialized training programs for laboratory staff on:",
    points: [
      "Proper use of equipment",
      "Maintenance and troubleshooting",
      "Best practices for accurate analysis",
    ],
    icon: <AcademicCapIcon className="h-24 w-24 text-emerald-600" />, // ✅ Larger Icon
  },
  {
    title: "Service and Repair",
    description: "Comprehensive after-sales support, including:",
    points: [
      "Warranty services",
      "Repairs and preventive maintenance",
      "Spare parts and consumables",
    ],
    icon: <WrenchScrewdriverIcon className="h-24 w-24 text-emerald-600" />, // ✅ Larger Icon
  },
];

const Services = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[400px] flex justify-center items-center bg-cover bg-center text-white text-5xl font-bold"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        Our Services
      </div>

      {/* Services Section */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-4xl font-semibold mb-8 text-center">What We Offer</h2>
        <p className="text-gray-700 text-center mb-12">
          We provide cutting-edge solutions to support your laboratory and industry needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg p-8 flex items-start space-x-6"
            >
              <div>{service.icon}</div>
              <div>
                <h3 className="text-2xl font-semibold">{service.title}</h3>
                <p className="text-gray-600 mt-4">{service.description}</p>
                <h4 className="mt-4 font-semibold">Includes:</h4>
                <ul className="list-disc list-inside text-gray-600 text-lg mt-2">
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
