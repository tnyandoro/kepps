import React from "react";
import heroImage from "../assets/images/hero.jpg"; // ✅ Hero Section Background
import Titration from "../assets/images/titration.jpg"; // ✅ Import Image
import IonChromatography from "../assets/images/metrohm.webp"; // ✅ Import Image
import NIR from "../assets/images/nir.jpg"; // ✅ Import Image
import Raman from "../assets/images/raman.jpg"; // ✅ Import Image
import Meters from "../assets/images/meter.png"; // ✅ Import Image
import Chemicals from "../assets/images/chemicals.jpg"; // ✅ Import Image (Make sure this file exists)
import Glassware from "../assets/images/glassware.jpg"; // ✅ Import Image (Make sure this file exists)

const products = [
  {
    title: "Titration Instruments",
    description: "High-precision titration systems for accurate chemical analysis.",
    applications: [
      "Quality control",
      "Pharmaceutical testing",
      "Food and beverage analysis",
      "Environmental monitoring",
    ],
    image: Titration, // ✅ Correct Image
  },
  {
    title: "Ion Chromatography Systems",
    description: "Advanced systems for separation and quantification of ions in complex samples.",
    applications: [
      "Water quality testing",
      "Environmental analysis",
      "Pharmaceutical research",
    ],
    image: IonChromatography, // ✅ Correct Image
  },
  {
    title: "NIR Analyzers (Near-Infrared Spectrometers)",
    description: "Non-destructive analyzers for both solid and liquid samples.",
    applications: [
      "Agriculture (moisture, sugar, nicotine analysis)",
      "Food processing",
      "Pharmaceutical quality control",
    ],
    image: NIR, // ✅ Correct Image
  },
  {
    title: "Raman Spectrometers",
    description: "State-of-the-art spectrometers for molecular fingerprinting and material identification.",
    applications: [
      "Chemical research",
      "Forensic analysis",
      "Pharmaceutical development",
    ],
    image: Raman, // ✅ Correct Image
  },
  {
    title: "Meters",
    description: "Comprehensive range of meters for precise measurements.",
    applications: ["pH meters", "Conductivity meters", "Dissolved oxygen meters"],
    image: Meters, // ✅ Correct Image
  },
  {
    title: "Chemicals",
    description: "High-purity chemicals and reagents to support our primary instruments.",
    applications: ["Calibration", "Sample preparation", "Analytical processes"],
    image: Chemicals, // ✅ Correct Image
  },
  {
    title: "Glassware",
    description: "Durable, high-quality laboratory glassware for accurate experimentation.",
    applications: ["Sample handling", "Storage", "Analysis"],
    image: Glassware, // ✅ Correct Image
  },
];

const Products = () => {
  return (
    <div>
      {/* Hero Section */}
      <div
        className="h-[400px] flex justify-center items-center bg-cover bg-center text-white text-5xl font-bold"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        Our Products
      </div>

      {/* Products Grid */}
      <div className="max-w-6xl mx-auto p-6">
        <h2 className="text-3xl font-semibold mb-6 text-center">Explore Our Products</h2>
        <p className="text-gray-700 text-center mb-8">
          We offer a wide range of high-quality products tailored to meet your needs.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <div key={index} className="bg-white shadow-lg rounded-lg overflow-hidden">
              <img src={product.image} alt={product.title} className="w-full h-48 object-cover" /> {/* ✅ All images are the same size */}
              <div className="p-4">
                <h3 className="text-xl font-semibold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>
                <h4 className="mt-4 font-semibold">Applications:</h4>
                <ul className="list-disc list-inside text-gray-600 text-sm mt-2">
                  {product.applications.map((app, i) => (
                    <li key={i}>{app}</li>
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

export default Products;
