import { farmsSelectedNetworkAtom, farmsSelectedTokenAtom } from "@atoms";
import NetworkLabel from "@components/NetworkLabel";

import { allFarms } from "@config/constants";
import { useAtom } from "jotai";
import { useRouter } from "next/router";

import React from "react";

const AllFarmsTable = () => {
  const router = useRouter();
  const [selectedToken] = useAtom(farmsSelectedTokenAtom);
  const [selectedNetwork] = useAtom(farmsSelectedNetworkAtom);

  const filteredByTokenFarms = allFarms.filter((farm) => {
    if (!selectedToken) return true;

    return farm.name.title === selectedToken;
  });

  const filteredByNetworkFarms = filteredByTokenFarms.filter((farm) => {
    if (!selectedNetwork) return true;

    return farm.network === selectedNetwork;
  });

  return (
    <>
      {/** Table --Start-- */}
      <div className="w-full overflow-x-auto rounded-[0.75rem] mt-4 border-white/20 border">
        <table className="w-full bg-[#31333C] min-w-[490px] all_farms_table">
          <thead>
            <tr className="[&>th]:px-8 text-white [&>th]:font-normal font-poppins text-left [&>th]:h-[69px]">
              <th>Name</th>
              <th>Network</th>
              <th>Liquidity</th>
              <th className="text-right lg:w-[203px]">APY</th>
            </tr>
          </thead>

          <tbody>
            {filteredByNetworkFarms.map((farm, i) => {
              return (
                <tr
                  onClick={() => router.push("/pool/ETH/add")}
                  key={i}
                  className="hover:bg-[#333233] cursor-pointer"
                >
                  <td className="px-8 h-[76px]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6">{farm.name.icon}</div>
                      <p className="text-[16px] font-poppins leading-[19px]">
                        {farm.name.title}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 h-[76px]">
                    <NetworkLabel network={farm.network} size="large" />
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-poppins leading-[19px]">
                    {farm.liquidity}
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-poppins leading-[19px] text-right lg:w-[203px]">
                    {farm.apy}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/** Table --End-- */}
    </>
  );
};

export default AllFarmsTable;
