import { transferFormAtom } from "@atoms";
import { NetworkType, Token } from "@config/types";
import { useAtom } from "jotai";
import React from "react";

const useTransferForm = () => {
  const [fromData, setFormDate] = useAtom(transferFormAtom);

  const setFromToken = (token: Token) => {
    setFormDate((prev) => {
      return {
        ...prev,
        from: {
          ...prev.from,
          token: token,
        },
        to: {
          ...prev.to,
          token: token,
        },
      };
    });
  };

  const swapFromTo = () => {
    setFormDate((prev) => ({
      ...prev,
      from: {
        ...prev.to,
      },
      to: {
        ...prev.from,
      },
    }));
  };

  const setNetwork = (network: NetworkType, destination: "from" | "to") => {
    setFormDate((prev) => {
      return {
        ...prev,
        [destination]: {
          ...[destination],
          network: network,
        },
      };
    });
  };

  return { setFromToken, fromData, setNetwork, swapFromTo };
};

export default useTransferForm;
