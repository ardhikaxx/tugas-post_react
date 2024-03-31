import React from 'react';

const ProductsPageView: React.FC = () => {
    return (
        <div className="bg-gray-900 py-20">
            <div className="container mx-auto px-4 text-white text-center">
                <h2 className="text-3xl font-bold mb-6">Our Products</h2>
                <p className="text-lg mb-6">Explore our range of high-quality products designed to meet your needs.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">

                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Product Title</h3>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus ut purus finibus lacinia.</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Learn More</button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Product Title</h3>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus ut purus finibus lacinia.</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Learn More</button>
                    </div>
                    <div className="bg-white rounded-lg shadow-md p-6">
                        <h3 className="text-xl text-gray-900 font-bold mb-2">Product Title</h3>
                        <p className="text-gray-700 mb-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed eget lectus ut purus finibus lacinia.</p>
                        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">Learn More</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductsPageView;