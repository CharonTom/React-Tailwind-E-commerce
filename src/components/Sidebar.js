import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdArrowForward } from "react-icons/io";
import { FiTrash2 } from "react-icons/fi";
import { SidebarContext } from "../contexts/SidebarContext";
import CartItem from "./CartItem";
import { CartContext } from "../contexts/CartContext";

const Sidebar = () => {
  const { isOpen, handleClose } = useContext(SidebarContext);
  const { cart, clearCart, total, amountItem } = useContext(CartContext);

  return (
    <div
      className={`${
        isOpen ? "right-0" : "-right-full"
      } w-full h-full fixed top-0 
    md:w-[45vw] xl:w-[30vw] z-20 transition-all duration-300 
    bg-white shadow-2xl transition-all 
    duration-300 px-4 lg:px-[35px] flex flex-col justify-between`}
    >
      <div className="flex items-center justify-between py-6 border-b">
        <div className="uppercase text-sm font-semibold">
          Shopping bag ({amountItem})
        </div>
        <div
          onClick={handleClose}
          className="cursor-pointer w-8 h-8 flex justify-center items-center"
        >
          <div>
            <IoMdArrowForward className="text-2xl" />
          </div>
        </div>
      </div>
      <div
        className="flex flex-col gap-y-2 
      overflow-y-auto overflow-x-hidden 
      "
      >
        {cart.map((item) => {
          return <CartItem item={item} key={item.id} />;
        })}
      </div>
      <div className="gap-y-3 py-4">
        <div className=" flex justify-between items-center w-full">
          <div className="font-semibold uppercase py-6">
            <span className="mr-2">Total Price :</span>$
            {parseFloat(total).toFixed(2)}
          </div>
          <div
            onClick={() => {
              clearCart();
            }}
            className="cursor-pointer py-4 bg-red-500 text-white w-12 h-12 
            flex justify-center items-center text-xl"
          >
            <FiTrash2 />
          </div>
        </div>

        <Link
          className="flex justify-center items-center bg-primary p-4 text-white w-full font-medium"
          to="/React-Tailwind-E-commerce"
        >
          Checkout
        </Link>
      </div>
    </div>
  );
};

export default Sidebar;
