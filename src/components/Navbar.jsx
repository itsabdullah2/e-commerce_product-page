import { userImage, menu, close, LI_STYLING, LI_SECTIONS } from "../data/dummy";
import { TbShoppingCart } from "react-icons/tb";
import { useAppState } from "../context/useStateContext";
import CartMenu from "./CartMenu";

const Navbar = () => {
  const { isClicked, handleClick, handleCartMenu, isMenuOpen, handleMenu } =
    useAppState();
  return (
    <div className="sm:mx-10">
      <nav className="relative py-[10px] flex items-center justify-between px-5 md:px-8 lg:px-28 xl:px-[150px] border-0 sm:border-b md:py-[45px] bg-white">
        <img
          src={isClicked ? close : menu}
          alt="Icon"
          className="mr-6 sm:mr-4 md:hidden cursor-pointer"
          onClick={() => {
            handleClick();
            handleMenu();
          }}
        />
        <h1 className="font-bold text-4xl text-customBlack flex-1 sm:flex-none md:mr-[50px] -mt-2">
          <a href="#">sneakers</a>
        </h1>
        <ul
          className={`flex-1 flex items-center gap-8 absolute md:static md:translate-x-0 ${
            isMenuOpen
              ? "left-1/2 -translate-x-1/2"
              : "-left-full -translate-x-full"
          } top-[85px] flex-col md:flex-row bg-white w-[95vw] text-center p-3 rounded-2xl duration-300 ease-in-out`}
        >
          <li className={`${LI_STYLING} ${LI_SECTIONS}`}>
            <a href="#">Collections</a>
          </li>
          <li className={`${LI_STYLING} ${LI_SECTIONS}`}>
            <a href="#">Men</a>
          </li>
          <li className={`${LI_STYLING} ${LI_SECTIONS}`}>
            <a href="#">Women</a>
          </li>
          <li className={`${LI_STYLING} ${LI_SECTIONS}`}>
            <a href="#">About</a>
          </li>
          <li className={`${LI_STYLING} ${LI_SECTIONS}`}>
            <a href="#">Contact</a>
          </li>
        </ul>

        <ul className="flex items-center md:gap-8 gap-6">
          <li
            className={`${LI_STYLING} text-[25px] active:text-customBlack`}
            onClick={handleCartMenu}
          >
            <TbShoppingCart />
          </li>
          <li className="cursor-pointer h-[50px] w-[50px] rounded-full active:border-2 border-primary">
            <img src={userImage} alt="User Image" className="w-full h-full" />
          </li>
        </ul>
        {/* Cart Menu */}
        <CartMenu />
      </nav>
    </div>
  );
};

export default Navbar;
