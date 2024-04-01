import React from "react";
type Props = {
  data: Array<any>;
};

const itemCard = (data) => {
  return (
    <div>
      <div className="bg-white rounded-lg shadow-md p-6">
        <img src={data.item.images[0]} alt="data.item.images[0]" />
        <h3 className="text-xl text-gray-900 font-bold mb-2">
          {data.item.title}
        </h3>
        <p className="text-gray-700 mb-4">
          {" "}
          {data.item.description.slice(0, 160) + "....."}
        </p>
        <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Learn More
        </button>
      </div>
    </div>
  );
};

export default itemCard;
