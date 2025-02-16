import React from "react";
import { FaHeadset, FaCode, FaFont, FaPalette, FaLayerGroup, FaExpand } from "react-icons/fa";

const features = [
  { icon: <FaHeadset />, title: "Laboratory TOC Analysers",paragraph:"Laboratory TOC Analysers are used to measure the total organic carbon content in water samples." },
  { icon: <FaCode />, title: "Portable TOC Analysers", paragraph:"Portable TOC Analysers are used to measure the total organic carbon content in water samples." },
  { icon: <FaFont />, title: "Online TOC Analysers", paragraph:"Online TOC Analysers are used to measure the total organic carbon content in water samples." },
  { icon: <FaPalette />, title: "Density Meters", paragraph:"Density Meters are used to measure the density of liquids and solids." },
  { icon: <FaLayerGroup />, title: "Laboratory Software Solutions", paragraph:"Laboratory Software Solutions are used to manage laboratory data and workflows." },
  { icon: <FaExpand />, title: "Thermal Analysis", paragraph:"Thermal Analysis is used to study the properties of materials as they change with temperature." },
];

const Features = () => {
  return (
    <section className="py-20 bg-gray-100">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold">Our <span className="text-emerald-600">Features</span></h2>
        <div className="mt-10 grid grid-cols-2 md:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div key={index} className="p-6 bg-white shadow-lg rounded-lg flex flex-col items-center">
              <div className="text-emerald-600 text-4xl">{feature.icon}</div>
              <h3 className="mt-4 text-xl font-semibold">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.paragraph}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
