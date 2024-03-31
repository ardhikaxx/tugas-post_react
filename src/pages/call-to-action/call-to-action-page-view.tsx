import React from 'react';

const CallToActionPageView: React.FC = () => {
    return (
        <div className="bg-gray-800 text-white py-20">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-3xl font-bold mb-4">Take Action Now</h2>
                <p className="text-lg mb-4">Ready to get started? Contact us today for more information or to place an order.</p>
                <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Contact Us</button>
            </div>
        </div>
    );
};

export default CallToActionPageView;