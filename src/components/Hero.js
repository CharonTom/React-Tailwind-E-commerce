import React from "react";
import WomanImg from "../img/woman_hero.png";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <section className=" h-[500px] bg-hero bg-no-repeat bg-cover bg-center py-24">
      <div className="container mx-auto flex justify-around h-full">
        {/* text */}
        <div className="flex flex-col justify-center">
          <div className="font-semibold flex items-center uppercase">
            <div className="w-10 h-[2px] bg-red-500 mr-3"></div>
            <div>New Trend</div>
          </div>
          <h1 className="text-[55px] font-light mb-4 leading-[1.1]">
            AUTUMN SALE STYLISH <br />
            <span className="font-semibold">WOMENS</span>
          </h1>
          <Link
            className="self-start uppercase border-b-2 border-primary"
            to="/"
          >
            Discover Mover
          </Link>
        </div>
        {/* img */}
        <div className=" hidden lg:block">
          <img className="h-[400px]" src={WomanImg} alt="" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
