import NetworkLabel from "@components/NetworkLabel";
import { allPools } from "@config/constants";
import React from "react";

const PoolsTable = () => {
  return (
    <div className="!mt-14">
      <p className="">Pools</p>
      {/** Table --Start-- */}
      <div className="w-full overflow-x-auto rounded-[0.75rem] mt-4 border-white/20 border">
        <table className="w-full bg-[#31333C] min-w-[490px] all_farms_table">
          <thead>
            <tr className="[&>th]:px-8 text-white [&>th]:font-normal font-poppins text-left [&>th]:h-[69px]">
              <th>Name</th>
              <th>Network</th>
              <th>Liquidity</th>
              <th>Volume (24h)</th>
              <th>Volume (7d)</th>
            </tr>
          </thead>

          <tbody>
            {allPools.map((pool, i) => {
              return (
                <tr key={i} className="hover:bg-[#333233] cursor-pointer">
                  <td className="px-8 h-[76px]">
                    <div className="flex items-center gap-2.5">
                      <div className="w-6">{pool.name.icon}</div>
                      <p className="text-[16px] font-poppins leading-[19px]">
                        {pool.name.title}
                      </p>
                    </div>
                  </td>
                  <td className="px-8 h-[76px]">
                    <NetworkLabel network={pool.network} size="large" />
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-poppins leading-[19px]">
                    {pool.liquidity}
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-poppins leading-[19px]">
                    {pool.vol24}
                  </td>
                  <td className="px-8 h-[76px] text-[16px] font-poppins leading-[19px]">
                    {pool.vol7d}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      {/** Table --End-- */}
    </div>
  );
};

export default PoolsTable;
