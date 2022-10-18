import ETH from "@components/Svgs/ETH";
import SmlLogo from "@components/Svgs/SmlLogo";
import USDC from "@components/Svgs/USDC";
import USDT from "@components/Svgs/USDT";
import { SelectTokenDrawerProps, Token } from "@config/types";
import { cx } from "@utils";
import React from "react";
import { MdClose } from "react-icons/md";

const tokens: Token[] = [
  {
    name: "USDT",
    logo: <USDT />,
    value: "USDT",
  },
  {
    name: "USDC",
    logo: <USDC />,
    value: "USDC",
  },
  {
    name: "ETH",
    logo: <ETH />,
    value: "ETH",
  },
  {
    name: "STG",
    logo: <SmlLogo />,
    value: "STG",
  },
];

const SelectTokenDrawer = ({
  onClose,
  open,
  onSelect,
}: SelectTokenDrawerProps) => {
  return (
    <div
      className={cx(
        "absolute top-0 left-0 w-full h-full bg-[#31333C] z-10 duration-300",
        open
          ? "translate-y-0 pointer-events-auto"
          : "translate-y-full pointer-events-none",
      )}
    >
      {/** Header --Start-- */}
      <div className="flex justify-between items-center pt-7 px-7 ">
        <h1 className="text-lg">Select Token</h1>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </div>

      <div className="px-7 ">
        <div className="border-b border-white/20 flex justify-between text-white/60 text-sm pb-3.5 pt-7">
          <p>Token Name</p>
          <p>Balance</p>
        </div>
      </div>

      {/** Header --End-- */}

      {/** Body --Start-- */}
      <div className="px-3 mt-2">
        {tokens.map((token, i) => (
          <div
            onClick={() => {
              onSelect(token);
              onClose();
            }}
            className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-md hover:bg-white/10 cursor-pointer duration-300"
            key={i}
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-full overflow-hidden shrink-0">
                {token.logo}
              </div>
              <p>{token.name}</p>
            </div>
            <p>0.00</p>
          </div>
        ))}
      </div>
      {/** Body --End-- */}
    </div>
  );
};

export default SelectTokenDrawer;
