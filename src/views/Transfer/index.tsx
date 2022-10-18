import { useHeaderHeight } from "@atoms";
import useTransferForm from "@hooks/useTransferForm";
import React, { useState } from "react";
import { MdOutlineTune } from "react-icons/md";
import AdvancedSettings from "./components/AdvancedSettings";
import NetworkSelect from "./components/NetworkSelect";
import TokenSelect from "./components/TokenSelect";
import YouWillReceiveDropdown from "./components/YouWillReceiveDropdown";

const Transfer = () => {
  const [isOpenAdvancedSettings, setIsOpenAdvancedSettings] = useState(false);
  const { setFromToken, fromData, setNetwork, swapFromTo } = useTransferForm();
  const [headerHeight] = useHeaderHeight();
  return (
    <div
      style={{ marginTop: headerHeight }}
      className="py-10 lg:py-20 flex justify-center container"
    >
      <div className="w-[545px] bg-[#31333C] border border-white/20 rounded-[30px] overflow-hidden relative">
        {/** Header --Start-- */}
        <div className="flex justify-between items-center px-8 py-5 border-b border-white/20">
          <h1 className="text-xl font-semibold">Transfer</h1>
          <button onClick={() => setIsOpenAdvancedSettings(true)}>
            <MdOutlineTune size={24} />
          </button>
          <AdvancedSettings
            open={isOpenAdvancedSettings}
            onClose={() => setIsOpenAdvancedSettings(false)}
          />
        </div>
        {/** Header --End-- */}

        {/** Body --Start-- */}
        <div className="px-[33px] py-9">
          {/** From --Start-- */}
          <div>
            <p className="mb-4">From</p>
            <div className="flex">
              <TokenSelect
                onSelect={setFromToken}
                value={fromData.from.token}
              />
              <NetworkSelect
                onSelect={(network) => setNetwork(network, "from")}
                value={fromData.from.network}
              />
            </div>
          </div>
          {/** From --End-- */}

          {/** Swap Button --Start-- */}
          <div className="cursor-pointer my-7">
            <svg
              onClick={swapFromTo}
              width={39}
              height={39}
              viewBox="0 0 39 39"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width={39} height={39} rx="19.5" fill="#3C344B" />
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M16.2884 11.7316C16.4269 11.8316 16.6503 12.0612 16.6503 12.0612C17.5173 12.8738 18.8232 14.8949 19.2425 15.9204C19.2513 15.9204 19.5 16.5301 19.5098 16.8201V16.8587C19.5098 17.3031 19.2611 17.7188 18.8612 17.9316C18.6964 18.0193 18.2954 18.1009 18.102 18.1403C18.0379 18.1533 17.9966 18.1617 17.9942 18.1642C17.4227 18.2513 16.5459 18.3087 15.5833 18.3087C14.5729 18.3087 13.6581 18.2513 13.0954 18.1444C13.0856 18.1444 12.5717 18.0385 12.4 17.9702C12.1523 17.8643 11.9426 17.6703 11.809 17.4288C11.7134 17.2358 11.6666 17.0319 11.6666 16.8201C11.6754 16.5974 11.8188 16.1817 11.8851 16.0174C12.3045 14.9336 13.6767 12.8639 14.5154 12.0711C14.6025 11.9827 14.7017 11.89 14.7707 11.8256C14.8075 11.7912 14.8357 11.7648 14.8489 11.7514C15.0586 11.5871 15.3161 11.5 15.5931 11.5C15.8398 11.5 16.0875 11.5772 16.2884 11.7316ZM25.1905 17.4682C25.1905 17.9047 24.8423 18.258 24.4122 18.258C23.9821 18.258 23.6339 17.9047 23.6339 17.4682L23.4194 13.6525C23.4194 13.0962 23.8641 12.6458 24.4122 12.6458C24.9603 12.6458 25.4041 13.0962 25.4041 13.6525L25.1905 17.4682ZM27.5999 20.0297C27.8476 20.1366 28.0573 20.3296 28.1909 20.5711C28.2865 20.7641 28.3333 20.968 28.3333 21.1808C28.3245 21.4025 28.1812 21.8192 28.1139 21.9835C27.6955 23.0664 26.3223 25.1361 25.4845 25.9299C25.3988 26.0162 25.3015 26.107 25.2327 26.1712C25.1942 26.2071 25.1646 26.2347 25.151 26.2486C24.9403 26.4129 24.6838 26.5 24.4078 26.5C24.1591 26.5 23.9114 26.4228 23.7115 26.2674C23.573 26.1684 23.3497 25.9388 23.3497 25.9388C22.4817 25.1271 21.1767 23.105 20.7574 22.0795C20.7476 22.0795 20.4999 21.4708 20.4902 21.1808V21.1422C20.4902 20.6968 20.7379 20.2811 21.1387 20.0683C21.3032 19.9814 21.7029 19.8996 21.8968 19.8599L21.8968 19.8599C21.9615 19.8467 22.0033 19.8381 22.0057 19.8357C22.5772 19.7486 23.454 19.6911 24.4166 19.6911C25.427 19.6911 26.3418 19.7486 26.9045 19.8555C26.9133 19.8555 27.4282 19.9614 27.5999 20.0297ZM15.5879 19.7421C15.1578 19.7421 14.8096 20.0955 14.8096 20.532L14.5951 24.3476C14.5951 24.9038 15.0398 25.3542 15.5879 25.3542C16.136 25.3542 16.5798 24.9038 16.5798 24.3476L16.3662 20.532C16.3662 20.0955 16.018 19.7421 15.5879 19.7421Z"
                fill="white"
              />
            </svg>
          </div>
          {/** Swap Button --End-- */}
          {/** To --Start-- */}
          <div>
            <p className="mb-4">To</p>
            <div className="flex">
              <TokenSelect onSelect={setFromToken} value={fromData.to.token} />
              <NetworkSelect
                onSelect={(network) => setNetwork(network, "to")}
                value={fromData.to.network}
              />
            </div>
          </div>
          {/** To --End-- */}

          {/** Total Amount --Start-- */}
          <div className="mt-7">
            <p className="mb-3">Total Amount</p>
            <div className="relative">
              <input
                type="text"
                className="border border-white/10 rounded-xl focus:border-white/50 h-[55px] pl-5 outline-none bg-transparent w-full pr-[90px]"
                placeholder="0.0"
              />

              <button className="outline-none border border-primary text-primary px-3 py-1 hover:bg-primary hover:text-white text-sm rounded-md absolute top-1/2 -translate-y-1/2 right-5">
                MAX
              </button>
            </div>
          </div>
          {/** Total Amount --End-- */}

          <YouWillReceiveDropdown />

          <button className="bg-primary mt-7 w-full duration-200 font-poppins text-white py-4 px-5 justify-center rounded-xl flex items-center gap-2">
            <svg
              width={16}
              height={14}
              className="shrink-0"
              viewBox="0 0 16 14"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                clipRule="evenodd"
                d="M12.3267 4.28635H15.5C15.5 1.73844 13.9733 0.25 11.3867 0.25H4.61333C2.02667 0.25 0.5 1.73844 0.5 4.25385V9.74615C0.5 12.2616 2.02667 13.75 4.61333 13.75H11.3867C13.9733 13.75 15.5 12.2616 15.5 9.74615V9.51216H12.3267C10.8539 9.51216 9.66 8.34814 9.66 6.91225C9.66 5.47637 10.8539 4.31235 12.3267 4.31235V4.28635ZM12.3267 5.40431H14.94C15.2493 5.40431 15.5 5.64875 15.5 5.95029V7.84822C15.4964 8.14829 15.2478 8.39069 14.94 8.3942H12.3867C11.6411 8.40398 10.9891 7.90628 10.82 7.19824C10.7353 6.75872 10.8542 6.30517 11.1448 5.95916C11.4354 5.61315 11.868 5.41006 12.3267 5.40431ZM12.44 7.39974H12.6867C13.0033 7.39974 13.26 7.14947 13.26 6.84076C13.26 6.53204 13.0033 6.28178 12.6867 6.28178H12.44C12.2886 6.28004 12.1427 6.33748 12.035 6.44128C11.9273 6.54508 11.8667 6.6866 11.8667 6.83426C11.8666 7.14404 12.1223 7.39617 12.44 7.39974ZM4.05333 4.28635H8.28667C8.60331 4.28635 8.86 4.03609 8.86 3.72737C8.86 3.41866 8.60331 3.16839 8.28667 3.16839H4.05333C3.73928 3.16837 3.48365 3.4147 3.48 3.72087C3.47998 4.03066 3.73561 4.28279 4.05333 4.28635Z"
                fill="white"
              />
            </svg>
            Connect Wallet
          </button>
        </div>
        {/** Body --End-- */}
      </div>
    </div>
  );
};

export default Transfer;
