import React from "react";
import { useAppState } from "../context/useStateContext";
import CartItem from "./CartItem";

const CartMenu = () => {
  const { cartMenu, cart, count } = useAppState();

  const currentState = count === 0 ? cart === false : cart;

  return (
    <>
      {cartMenu && (
        <div className="flex flex-col absolute bg-white rounded-2xl right-0 top-20 md:top-28 w-[400px] min-h-[280px] shadow-lg">
          <h2 className="border-b py-6 px-4 text-black text-[20px] font-medium">
            Cart
          </h2>
          <div className="px-4 mt-8">
            <div className="">
              {currentState ? (
                <div className="flex flex-col gap-6">
                  <CartItem />
                  <button className="bg-primary text-white rounded-xl font-medium py-4 w-full">
                    Checkout
                  </button>
                </div>
              ) : (
                <h3 className="text-[18px] text-darkGrayishBlue font-medium text-center">
                  Your cart is empty
                </h3>
              )}
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CartMenu;
