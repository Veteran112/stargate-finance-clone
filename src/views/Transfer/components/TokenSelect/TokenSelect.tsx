import { TokenSelectProps } from "@config/types";
import React, { useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import SelectTokenDrawer from "../SelectTokenDrawer";

const TokenSelect = ({ onSelect, value }: TokenSelectProps) => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <div
        onClick={() => setIsOpen(true)}
        className="grow border border-white/10 rounded-l-xl h-[55px] flex justify-between items-center pr-3 pl-5 relative cursor-pointer"
      >
        <p className="absolute left-5 top-0 -translate-y-1/2 text-white/50 text-xs bg-[#31333C]">
          Token
        </p>
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-white/50">{value?.logo}</div>
          <p>{value?.name || "Select"}</p>
        </div>

        <BiChevronDown size={22} />
      </div>
      <SelectTokenDrawer
        open={isOpen}
        onClose={() => setIsOpen(false)}
        onSelect={onSelect}
      />
    </>
  );
};

export default TokenSelect;
