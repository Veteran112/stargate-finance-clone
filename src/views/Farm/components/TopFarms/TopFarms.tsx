import NetworkLabel from "@components/NetworkLabel";
import { topFarms } from "@config/constants";
import { useRouter } from "next/router";
import React from "react";

const TopFarms = () => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-[repeat(8,1fr)] md:grid-cols-[repeat(4,1fr)] gap-[13px] overflow-x-auto scrollbar_none">
      {topFarms.map(
        ({ logo, apy, farmName, liquidity, logoSml, lpt, network }, i) => {
          return (
            <div
              className="min-w-[258px] cursor-pointer min-h-[175px] border border-transparent hover:border-white/80 duration-150 rounded-[0.75rem] bg-[#31333C] p-4 relative"
              key={i}
              onClick={() => router.push(`/pool/${farmName}/add`)}
            >
              {/** divider --Start-- */}
              <div className="w-px h-[70px] bg-white/10 absolute left-1/2 -translate-x-1/2 top-1/2 -translate-y-1/2"></div>
              {/** divider --End-- */}

              <div className="flex flex-col h-full gap-3">
                {/** Top --Start-- */}
                <div className="flex flex-[1] justify-between">
                  <div className="flex items-start flex-col justify-between gap-3">
                    {/** Top left --Start-- */}
                    <div className="w-6 h-6 inline-block relative bg-[#d9d9d9] rounded-full">
                      {logo}
                      <div className="w-[14px] h-[14px] border border-[rgb(35_35_35)] rounded-full overflow-hidden absolute right-[-0.125rem] bottom-[-0.125rem]">
                        {logoSml}
                      </div>
                    </div>
                    {/** Top left --End-- */}

                    {/** Bottom left --Start-- */}
                    <div>
                      <p className="text-xs text-[#999999] font-poppins mb-0.5">
                        Farm
                      </p>
                      <h3 className="text-lg font-poppins">{farmName}</h3>
                    </div>
                    {/** Bottom left --End-- */}
                  </div>

                  {/** Top Right --Start-- */}
                  <div className="flex text-right items-end flex-col justify-between gap-3">
                    <div>
                      <NetworkLabel network={network} />
                    </div>
                    <div>
                      <p className="text-xs text-[#999999] font-poppins mb-0.5">
                        APY
                      </p>
                      <h3 className="text-lg font-poppins">{apy}</h3>
                    </div>
                  </div>
                  {/** Top Right --End-- */}
                </div>
                {/** Top --End-- */}

                {/** Bottom Start --Start-- */}
                <div className="flex justify-between">
                  <div>
                    <p className="text-xs text-[#999999] font-poppins mb-0.5">
                      LPT Available to <br /> Stake
                    </p>
                    <p className="text-base font-poppins">{lpt}</p>
                  </div>
                  <div>
                    <p className="text-xs text-[#999999] font-poppins mb-0.5">
                      Liquidity
                    </p>
                    <p className="text-base font-poppins">{liquidity}</p>
                  </div>
                </div>
                {/** Bottom Start --End-- */}
              </div>
            </div>
          );
        },
      )}
    </div>
  );
};

export default TopFarms;
