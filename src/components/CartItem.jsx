import { product1 } from "../data/dummy";
import { useAppState } from "../context/useStateContext";

const CartItem = () => {
  const { count } = useAppState();

  return (
    <div className="flex items-center justify-between gap-4">
      <img
        src={product1}
        alt="product image"
        className="w-[50px] h-[50px] object-fill rounded-md"
      />
      <div className="flex-1">
        <p className="capitalize">fall limited edition sneakers</p>
        <div className="flex items-center gap-4">
          <span>$125.00 {count === 0 ? "" : `x ${count}`}</span>
          <span className="font-bold">${count * 125.0}</span>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
