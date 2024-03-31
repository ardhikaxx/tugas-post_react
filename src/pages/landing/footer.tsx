import React from 'react';
import { Link } from 'react-scroll';

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
                    <li><Link to="home" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-white mb-2 lg:mb-0">Home</Link></li>
                    <li><Link to="about" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-white mb-2 lg:mb-0">About</Link></li>
                    <li><Link to="products" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-white mb-2 lg:mb-0">Products</Link></li>
                    <li><Link to="call-to-action" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-white mb-2 lg:mb-0">Call to Action</Link></li>
                    <li><Link to="contact" spy={true} smooth={true} duration={500} className="text-gray-400 hover:text-white">Contact</Link></li>
                </ul>
                </div>
                <div className="w-full lg:w-1/3">
                    <p className="text-gray-400 text-center lg:text-right">© {year} Company Name. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;