import { NetworkSelectProps } from "@config/types";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SelectNetworkDrawer from "../SelectNetworkDrawer";

const NetworkSelect = ({ onSelect, value }: NetworkSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="w-[200px] border border-l-0 border-white/10 rounded-r-xl h-[55px] flex justify-between items-center pr-3 pl-5 relative cursor-pointer"
      >
        <p className="absolute left-5 top-0 -translate-y-1/2 text-white/50 text-xs bg-[#31333C]">
          Network
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-md bg-white/50">{value?.logo}</div>
          <p>{value?.name || "Select"}</p>
        </div>

        <BiChevronDown size={22} />
      </div>
      <SelectNetworkDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={onSelect}
      />
    </>
  );
};

export default NetworkSelect;
