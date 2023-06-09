import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IoMdAdd, IoMdClose, IoMdRemove } from "react-icons/io";
import { CartContext } from "../contexts/CartContext";

const CartItem = ({ item }) => {
  const { removeFromCart, increaseAmount, decreaseAmount } =
    useContext(CartContext);

  const { id, image, title, amount, price } = item;
  return (
    <div className="flex gap-x-4 py-2 lg:px-6 border-b border-gray-200 w-full font-light text-gray-500">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="w-[80px]" src={image} alt="" />
        </Link>
        <div className="w-full flex flex-col">
          {/* title & remove */}
          <div className="flex justify-between mb-2">
            {/* title */}
            <Link
              className="text-sm uppercase font-medium max-w-[240px] text-primary hover:underline "
              to={`/product/${id}`}
            >
              {title}
            </Link>
            {/* remove */}
            <div
              onClick={() => removeFromCart(id)}
              className="text-xl cursor-pointer"
            >
              <IoMdClose className="text-gray-500 hover:text-red-500 transition " />
            </div>
          </div>
          <div className=" flex gap-x-2 h-[36px]">
            <div
              className="flex flex-1 max-w-[100px] items-center border
             max-w-[100px] text-primary font-medium justify-between "
            >
              <div
                className="cursor-pointer  h-full flex-1 flex items-center justify-center"
                onClick={() => decreaseAmount(id)}
              >
                <IoMdRemove />
              </div>
              <div className="flex-1 flex items-center justify-center">
                {amount}
              </div>
              <div
                className="cursor-pointer  h-full flex-1 flex items-center justify-center"
                onClick={() => {
                  increaseAmount(id);
                }}
              >
                <IoMdAdd />
              </div>
            </div>
            <div className="flex flex-1 justify-around items-center">
              $ {price}
            </div>
            {/* total price with decimals*/}

            <div className="flex flex-1 justify-end items-center">
              $ {parseFloat(price * amount).toFixed(2)}{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
