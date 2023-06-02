import React from "react";
import { Link } from "react-router-dom";

const CartItem = ({ item }) => {
  const { id, image, title, amout, price } = item;
  return (
    <div className="flex">
      <div className="w-full min-h-[150px] flex items-center gap-x-4">
        <Link to={`/product/${id}`}>
          <img className="w-[80px]" src={image} alt="" />
        </Link>
      </div>
    </div>
  );
};

export default CartItem;
