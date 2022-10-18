import { useHeaderHeight } from "@atoms";
import React from "react";
import AllPoolsTabs from "./components/AllPoolsTabs";
import TopPoolTabs from "./components/TopPoolTabs/TopPoolTabs";

const Pool = () => {
  const [headerHeight] = useHeaderHeight();
  return (
    <div
      className="strokes_bg mb-[124px]"
      style={{ marginTop: headerHeight, backgroundPositionY: "-200px" }}
    >
      {/** Top section --Start-- */}
      <section className="pt-14">
        <div className="container">
          <h1 className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-poppins text-primary font-medium">
            Connect your wallet to see assets available to stake
          </h1>
          <p className="mt-4 text-base tracking-[0.015625rem] max-w-[950px] text-white font-poppins">
            Add liquidity to Stargate&apos;s omnichain protocol and earn
            stablecoin rewards on every Stargate transfer. Liquidity providers
            can also farm their LP tokens to receive STG token rewards.
          </p>
        </div>
      </section>
      {/** Top section --End-- */}

      <TopPoolTabs />
      <AllPoolsTabs />
    </div>
  );
};

export default Pool;
