import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";

const YouWillReceiveDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="mt-7 border border-white/10 rounded-xl bg-primary/5">
      <div
        onClick={() => setIsOpen((prev) => !prev)}
        className="px-5 flex justify-between items-center h-[55px] cursor-pointer"
      >
        <p>You Will Receive</p>
        <BiChevronDown
          size={24}
          className={`duration-300 ${isOpen ? "rotate-180" : ""}`}
        />
      </div>

      <div
        className={`px-5 duration-300 overflow-hidden ${
          isOpen ? "h-[90px]" : "h-0"
        }`}
      >
        <div className="pb-3 space-y-1">
          <div className="flex justify-between text-xs">
            <p>Slippage</p>
            <p>0.5%</p>
          </div>
          <div className="flex justify-between text-xs">
            <p>Gas on destination</p>
            <p>O MATIC</p>
          </div>
          <div className="flex justify-between text-xs opacity-50">
            <p>Fee</p>
            <p>-</p>
          </div>
          <div className="flex justify-between text-xs opacity-50">
            <p>Gas Cost</p>
            <p>-</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default YouWillReceiveDropdown;
