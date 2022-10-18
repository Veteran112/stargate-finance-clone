import { TransferForm } from "@config/types";
import { atom, useAtom } from "jotai";

export const farmsSelectedTokenAtom = atom<string | null>(null);
export const farmsSelectedNetworkAtom = atom<string | null>(null);

export const poolsSelectedTokenAtom = atom<string | null>(null);
export const poolsSelectedNetworkAtom = atom<string | null>(null);

const headerHeightAtom = atom(0);
export const useHeaderHeight = () => useAtom(headerHeightAtom);

export const transferFormAtom = atom<TransferForm>({
  from: {
    token: undefined,
    network: undefined,
  },
  to: {
    token: undefined,
    network: undefined,
  },
});
