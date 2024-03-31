import React from 'react';

const Footer: React.FC = () => {
    return (
        <footer>
            <div>
                <p>Company Name</p>
                <p>123 Main Street, City, Country</p>
                <p>Email: info@example.com</p>
                <p>Phone: +1234567890</p>
            </div>
            <div>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/products">Products</a></li>
                    <li><a href="/call-to-action">Call to Action</a></li>
                    <li><a href="/contact">Contact</a></li>
                </ul>
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Company Name. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;