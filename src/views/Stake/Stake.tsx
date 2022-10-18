import { useHeaderHeight } from "@atoms";
import ETH from "@components/Svgs/ETH";
import SmlLogo from "@components/Svgs/SmlLogo";
import { stakePageTabs } from "@config/constants";
import { cx } from "@utils";
import React, { useState } from "react";
import { MdChevronRight } from "react-icons/md";

type VotingPower = {
  text: string;
  icon?: React.ReactNode;
  value: string;
};

const votingPower: VotingPower[] = [
  {
    text: "My STG Locked",
    icon: <SmlLogo />,
    value: "0.0",
  },
  {
    text: "My veSTG Balance",
    icon: <ETH />,
    value: "0.0",
  },
  {
    text: "Average Lock",
    value: "-",
  },
];

function Stake() {
  const [headerHeight] = useHeaderHeight();

  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTabBody = stakePageTabs[activeTabIndex].component;

  return (
    <div
      className="strokes_bg mb-[124px]"
      style={{ backgroundPositionY: "-200px", marginTop: headerHeight }}
    >
      {/** Top section --Start-- */}
      <section className="pt-14">
        <div className="container">
          <h1 className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-poppins text-primary font-medium">
            You don’t have STG available to stake in your wallet.
          </h1>
          <p className="mt-4 text-base tracking-[0.015625rem] max-w-[950px] text-white font-poppins">
            Lock your STG tokens to receive veSTG, the unit of Stargate
            governance voting power. Stargate is governed entirely by Stargate
            token holders via voting escrow.
          </p>
        </div>
      </section>
      {/** Top section --End-- */}

      {/**  --Start-- */}
      <div className="container mt-14 lg:mt-[75px]">
        <div className="flex items-center gap-7 mb-6 overflow-x-auto scrollbar_none whitespace-nowrap">
          {stakePageTabs.map((tab, i) => {
            const isActive = i === activeTabIndex;
            return (
              <button
                onClick={() => setActiveTabIndex(i)}
                key={i}
                className={cx(
                  "font-poppins text-base",
                  isActive ? " text-white" : "text-[#999999] hover:text-white",
                )}
              >
                {tab.title}
              </button>
            );
          })}
        </div>

        {activeTabBody}
      </div>
      {/**  --End-- */}

      {/* Overview section --Start-- */}
      <div className="container my-20 lg:my-[120px]">
        <div className="max-w-[552px] w-full mx-auto">
          <h5 className="text-base text-white font-roc-grotesk font-semibold mb-2">
            Staking Overview
          </h5>

          <div className="w-full rounded-lg bg-[#31333C] p-[1.2rem] space-y-24">
            <div className="space-y-2.5">
              <h2 className="font-roc-grotesk text-2xl leading-[28px] font-medium">
                My Voting power
              </h2>
              <a
                href="#"
                className="text-xs text-white/50 flex items-end hover:underline hover:text-white"
              >
                Learn more on Stargate Dao governance <MdChevronRight />
              </a>
            </div>

            <div className="flex items-center gap-6">
              {votingPower.map(({ icon, text, value }, i) => (
                <div key={i} className="space-y-2">
                  <p className="text-xs text-white/50">{text}</p>
                  <div className="flex items-center gap-1">
                    {icon && <div className="w-4">{icon}</div>}
                    <span>{value}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-3 mt-6">
            <button className="bg-transparent border-2 border-primary hover:bg-primary duration-200 font-poppins text-white py-3.5 w-full rounded-xl flex justify-center items-center gap-2">
              Governance Forum
            </button>
            <button className="bg-primary border-2 hover:bg-transparent border-primary duration-200 font-poppins text-white py-3.5 w-full rounded-xl flex justify-center items-center gap-2">
              Vote on Snapshot
            </button>
          </div>

          <div className="flex justify-center">
            <a
              href="#"
              className="text-sm text-white/50 flex items-end mt-10 hover:underline hover:text-white"
            >
              Learn more on Stargate Dao governance <MdChevronRight />
            </a>
          </div>
        </div>
      </div>
      {/* Overview section --End-- */}
    </div>
  );
}

export default Stake;
