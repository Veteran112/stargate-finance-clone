import AirbitrumChain from "@components/Svgs/AirbitrumChain";
import AvalancheChain from "@components/Svgs/AvalancheChain";
import BNB from "@components/Svgs/BNB";
import Ethereum from "@components/Svgs/Ethereum";
import FantomChain from "@components/Svgs/FantomChain";
import Matic from "@components/Svgs/Matic";
import OptimismChain from "@components/Svgs/OptimismChain";
import { NetworkType, SelectTokenDrawerProps } from "@config/types";
import { cx } from "@utils";
import React from "react";
import { MdClose } from "react-icons/md";

const networks: NetworkType[] = [
  {
    name: "Ethereum",
    logo: <Ethereum />,
    value: "Ethereum",
  },
  {
    name: "BNB Chain",
    logo: <BNB />,
    value: "BNB Chain",
  },
  {
    name: "Avalanche",
    logo: <AvalancheChain />,
    value: "Avalanche",
  },
  {
    name: "Matic",
    logo: <Matic />,
    value: "MaticDT",
  },
  {
    name: "Arbitrum",
    logo: <AirbitrumChain />,
    value: "Arbitrum",
  },
  {
    name: "Optimism",
    logo: <OptimismChain />,
    value: "Optimism",
  },
  {
    name: "Fantom",
    logo: <FantomChain />,
    value: "FantomT",
  },
];

const SelectNetworkDrawer = ({
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
        <h1 className="text-lg">Select Network</h1>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </div>

      <div className="px-7 ">
        <div className="border-b border-white/20 flex justify-between text-white/60 text-sm pb-3.5 pt-7">
          <p>Network Name</p>
        </div>
      </div>

      {/** Header --End-- */}

      {/** Body --Start-- */}
      <div className="px-3 mt-2">
        {networks.map((network, i) => (
          <div
            onClick={() => {
              onSelect(network);
              onClose();
            }}
            className="flex items-center justify-between gap-3 px-4 py-3.5 rounded-md hover:bg-white/10 cursor-pointer duration-300"
            key={i}
          >
            <div className="flex gap-3">
              <div className="w-8 h-8 rounded-md overflow-hidden shrink-0">
                {network.logo}
              </div>
              <p>{network.name}</p>
            </div>
          </div>
        ))}
      </div>
      {/** Body --End-- */}
    </div>
  );
};

export default SelectNetworkDrawer;
