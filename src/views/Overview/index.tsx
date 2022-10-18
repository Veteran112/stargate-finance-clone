import { useHeaderHeight } from "@atoms";
import dynamic from "next/dynamic";
import React from "react";
import PoolsTable from "./components/PoolsTable";
import TransfersTable from "./components/TransfersTable";
const TVLChart = dynamic(() => import("./components/TVLChart"), { ssr: false });
const VolumeChart = dynamic(() => import("./components/VolumeChart"), {
  ssr: false,
});
const TransactionsChart = dynamic(
  () => import("./components/TransactionsChart"),
  {
    ssr: false,
  },
);

const Overview = () => {
  const [headerHeight] = useHeaderHeight();
  return (
    <div style={{ marginTop: headerHeight }}>
      {/** Top section --Start-- */}
      <section className="pt-14">
        <div className="container">
          <h1 className="text-[24px] leading-[30px] lg:text-[30px] lg:leading-[40px] font-poppins text-primary font-medium">
            Protocol Overview
          </h1>
          <p className="mt-4 text-base tracking-[0.015625rem] max-w-[950px] text-white font-poppins">
            Explore Stargate and gain insight to all of the liquidity transport
            protocol’s activity across 7 chains
          </p>
        </div>
      </section>
      {/** Top section --End-- */}

      <div className="container my-16 space-y-4">
        <TVLChart />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <VolumeChart />
          <TransactionsChart />
        </div>
        <TransfersTable />
        <PoolsTable />
      </div>
    </div>
  );
};

export default Overview;
