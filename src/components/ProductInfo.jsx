import { TbShoppingCart } from "react-icons/tb";
import { useAppState } from "../context/useStateContext";

const ProductInfo = () => {
  const { count, handleDecrease, handleIncrease, handleAddToCart } =
    useAppState();

  return (
    <div className="md:w-[500px] w-full px-8 md:px-0 mt-8 md:mt-0">
      <div className="md:mb-10 mb-5">
        <span className="text-primary uppercase text-sm font-medium">
          sneaker company
        </span>
        <h2 className="text-customBlack mt-2 font-bold md:text-5xl text-3xl capitalize">
          fall limited edition
          <br /> sneakers
        </h2>
      </div>
      <p className="text-sm text-darkGrayishBlue mb-6">
        These low-profile sneakers are your perfect casual wear
        <br /> companion. Featuring a durable rubber outer sole, they&apos;ll
        <br /> withstand everything the weather can offer.
      </p>
      <div className="flex md:flex-col items-center md:items-start justify-between md:justify-normal flex-row">
        <div className="flex gap-2 items-center">
          <p className="font-bold text-2xl text-customBlack">$125.00</p>
          <span className="bg-paleOrange text-primary font-medium px-2 py-[2px] rounded">
            50%
          </span>
        </div>
        <span className="line-through text-grayishBlue text-[18px] font-medium">
          $250.00
        </span>
      </div>

      <div className="mt-8 flex items-center flex-col md:flex-row gap-4">
        <div className="flex items-center justify-between gap-[10px] bg-lightGrayishBlue md:w-fit w-full rounded-lg py-[10px] md:py-0 px-2">
          <button
            className="text-primary font-bold w-[35px] text-left text-[24px]"
            onClick={handleDecrease}
          >
            -
          </button>
          <span className="text-[16px] w-[35px] flex items-center justify-center">
            {count}
          </span>
          <button
            className="text-primary font-bold w-[35px] text-right text-[24px]"
            onClick={handleIncrease}
          >
            +
          </button>
        </div>
        <button
          className="bg-primary py-[10px] text-lightGrayishBlue flex items-center gap-2 font-medium md:w-[220px] w-full justify-center rounded-lg h-[56px] md:h-auto shadow-xl shadow-paleOrange active:scale-95 duration-500"
          onClick={handleAddToCart}
        >
          <span>
            <TbShoppingCart />
          </span>
          <span>Add to cart</span>
        </button>
      </div>
    </div>
  );
};

export default ProductInfo;
