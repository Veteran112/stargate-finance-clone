import React, { useState } from "react";
import { cx } from "@utils";
import Select from "@components/Select";

import { allPoolsTabs, chainsOptions, tokensOptions } from "@config/constants";
import { useAtom } from "jotai";
import { poolsSelectedNetworkAtom, poolsSelectedTokenAtom } from "@atoms";

const AllPoolsTabs = () => {
  const [activeChain, setActiveChain] = useState(chainsOptions[0]);
  const [activeToken, setActiveToken] = useState(tokensOptions[0]);
  const [activeTabIndex, setActiveTabIndex] = useState(0);

  const activeTabBody = allPoolsTabs[activeTabIndex].component;

  const [, setSelectedToken] = useAtom(poolsSelectedTokenAtom);
  const [, setSelectedNetwork] = useAtom(poolsSelectedNetworkAtom);

  return (
    <section className="mt-[64px]">
      <div className="container">
        {/** Tabs And Select Dropdown --Start-- */}
        <div className="flex items-center flex-col md:flex-row justify-between">
          <div className="flex items-center gap-7 mb-6">
            {allPoolsTabs.map((tab, i) => {
              const isActive = i === activeTabIndex;
              return (
                <button
                  onClick={() => setActiveTabIndex(i)}
                  key={i}
                  className={cx(
                    "font-poppins text-base",
                    isActive
                      ? " text-white"
                      : "text-[#999999] hover:text-white",
                  )}
                >
                  {tab.title}
                </button>
              );
            })}
            <p className="text-[#999999]">TVL: $472,718,641.22</p>
          </div>

          <div className="flex items-center flex-wrap gap-4 md:gap-6">
            <Select
              label="Token"
              onChange={(opt) => {
                setActiveToken(opt);
                setSelectedToken(opt.value === "all" ? null : opt.label);
              }}
              options={tokensOptions}
              value={activeToken}
            />
            <Select
              label="Network"
              onChange={(opt) => {
                setActiveChain(opt);
                setSelectedNetwork(opt.value === "all" ? null : opt.value);
              }}
              options={chainsOptions}
              value={activeChain}
            />
          </div>
        </div>
        {/** Tabs And Select Dropdown --End-- */}

        {activeTabBody}
      </div>
    </section>
  );
};

export default AllPoolsTabs;
