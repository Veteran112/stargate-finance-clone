import { AdvancedSettingsProps } from "@config/types";
import { cx } from "@utils";
import React, { useState } from "react";
import { MdClose } from "react-icons/md";
import { BsExclamationCircle } from "react-icons/bs";
import classNames from "classnames";
import ETH from "@components/Svgs/ETH";

const slippageToleranceOptions = [
  {
    percantage: 0.1,
  },
  {
    percantage: 0.5,
  },
  {
    percantage: 1,
  },
];

const AdvancedSettings = ({ onClose, open }: AdvancedSettingsProps) => {
  const [destinationChain, setDestinationChain] = useState<"none" | "default">(
    "none",
  );
  const [slippageTolerance, setSlippageTolerance] = useState<number>(1);

  return (
    <div
      className={cx(
        "absolute top-0 left-0 w-full h-full bg-[#31333C] z-10 duration-300 flex flex-col",
        open
          ? "translate-y-0 pointer-events-auto"
          : "translate-y-full pointer-events-none",
      )}
    >
      {/** Header --Start-- */}
      <div className="flex justify-between items-center pt-7 px-7 ">
        <h1 className="text-lg">Advanced Settings</h1>
        <button onClick={onClose}>
          <MdClose size={24} />
        </button>
      </div>

      {/** Header --End-- */}

      {/** Body --Start-- */}
      <div className="px-7 mt-2 grow flex flex-col">
        {/* Gas Destination Start */}
        <div className="flex items-center justify-between mt-10 border-b border-white/10 pb-3">
          <span className="text-base leading-6 text-white">
            Gas on destination chain
          </span>
          <span>{/* <BsExclamationCircle size={18} /> */}</span>
        </div>

        <div className="grid grid-cols-2 gap-5 mt-5">
          <button
            onClick={() => setDestinationChain("none")}
            className={classNames(
              "border select-none hover:border-white/60 border-white/30 text-lg text-white/80 rounded-xl py-[15px] flex items-center justify-center",
              destinationChain === "none" && "!border-white/90 bg-white/10",
            )}
          >
            None
          </button>
          <button
            onClick={() => setDestinationChain("default")}
            className={classNames(
              "border select-none hover:border-white/60 border-white/30 text-lg text-white/80 rounded-xl py-[15px] flex items-center justify-center",
              destinationChain === "default" && "!border-white/90 bg-white/10",
            )}
          >
            Default
          </button>
        </div>

        <div className="relative mt-5">
          <div className="w-6 aspect-square bg-white rounded-full absolute top-1/2 -translate-y-1/2 left-3">
            <ETH />
          </div>
          <input
            type="number"
            id="total_amount"
            className="bg-transparent w-full py-[15px] leading-7 border  border-white/30 rounded-xl placeholder:text-[#CCCCCC]/50 pl-[44px] outline-none pr-[78px]"
            placeholder="0.00548575272"
          />
          <button
            type="button"
            className="outline-none border border-primary text-primary px-2.5 py-1 hover:bg-primary hover:text-white text-xs rounded-md absolute top-1/2 -translate-y-1/2 right-4"
          >
            MAX
          </button>
        </div>
        {/* Gas Destination End */}

        {/* Slippage Tolerane --Start-- */}
        <div className="mt-12 space-y-5">
          <div className="flex items-center justify-between mt-10 border-b border-white/10 pb-3">
            <span className="text-base leading-6 text-white">
              Slippage tolerance
            </span>
            <span>{/* <BsExclamationCircle size={18} /> */}</span>
          </div>

          {/* 3 grid  */}
          <ul className="grid grid-cols-3 gap-5">
            {slippageToleranceOptions.map(({ percantage }, i) => (
              <li key={i}>
                <button
                  onClick={() => setSlippageTolerance(percantage)}
                  className={classNames(
                    "border select-none w-full border-white/30 text-lg text-white/80 rounded-xl py-[15px] flex items-center justify-center hover:border-white/60",
                    slippageTolerance === percantage &&
                      "!border-white/90 bg-white/10",
                  )}
                >
                  {percantage}%
                </button>
              </li>
            ))}
          </ul>
          <div className="relative">
            <input
              value={slippageTolerance}
              onChange={(e) => setSlippageTolerance(parseInt(e.target.value))}
              type="number"
              className="border outline-none border-white/30 leading-7 py-[15px] text-base text-white/70 bg-transparent rounded-xl w-full pl-5 pr-10"
            />
            <span className="inline-block absolute right-0 top-1/2 -translate-y-1/2 px-5 text-white/70">
              %
            </span>
          </div>
        </div>
        {/* Slippage Tolerane --End-- */}
        <div className="flex items-end mt-auto pb-6 space-x-3">
          <svg
            width={24}
            height={24}
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="opacity-50"
          >
            <g clipPath="url(#gitbook_svg__a)">
              <path
                fill="currentColor"
                d="M10.801 17.775a.712.712 0 1 1 .001 1.424.712.712 0 0 1-.001-1.424Zm11.025-4.35a.712.712 0 1 1 .712-.713.738.738 0 0 1-.712.713Zm0-2.888c-1.2 0-2.175.975-2.175 2.175 0 .225.038.45.113.675L12.6 17.212a2.173 2.173 0 0 0-1.8-.937c-.825 0-1.575.487-1.95 1.2L2.401 14.1c-.675-.375-1.2-1.463-1.125-2.513.038-.525.225-.937.488-1.087.187-.113.375-.075.637.037l.038.038c1.725.9 7.312 3.825 7.537 3.937.375.15.563.225 1.2-.075l11.55-6c.188-.075.375-.225.375-.487 0-.338-.337-.488-.337-.488-.675-.3-1.688-.787-2.663-1.237-2.1-.975-4.5-2.1-5.55-2.663-.9-.487-1.65-.075-1.762 0l-.263.113C7.764 6.075 1.464 9.187 1.089 9.412.45 9.787.039 10.575 0 11.55c-.075 1.537.713 3.15 1.838 3.712l6.825 3.525c.15 1.05 1.087 1.875 2.137 1.875 1.2 0 2.137-.937 2.175-2.137l7.5-4.05c.375.3.863.45 1.35.45 1.2 0 2.175-.975 2.175-2.175 0-1.238-.975-2.213-2.175-2.213Z"
              />
            </g>
            <defs>
              <clipPath id="gitbook_svg__a">
                <path fill="#fff" d="M0 0h24v24H0z" />
              </clipPath>
            </defs>
          </svg>
          <div>
            <a href="#" className="underline">
              Learn more
            </a>
            <span className="opacity-50"> about the new features.</span>
          </div>
        </div>
      </div>
      {/** Body --End-- */}
    </div>
  );
};

export default AdvancedSettings;
