import userImage from "./images/image-avatar.png";
import menu from "../data/images/icon-menu.svg";
import close from "../data/images/icon-close.svg";
import product1 from "../data/images/image-product-1.jpg";
import product2 from "../data/images/image-product-2.jpg";
import product3 from "../data/images/image-product-3.jpg";
import product4 from "../data/images/image-product-4.jpg";

const LI_STYLING =
  "text-[18px] text-grayishBlue duration-500 hover:text-customBlack cursor-pointer";
const LI_SECTIONS =
  "relative before:hidden md:before:block before:w-0 before:duration-500 before:hover:w-full before:h-[3px] before:absolute before:bg-primary before:left-0 before:-bottom-[55px]";
const PSEUDO_ELE =
  "before:absolute before:left-0 before:top-0 before:w-full before:h-full before:bg-lightGrayishBlue -z-10 before:opacity-70";
const HOVER_PSEUDO_ELE =
  "cursor-pointer before:duration-200 before:absolute before:left-0 before:top-0 before:w-full before:h-full hover:before:bg-lightGrayishBlue before:opacity-70";

export {
  userImage,
  menu,
  close,
  LI_STYLING,
  LI_SECTIONS,
  product1,
  product2,
  product3,
  product4,
  HOVER_PSEUDO_ELE,
  PSEUDO_ELE,
};
