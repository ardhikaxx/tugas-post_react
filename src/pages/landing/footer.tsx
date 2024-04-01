import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">Kelompok 7</h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold mb-4 text-center">Navigation</h3>
          <ul className="flex flex-col lg:flex-row lg:justify-around">
            <li>
              <a
                href="/"
                className="text-gray-400 hover:text-white mb-2 lg:mb-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="/about"
                className="text-gray-400 hover:text-white mb-2 lg:mb-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="/products"
                className="text-gray-400 hover:text-white mb-2 lg:mb-0"
              >
                Products
              </a>
            </li>
            <li>
              <a
                href="/call-to-action"
                className="text-gray-400 hover:text-white mb-2 lg:mb-0"
              >
                Call to Action
              </a>
            </li>
            <li>
              <a href="/contact" className="text-gray-400 hover:text-white">
                Contact
              </a>
            </li>
          </ul>
        </div>
        <div className="w-full lg:w-1/3">
          <p className="text-gray-400 text-center lg:text-right">
            © {year} ItemServer. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
