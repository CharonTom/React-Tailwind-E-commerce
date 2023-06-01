import React, { useContext } from "react";
import { SidebarContext } from "../contexts/SidebarContext";
import { BsBag } from "react-icons/bs";

const Header = () => {
  const { isOpen, setIsOpen } = useContext(SidebarContext);
  return (
    <div>
      <div
        onClick={() => setIsOpen(!isOpen)}
        className="cursor-pointer w-8 h-8 flex relative"
      >
        <BsBag
          className={`${isOpen ? " bg-orange-200" : "bg-orange-400"} text-2xl`}
        />
      </div>
    </div>
  );
};

export default Header;
