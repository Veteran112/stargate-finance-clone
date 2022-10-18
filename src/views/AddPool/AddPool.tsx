import NetworkLabel from "@components/NetworkLabel";
import ETH from "@components/Svgs/ETH";
import React from "react";
import { AiOutlineRight } from "react-icons/ai";
import WalletInfoRow from "./components/WalletInfoRow";

function AddPool() {
  return (
    <div className="md:max-w-[400px] w-full mx-auto mb-[100px] container">
      <ul className="flex items-center gap-1 text-[#999999] font-roc-grotesk font-medium leading-6 text-base my-5">
        <li>
          <button className="hover:text-white">Pool</button>
        </li>
        <li>
          <AiOutlineRight size={10} />
        </li>
        <li>
          <button className="text-white">
            ETH<span className="text-xs">OPTIMISM</span>
          </button>
        </li>
        <li>
          <AiOutlineRight size={10} />
        </li>
        <li>
          <button className="hover:text-white">Farms</button>
        </li>
        <li>
          <AiOutlineRight size={10} />
        </li>
        <li>
          <button className="hover:text-white">
            ETH<span className="text-xs">OPTIMISM</span>
          </button>
        </li>
      </ul>

      <div className="w-full bg-[#232323] rounded-2xl overflow-hidden">
        <header className="flex items-center justify-between p-6">
          <h4 className="font-roc-grotesk font-semibold text-white leading-6 text-[20px]">
            Pool ETH
          </h4>
          <NetworkLabel network="ethereum" size="large" />
        </header>
        <main className="p-6 !pt-0">
          <div className="flex items-center gap-5">
            <button className="font-roc-grotesk font-semibold text-white leading-6 text-[18px] underline">
              Add
            </button>
            <button className="font-roc-grotesk font-semibold text-[#999999] leading-6 text-[18px]">
              Remove
            </button>
          </div>

          <div className="pt-5">
            <div className="flex flex-col gap-0.5">
              <label
                htmlFor="total_amount"
                className="font-roboto text-sm text-[#999999] leading-6"
              >
                Total Amount
              </label>
              <div className="relative">
                <div className="w-6 absolute top-1/2 -translate-y-1/2 left-3">
                  <ETH />
                </div>
                <input
                  type="number"
                  id="total_amount"
                  className="bg-[#1A1A1A] w-full p-[13px] border outline-none border-[#CCCCCC]/20 rounded-xl placeholder:text-[#CCCCCC]/50 pl-[42px] focus:border-[#CCCCCC] pr-[78px]"
                  placeholder="0"
                />
                <button
                  type="button"
                  className="outline-none border border-primary text-primary px-2.5 py-1 hover:bg-primary hover:text-white text-xs rounded-md absolute top-1/2 -translate-y-1/2 right-4"
                >
                  MAX
                </button>
              </div>
            </div>
          </div>

          <div className="mt-[100px]">
            <WalletInfoRow text="Pending rewards" background />
            <WalletInfoRow text="LPT Staked" />
            <WalletInfoRow text="Share of Pool" background />
            <WalletInfoRow text="APY" number={"5.83%"} />
            <WalletInfoRow
              text="Pool Liquidity"
              number={"52,186,989.70"}
              background
            />
          </div>

          <button className="bg-primary mt-6 duration-200 font-poppins text-white py-4 w-full rounded-xl flex justify-center items-center gap-2">
            Connect Wallet
          </button>
        </main>
      </div>
    </div>
  );
}

export default AddPool;
