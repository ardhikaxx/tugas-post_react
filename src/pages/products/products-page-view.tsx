import React from "react";
import ItemCard from "../../component/itemCard";
import dataFetch from "../../core/dataFetch";

const ProductsPageView: React.FC = () => {
  const { data, error, loading, fetchData } = dataFetch(
    "/products?limit=20&offset=0"
  );

  return loading ? (
    <div>Memuat.....</div>
  ) : (
    <div className="bg-gray-900 py-20">
      <div className="container mx-auto px-4 text-white text-center">
        <h2 className="text-3xl font-bold mb-6">Our Products</h2>
        <p className="text-lg mb-6">
          Explore our range of high-quality products designed to meet your
          needs.
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-3 gap-6">
          {data.map((item, id) => {
            return <ItemCard item={item} key={id} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default ProductsPageView;
