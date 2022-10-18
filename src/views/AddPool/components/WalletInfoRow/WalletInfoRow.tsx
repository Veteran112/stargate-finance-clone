import classNames from "classnames";
import React from "react";

type WalletInfoRowProps = {
  text: string;
  number?: number | string;
  background?: boolean;
};

function WalletInfoRow({
  number,
  text,
  background = false,
}: WalletInfoRowProps) {
  return (
    <div
      className={classNames(
        "px-4 py-[14px] rounded flex items-center justify-between",
        background && "bg-[#323232]",
      )}
    >
      <div className="text-[#999999] text-sm leading-5 font-roboto tracking-[0.00625rem]">
        {text}
      </div>

      <div className="text-[#fff] text-sm leading-5 font-roboto">
        {number ? number : "-"}
      </div>
    </div>
  );
}

export default WalletInfoRow;
