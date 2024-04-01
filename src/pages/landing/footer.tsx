import React from "react";

const Footer: React.FC = () => {
  const year = new Date().getFullYear();

  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto flex flex-wrap justify-between items-center px-4">
        <div className="w-full lg:w-1/3 mb-6 lg:mb-0">
          <h3 className="text-xl font-bold mb-4">
            <span className="text-[#8C1F44]">Te</span>
            <span className="text-[#E7785C]">am</span>{" "}
            <span className="text-[#203F6F]">7</span>
          </h3>
          <p>123 Main Street, City, Country</p>
          <p>Email: info@example.com</p>
          <p>Phone: +1234567890</p>
        </div>

        <div className="w-full lg:w-1/3">
          <p className="text-gray-400 text-center lg:text-right">
            © {year} Company Name. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
