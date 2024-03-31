import React from 'react';

const ContactPageView: React.FC = () => {
    return (
        <div className="bg-gray-900 py-20">
            <div className="container mx-auto px-4 text-white">
                <h2 className="text-3xl font-bold mb-6 text-center">Contact Us</h2>
                <div className="max-w-lg mx-auto">
                    <p className="text-lg mb-6 text-center">Have questions or inquiries? Reach out to us using the contact information below:</p>
                    <ul className="list-none">
                        <li className="mb-4 flex items-center justify-center">
                            <span>Email: info@example.com</span>
                        </li>
                        <li className="mb-4 flex items-center justify-center">
                            <span>Phone: +1234567890</span>
                        </li>
                        <li className="flex items-center justify-center">
                            <span>Address: 123 Main Street, City, Country</span>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default ContactPageView;