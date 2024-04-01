import React from "react";

const HomePageView: React.FC = () => {
  return (
    <div className="bg-hero-pattern bg-cover text-white h-screen flex justify-center items-center">
      <div>
        <h1 className="text-4xl font-bold text-center ">
          Welcome to Our Company
        </h1>
        <p className="mt-4 text-lg text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <div className="flex justify-center mt-6">
          <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
};

export default HomePageView;
