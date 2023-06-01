import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { BsPlus, BsEyeFill } from "react-icons/bs";
import { icons } from "react-icons";

const Product = ({ product }) => {
  //console.log(product.category);
  const { id, image, category, title, price } = product;
  //console.log(category);
  return (
    <div className="border border-[#e4e4e4] h-[300px] mb-4 relative overflow-hidden group transition">
      <div className="w-full h-full flex justify-center items-center">
        {/* image */}
        <div className="w-[200px] mx-auto">
          <img
            className="max-h-[160px] mx-auto group-hover:scale-110 transition duration-300 "
            src={image}
            alt=""
          />
        </div>
      </div>
      {/* button */}
      <div className="absolute top-6 -right-11 group-hover:right-5  p-2 flex flex-col gap-y-2 opacity-0 group-hover:opacity-100 transition-all duration-300">
        <button>
          <div className="bg-red-500 flex justify-center items-center text-white w-12 h-12 drop-shadow-xl">
            <BsPlus className="text-3xl" />
          </div>{" "}
        </button>
        <Link
          to={`product/${id}`}
          className="text-primary bg-white flex justify-center items-center text-white w-12 h-12 drop-shadow-xl"
        >
          <BsEyeFill />
        </Link>
      </div>
    </div>
  );
};

export default Product;
