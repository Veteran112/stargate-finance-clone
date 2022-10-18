import { farmTabs } from "@config/constants";
import { cx } from "@utils";
import React, { useState } from "react";
import { useWeb3React } from '@web3-react/core'

const FarmTab = () => {
  const [activeTabIndex, setActiveTabIndex] = useState(3);
  const { account } = useWeb3React();
  console.log(account, 'account')
  const activeTabBody = farmTabs[activeTabIndex].component;
  return (
    <section className="mt-24">
      <div className="container">
        <div className="flex items-center gap-7 mb-6 overflow-x-auto scrollbar_none whitespace-nowrap">
          {farmTabs.map((tab, i) => {
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
    </section>
  );
};

export default FarmTab;
