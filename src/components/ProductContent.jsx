import React from "react";
import ProductImage from "./ProductImage";
import ProductInfo from "./ProductInfo";

const ProductContent = () => {
  return (
    <div className="flex items-center flex-col lg:flex-row justify-between gap-6 mt-0 md:mt-20 mx-0 md:mx-10 lg:mx-20 xl:mx-48 pb-20 lg:pb-0">
      <ProductImage />
      <ProductInfo />
    </div>
  );
};

export default ProductContent;
