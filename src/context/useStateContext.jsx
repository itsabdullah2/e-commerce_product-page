import { useState, createContext, useContext, useEffect } from "react";

const AppStateContext = createContext();

export const AppStateProvider = ({ children }) => {
  const [isClicked, setIsClicked] = useState(false);
  const [count, setCount] = useState(1);
  const [isOpen, setIsOpen] = useState(false);
  const [cartMenu, setCartMenu] = useState(false);
  const [cart, setCart] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleClick = () => {
    setIsClicked((prev) => !prev);
  };
  const handleDecrease = () => {
    setCount(count > 0 ? count - 1 : count);
  };
  const handleIncrease = () => {
    setCount(count + 1);
  };
  const handleAddToCart = () => {
    setCart(true);
  };
  const handleOpenPopup = () => {
    setIsOpen(true);
  };
  const handleClosePopup = () => {
    setIsOpen(false);
  };
  const handleMenu = () => {
    setIsMenuOpen((prev) => !prev);
  };
  const handleEscKey = (event) => {
    if (event.key === "Escape") {
      handleClosePopup();
      setCartMenu(false);
    }
  };
  useEffect(() => {
    document.addEventListener("keydown", handleEscKey);

    return () => document.removeEventListener("keydown", handleEscKey);
  });
  const handleCartMenu = () => {
    setCartMenu((prev) => !prev);
  };

  const values = {
    isClicked,
    handleClick,
    count,
    handleDecrease,
    handleIncrease,
    handleAddToCart,
    isOpen,
    handleOpenPopup,
    handleClosePopup,
    setIsOpen,
    cartMenu,
    handleCartMenu,
    cart,
    isMenuOpen,
    handleMenu,
  };

  return (
    <AppStateContext.Provider value={values}>
      {children}
    </AppStateContext.Provider>
  );
};

export const useAppState = () => useContext(AppStateContext);
