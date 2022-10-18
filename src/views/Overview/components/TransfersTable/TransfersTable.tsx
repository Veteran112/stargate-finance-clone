import NetworkLabel from "@components/NetworkLabel";
import Select from "@components/Select";
import {
  chainsOptions,
  tokensOptions,
  transferTableDate,
} from "@config/constants";
import { SelectOption } from "@config/types";
import React, { useState } from "react";
import { BsArrowRight } from "react-icons/bs";

type Filter = {
  sourceToken: string;
  destinationToken: string;
  sourceNetwork: string;
  destinationNetwork: string;
};

const TransfersTable = () => {
  const [activeSourceToken, setActiveSourceToken] = useState<SelectOption>(
    chainsOptions[0],
  );
  const [activeDestinationToken, setActiveDestinationToken] =
    useState<SelectOption>(chainsOptions[0]);

  const [activeSourceNetwork, setActiveSourceNetwork] = useState<SelectOption>(
    chainsOptions[0],
  );

  const [activeDestinationNetwork, setActiveDestinationNetwork] =
    useState<SelectOption>(chainsOptions[0]);

  const [filters, setFilters] = useState({
    sourceToken: "all",
    destinationToken: "all",
    sourceNetwork: "all",
    destinationNetwork: "all",
  });

  const addFilter = (key: string, value: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));
  };

  const filterBySourceToken = transferTableDate.filter((d) =>
    filters.sourceToken === "all"
      ? true
      : d.sourceToken === filters.sourceToken.toUpperCase(),
  );

  const filterByDestinationToken = filterBySourceToken.filter((d) =>
    filters.destinationToken === "all"
      ? true
      : d.destinationToken === filters.destinationToken.toUpperCase(),
  );

  const filterBySourceNetwork = filterByDestinationToken.filter((d) =>
    filters.sourceNetwork === "all"
      ? true
      : d.sourceNetwork === filters.sourceNetwork,
  );

  const filterByDestinationNetwork = filterBySourceNetwork.filter((d) =>
    filters.destinationNetwork === "all"
      ? true
      : d.destinationNetwork === filters.destinationNetwork,
  );

  return (
    <div className="!mt-14">
      {/** Header --Start-- */}
      <div className="flex flex-col md:flex-row md:justify-between items-center gap-y-6">
        <h4>Transfers</h4>
        <div className="flex items-center flex-wrap justify-center gap-4 md:gap-6">
          <Select
            label="Source Token"
            onChange={(opt) => {
              setActiveSourceToken(opt);
              addFilter("sourceToken", opt.value);
            }}
            options={tokensOptions}
            value={activeSourceToken}
          />
          <Select
            label="Source Network"
            onChange={(opt) => {
              setActiveSourceNetwork(opt);
              addFilter("sourceNetwork", opt.value);
            }}
            options={chainsOptions}
            value={activeSourceNetwork}
          />
          <Select
            label="Destination Token"
            onChange={(opt) => {
              setActiveDestinationToken(opt);
              addFilter("destinationToken", opt.value);
            }}
            options={tokensOptions}
            value={activeDestinationToken}
          />

          <Select
            label="Destination Network"
            onChange={(opt) => {
              setActiveDestinationNetwork(opt);
              addFilter("destinationNetwork", opt.value);
            }}
            options={chainsOptions}
            value={activeDestinationNetwork}
          />
        </div>
      </div>
      {/** Header --End-- */}

      {/** Table --Start-- */}
      <div className="w-full overflow-x-auto rounded-[0.75rem] mt-4 border-white/20 border">
        <table className="w-full bg-[#31333C] min-w-[490px] all_farms_table">
          <thead>
            <tr className="[&>th]:px-6 text-white [&>th]:font-normal font-poppins text-left [&>th]:h-[69px]">
              <th>Action</th>
              <th>From</th>
              <th>To</th>
              <th>Amount</th>
              <th>Value</th>
              <th>Account</th>
              <th className="text-right">Time</th>
            </tr>
          </thead>

          <tbody>
            {filterByDestinationNetwork.map((transfer, i) => {
              return (
                <tr key={i} className="hover:bg-[#333233] cursor-pointer">
                  <td className="px-6 h-[76px]">
                    <div className="flex items-center gap-2.5">
                      <p>{transfer.sourceToken}</p>
                      <BsArrowRight size={20} />
                      <p>{transfer.destinationToken}</p>
                    </div>
                  </td>
                  <td className="px-6 h-[76px]">
                    <NetworkLabel
                      network={transfer.sourceNetwork}
                      size="large"
                    />
                  </td>
                  <td className="px-6 h-[76px] text-[16px] font-poppins leading-[19px]">
                    <NetworkLabel
                      network={transfer.destinationNetwork}
                      size="large"
                    />
                  </td>
                  <td className="px-6 h-[76px] text-[16px] font-poppins leading-[19px] lg:w-[203px]">
                    {transfer.amount}
                  </td>
                  <td className="px-6 h-[76px] text-[16px] font-poppins leading-[19px] lg:w-[203px]">
                    {transfer.value}
                  </td>
                  <td className="px-6 h-[76px] text-[16px] font-poppins leading-[19px] lg:w-[203px]">
                    {transfer.account}
                  </td>
                  <td className="px-6 h-[76px] text-[16px] font-poppins leading-[19px] text-right lg:w-[203px]">
                    {transfer.time}
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

export default TransfersTable;
