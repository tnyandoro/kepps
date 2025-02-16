import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../assets/images/logo.jpeg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        {/* ✅ Clickable Logo (Redirects to Home) */}
        <Link to="/" className="flex items-center space-x-3">
          <img src={logo} alt="Company Logo" className="h-10 w-auto" />
          <div className="flex flex-col">
            <h1 className="text-3xl font-bold text-emerald-600">Kessp</h1>
            <h5 className="italic text-base text-emerald-600">
              Precision in every measurement
            </h5>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          <Link to="/" className="text-gray-600 hover:text-blue-500">Home</Link>
          <Link to="/products" className="text-gray-600 hover:text-blue-500">Products</Link>
          <Link to="/about" className="text-gray-600 hover:text-blue-500">About Us</Link>
          <Link to="/services" className="text-gray-600 hover:text-blue-500">Services</Link>
          <Link to="/contact" className="text-gray-600 hover:text-blue-500">Contact</Link>
        </nav>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 rounded-md text-gray-600 hover:bg-gray-100"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          ☰
        </button>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white shadow-md">
          <ul className="flex flex-col space-y-2 p-4">
            <li><Link to="/" className="block text-gray-600 hover:text-blue-500">Home</Link></li>
            <li><Link to="/products" className="block text-gray-600 hover:text-blue-500">Products</Link></li>
            <li><Link to="/about" className="block text-gray-600 hover:text-blue-500">About Us</Link></li>
            <li><Link to="/services" className="block text-gray-600 hover:text-blue-500">Services</Link></li>
            <li><Link to="/contact" className="block text-gray-600 hover:text-blue-500">Contact</Link></li>
          </ul>
        </nav>
      )}
    </header>
  );
};

export default Header;
