import React from 'react';
import { Link } from 'react-router-dom';
import { Link as ScrollLink } from 'react-scroll';

const Navbar: React.FC = () => {
    return (
        <nav className="bg-gray-800 p-4">
            <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
                <div className="relative flex items-center justify-between h-16">
                    <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                        <div className="flex-shrink-0 flex items-center">
                            <Link to="/" className="text-white font-bold">
                                <h1>Kelompok 7</h1>
                            </Link>
                        </div>
                        <div className="hidden sm:block sm:ml-6">
                            <div className="flex space-x-4">
                                <ScrollLink to="about" smooth={true} duration={500} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">About</ScrollLink>
                                <ScrollLink to="products" smooth={true} duration={500} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Products</ScrollLink>
                                <ScrollLink to="call-to-action" smooth={true} duration={500} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Call to Action</ScrollLink>
                                <ScrollLink to="contact" smooth={true} duration={500} className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium">Contact</ScrollLink>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;