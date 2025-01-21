import React, { useState } from "react";
import {
  product1,
  product2,
  product3,
  product4,
  PSEUDO_ELE,
  HOVER_PSEUDO_ELE,
} from "../data/dummy";
import ImagePopup from "./ImagePopup";
import { useAppState } from "../context/useStateContext";

const ProductImage = () => {
  const [isActive, setIsActive] = useState(product1);
  const [isActiveTwo, setIsActiveTwo] = useState(product1);
  const { handleOpenPopup } = useAppState();

  return (
    <>
      <ImagePopup
        state={isActiveTwo}
        stateFn={setIsActiveTwo}
        pseudo={PSEUDO_ELE}
        hoverPseudo={HOVER_PSEUDO_ELE}
      />
      <div className="">
        <div
          className="md:w-[450px] w-[90vw] rounded-2xl overflow-hidden cursor-pointer"
          onClick={handleOpenPopup}
        >
          <img src={isActive} alt="product image" className="w-full" />
        </div>
        <div className="md:flex hidden items-center gap-2 w-full justify-between mt-6 overflow-hidden">
          <div
            className={`relative rounded-2xl overflow-hidden ${
              isActive === product1
                ? `border-2 border-primary ${PSEUDO_ELE}`
                : `${HOVER_PSEUDO_ELE}`
            }`}
            onClick={() => setIsActive(product1)}
          >
            <img
              src={product1}
              alt="product image"
              width={100}
              className={`rounded-2xl`}
            />
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden ${
              isActive === product2
                ? `border-2 border-primary ${PSEUDO_ELE}`
                : `${HOVER_PSEUDO_ELE}`
            }`}
            onClick={() => setIsActive(product2)}
          >
            <img
              src={product2}
              alt="product image"
              width={100}
              className={`rounded-2xl`}
            />
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden ${
              isActive === product3
                ? `border-2 border-primary ${PSEUDO_ELE}`
                : `${HOVER_PSEUDO_ELE}`
            }`}
            onClick={() => setIsActive(product3)}
          >
            <img
              src={product3}
              alt="product image"
              width={100}
              className={`rounded-2xl`}
            />
          </div>

          <div
            className={`relative rounded-2xl overflow-hidden ${
              isActive === product4
                ? `border-2 border-primary ${PSEUDO_ELE}`
                : `${HOVER_PSEUDO_ELE}`
            }`}
            onClick={() => setIsActive(product4)}
          >
            <img
              src={product4}
              alt="product image"
              width={100}
              className={`rounded-2xl`}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductImage;
