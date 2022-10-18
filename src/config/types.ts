import { ReactNode } from "react";

export type FarmTab = {
  title: string;
  component: ReactNode;
};

export type Netoworks =
  | "optimism"
  | "avalanche"
  | "bnb"
  | "arbitrum"
  | "ethereum"
  | "fantom"
  | "matic";

export type Farm = {
  logo: ReactNode;
  logoSml: ReactNode;
  network: Netoworks;
  farmName: string;
  apy: string;
  lpt: string;
  liquidity: string;
};

export type Network = {
  key: Netoworks;
  name: string;
  icon: ReactNode;
  bgColor: string;
  color: string;
};

export type HeaderNavigationItems = {
  text: string;
  url: string;
  icon?: ReactNode;
};

export type SelectOption = {
  label: string;
  icon?: ReactNode;
  value: string;
};
export type SelectProps = {
  options: SelectOption[];
  value: SelectOption;
  onChange: (option: SelectOption) => void;
  label: string;
};

export type AllFarm = {
  name: {
    title: string;
    icon: ReactNode;
  };
  network: Netoworks;
  liquidity: string;
  apy: string;
};

export type AllPools = {
  name: {
    title: string;
    icon: ReactNode;
  };
  network: Netoworks;
  liquidity: string;
  vol24: string;
  vol7d: string;
};

export type RoadmapBlockProps = {
  progressPercentage: number;
  labelText: string;
  title: string;
  subtitle: string;
  img: {
    src: string;
    width: number;
    height: number;
  };
  layout?: "reverse";
};

export type FooterLinks = {
  title: string;
  links: {
    text: string;
    url: string;
  }[];
};

export type Token = {
  name: string;
  logo: ReactNode;
  value: string;
};

export type NetworkType = {
  name: string;
  logo: ReactNode;
  value: string;
};
export type SelectTokenDrawerProps = {
  open: boolean;
  onClose: () => void;
  onSelect: (option: Token) => void;
};
export type AdvancedSettingsProps = {
  open: boolean;
  onClose: () => void;
};

export type TransferForm = {
  from: {
    token: Token | undefined;
    network: NetworkType | undefined;
  };
  to: {
    token: Token | undefined;
    network: NetworkType | undefined;
  };
};

export type TokenSelectProps = {
  value: Token | undefined;
  onSelect: (token: Token) => void;
};

export type NetworkSelectProps = {
  value: NetworkType | undefined;
  onSelect: (token: NetworkType) => void;
};

export type TransfersTableType = {
  sourceToken: string;
  destinationToken: string;
  sourceNetwork: Netoworks;
  destinationNetwork: Netoworks;
  amount: string;
  value: string;
  account: string;
  time: string;
};
