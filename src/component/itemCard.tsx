import React from "react";
type Props = {
  data: Array<any>;
};

const itemCard = (data) => {
  return (
    <div className="flex justify-center items-center h-full">
      <div className="bg-white rounded-lg shadow-md p-6 w-[80%]">
        <img
          className="mt-2 rounded-xl"
          src={data.item.images[0]}
          alt="data.item.images[0]"
        />
        <h3 className="text-xl text-gray-900 font-bold mb-2 mt-5">
          {data.item.title}
        </h3>
        <p className="text-gray-700 mb-4 text-sm">
          {" "}
          {data.item.description.slice(0, 160) + "....."}
        </p>
        <button className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
          Buy
        </button>
      </div>
    </div>
  );
};

export default itemCard;
