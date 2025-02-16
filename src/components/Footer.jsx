import React from "react";

const Footer = () => {
  return (
    <footer className="bg-emerald-900 text-white py-10">
      <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-6 text-center md:text-left">
        <div>
          <h3 className="text-xl font-semibold">Newsletter</h3>
          <p className="mt-2 text-gray-100">Stay updated with the latest news.</p>
          <input type="email" placeholder="Enter your email" className="mt-3 px-4 py-2 rounded bg-gray-100 text-gray-900 w-full" />
        </div>
        <div>
          <h3 className="text-xl font-semibold">Phone numbers</h3>
          <ul className="mt-2 text-gray-100">
            <li>Lorem ipsum dolor sit amet.</li>
            <li>Lorem ipsum dolor sit amet.</li>
          </ul>
        </div>
        <div>
          <h3 className="text-xl font-semibold">Contact Us</h3>
          <p className="text-gray-100">Pine Rd, Broadacres, Johannesburg, 2191</p>
          <p className="text-gray-100">info@kesp.net</p>
        </div>
      </div>
      <div className="text-center mt-10">
        <p className="text-gray-100">&copy; 2025 Kessp. All Rights Reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
