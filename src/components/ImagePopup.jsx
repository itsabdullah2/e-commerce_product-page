import { useAppState } from "../context/useStateContext";
import { product1, product2, product3, product4 } from "../data/dummy";
import { IoCloseSharp } from "react-icons/io5";

const ImagePopup = ({ state, stateFn, pseudo, hoverPseudo }) => {
  const { handleClosePopup, isOpen } = useAppState();

  return (
    <div className={`${isOpen ? "block" : "hidden"}`}>
      <div
        className={`before:fixed before:top-0 before:left-0 before:bg-black before:opacity-70 before:z-[99] before:w-full before:h-full`}
      >
        {/* Main Image */}
        <div className="fixed z-[100] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80vw] md:w-[500px]">
          <img src={state} alt="product image" className="rounded-2xl w-full" />
          <span
            className="absolute right-0 -top-10 text-white hover:text-primary cursor-pointer text-[30px] duration-200"
            onClick={handleClosePopup}
          >
            <IoCloseSharp />
          </span>
          {/* Image List */}
          <div className="flex items-center gap-2 w-full justify-between mt-6 overflow-hidden">
            <div
              className={`relative rounded-2xl overflow-hidden ${
                state === product1
                  ? `border-2 border-primary ${pseudo}`
                  : `${hoverPseudo}`
              }`}
              onClick={() => stateFn(product1)}
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
                state === product2
                  ? `border-2 border-primary ${pseudo}`
                  : `${hoverPseudo}`
              }`}
              onClick={() => stateFn(product2)}
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
                state === product3
                  ? `border-2 border-primary ${pseudo}`
                  : `${hoverPseudo}`
              }`}
              onClick={() => stateFn(product3)}
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
                state === product4
                  ? `border-2 border-primary ${pseudo}`
                  : `${hoverPseudo}`
              }`}
              onClick={() => stateFn(product4)}
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
      </div>
    </div>
  );
};

export default ImagePopup;
