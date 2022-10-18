import React from "react";

const YourPoolsTable = () => {
  return (
    <div className="w-full overflow-x-auto rounded-[0.75rem] mt-4">
      <table className="w-full bg-[#232323]">
        <thead>
          <tr className="[&>th]:px-8 text-[#999] text-sm [&>th]:font-normal font-poppins text-left [&>th]:h-[69px]">
            <th>Name</th>
            <th>Network</th>
            <th>Pool Share</th>
            <th>Liquidity</th>
            <th>Your Pool Tokens</th>
            <th>Pooled Tokens</th>
            <th>Volume (24h)</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default YourPoolsTable;
