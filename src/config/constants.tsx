import AirbitrumChain from "@components/Svgs/AirbitrumChain";
import Arbitrum from "@components/Svgs/Arbitrum";
import Avalanche from "@components/Svgs/Avalanche";
import AvalancheChain from "@components/Svgs/AvalancheChain";
import BNB from "@components/Svgs/BNB";
import BUSD from "@components/Svgs/BUSD";
import ETH from "@components/Svgs/ETH";
import Ethereum from "@components/Svgs/Ethereum";
import Fantom from "@components/Svgs/Fantom";
import FantomChain from "@components/Svgs/FantomChain";
import FantomCircular from "@components/Svgs/FantomCircular";
import Matic from "@components/Svgs/Matic";
import MaticTransparent from "@components/Svgs/MaticTransparent";
import OP from "@components/Svgs/OP";
import Optimism from "@components/Svgs/Optimism";
import OptimismChain from "@components/Svgs/OptimismChain";
import SmlLogo from "@components/Svgs/SmlLogo";
import USDC from "@components/Svgs/USDC";
import USDT from "@components/Svgs/USDT";
import AllFarmsTable from "@views/Farm/components/AllFarmsTable";
import TabEmptyBoxRow from "@views/Farm/components/TabEmptyBoxRow";
import { BiBarChartSquare, BiTransfer } from "react-icons/bi";
import { MdWaves } from "react-icons/md";

import TopFarms from "@views/Farm/components/TopFarms";
import YourFarmsTable from "@views/Farm/components/YourFarmsTable";

import {
  AllFarm,
  AllPools,
  Farm,
  FarmTab,
  FooterLinks,
  HeaderNavigationItems,
  Network,
  RoadmapBlockProps,
  SelectOption,
  TransfersTableType,
} from "./types";
import AllPoolsTable from "@views/Pool/components/AllPoolsTable";
import YourPoolsTable from "@views/Pool/components/YourPoolsTable";

export const farmTabs: FarmTab[] = [
  {
    title: "Your Farms",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Pending rewards",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Available",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Top Farms",
    component: <TopFarms />,
  },
];

export const stakePageTabs: FarmTab[] = [
  {
    title: "Available",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Your Stakes",
    component: <TabEmptyBoxRow />,
  },
];

export const topPoolTabs: FarmTab[] = [
  {
    title: "Your Pools",
    component: <TabEmptyBoxRow />,
  },
  {
    title: "Top Pools",
    component: <TopFarms />,
  },
];

export const allFarmsTabs: FarmTab[] = [
  {
    title: "All Farms",
    component: <AllFarmsTable />,
  },
  {
    title: "Your Farms",
    component: <YourFarmsTable />,
  },
];

export const allPoolsTabs: FarmTab[] = [
  {
    title: "All Pools",
    component: <AllPoolsTable />,
  },
  {
    title: "Your Pools",
    component: <YourPoolsTable />,
  },
];

export const topFarms: Farm[] = [
  {
    logo: <USDC />,
    logoSml: <OP />,
    network: "optimism",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "avalanche",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "bnb",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "arbitrum",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDT />,
    logoSml: <SmlLogo />,
    network: "ethereum",
    farmName: "USDT",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <FantomCircular />,
    logoSml: <OP />,
    network: "optimism",
    farmName: "ETH",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDC />,
    logoSml: <SmlLogo />,
    network: "fantom",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
  {
    logo: <USDC />,
    logoSml: <SmlLogo />,
    network: "avalanche",
    farmName: "USDC",
    apy: "6.72%",
    lpt: "0.00",
    liquidity: "$10.1M",
  },
];

export const networks: Network[] = [
  {
    key: "optimism",
    bgColor: "rgb(255, 196, 203)",
    color: "rgb(141, 22, 23)",
    icon: <Optimism />,
    name: "Optimism",
  },
  {
    key: "avalanche",
    bgColor: "rgb(255, 196, 203)",
    color: "rgb(141, 22, 23)",
    icon: <Avalanche />,
    name: "Avalanche",
  },
  {
    key: "bnb",
    bgColor: "rgb(242, 225, 185)",
    color: "rgb(137, 97, 0)",
    icon: <BNB />,
    name: "BNB",
  },
  {
    key: "arbitrum",
    bgColor: "rgb(192, 195, 201)",
    color: "rgb(14, 24, 44)",
    icon: <Arbitrum />,
    name: "Arbitrum",
  },
  {
    key: "ethereum",
    bgColor: "rgb(208, 216, 249)",
    color: "rgb(52, 70, 139)",
    icon: <Ethereum />,
    name: "Ethereum",
  },
  {
    key: "fantom",
    bgColor: "rgb(186, 210, 255)",
    color: "rgb(52, 70, 139)",
    icon: <Fantom />,
    name: "Fantom",
  },
  {
    key: "matic",
    bgColor: "rgb(218, 200, 247)",
    color: "rgb(75, 43, 129)",
    icon: <MaticTransparent />,
    name: "Matic",
  },
];
export const farms: Farm[] = [];

export const headerNavigationItems: HeaderNavigationItems[] = [
  {
    text: "Transfer",
    url: "/transfer",
    icon: <BiTransfer size={18} />,
  },
  {
    text: "Pool",
    url: "/pool",
    icon: <MdWaves size={18} />,
  },
  {
    text: "Farming",
    url: "/farm",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="16"
        className="scale-[0.9]"
      >
        <path
          d="M15 10.8V9a2.865 2.865 0 0 0-1-2.2V4h1V2h-2a.945.945 0 0 0-1 1v3h-1.3L8.9.7A.961.961 0 0 0 8 0H1v2h2v5.3a4.552 4.552 0 0 0-3 4.2A4.475 4.475 0 0 0 8.7 13H10a3 3 0 0 0 6 0 2.865 2.865 0 0 0-1-2.2ZM5 2h2.3l1.3 4H5Zm-.5 12a2.5 2.5 0 0 1 0-5 2.5 2.5 0 0 1 0 5Zm8.5 0a1 1 0 1 1 1-1 .945.945 0 0 1-1 1Z"
          fill="currentColor"
        ></path>
      </svg>
    ),
  },
  {
    text: "Stake",
    url: "/stake",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width={16}
        height="13.995"
        className="jss853"
      >
        <g fill="currentColor">
          <path d="m15.082 8.166-5.8 3.478a2.5 2.5 0 0 1-2.57 0L.918 8.166l-.675.4a.5.5 0 0 0 0 .858l7.5 4.5a.5.5 0 0 0 .514 0l7.5-4.5a.5.5 0 0 0 0-.858Z" />
          <path d="m15.757 4.571-7.5-4.5a.5.5 0 0 0-.514 0l-7.5 4.5a.5.5 0 0 0 0 .858l7.5 4.5a.5.5 0 0 0 .514 0l7.5-4.5a.5.5 0 0 0 0-.858Z" />
        </g>
      </svg>
    ),
  },
  {
    text: "Overview",
    url: "/overview",
    icon: <BiBarChartSquare size={18} />,
  },
];

export const tokensOptions: SelectOption[] = [
  {
    label: "All Tokens",
    value: "all",
  },
  {
    label: "USDC",
    value: "usdc",
    icon: <USDC />,
  },
  {
    label: "USDT",
    value: "usdt",
    icon: <USDT />,
  },
  {
    label: "ETH",
    value: "eth",
    icon: <ETH />,
  },
  {
    label: "BUSD",
    value: "busd",
    icon: <BUSD />,
  },
];

export const chainsOptions: SelectOption[] = [
  {
    label: "All Chains",
    value: "all",
  },
  {
    label: "Ethereum",
    value: "ethereum",
    icon: <ETH />,
  },
  {
    label: "BNB Chain",
    value: "bnb",
    icon: <BNB />,
  },
  {
    label: "Avalanche",
    value: "avalanche",
    icon: <AvalancheChain />,
  },
  {
    label: "Matic",
    value: "matic",
    icon: <Matic />,
  },
  {
    label: "Arbitrum",
    value: "arbitrum",
    icon: <AirbitrumChain />,
  },
  {
    label: "Optimism",
    value: "optimism",
    icon: <OptimismChain />,
  },
  {
    label: "Fantom",
    value: "fantom",
    icon: <FantomChain />,
  },
];

export const allFarms: AllFarm[] = [
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    apy: "4.11%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    apy: "4.11%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "ethereum",
    liquidity: "$22,439,267.39",
    apy: "4.43%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "bnb",
    liquidity: "$34,558,726.87",
    apy: "5.41%",
  },
  {
    name: {
      title: "BUSD",
      icon: <BUSD />,
    },
    network: "bnb",
    liquidity: "$39,274,392.06",
    apy: "4.24%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "avalanche",
    liquidity: "$56,697,899.56",
    apy: "4.51%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "avalanche",
    liquidity: "$44,507,384.31",
    apy: "6.29%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "matic",
    liquidity: "$18,329,205.78",
    apy: "3.47%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "matic",
    liquidity: "$19,406,942.99",
    apy: "3.22%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "arbitrum",
    liquidity: "$42,814,735.95",
    apy: "4.11%",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "arbitrum",
    liquidity: "$12,366,697.77",
    apy: "5.76%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "arbitrum",
    liquidity: "$2,758,725.42",
    apy: "2.15%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "fantom",
    liquidity: "$21,692,964.17",
    apy: "4.73%",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "optimism",
    liquidity: "$10,201,660.86",
    apy: "6.57%",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "optimism",
    liquidity: "$1,174,941.75",
    apy: "5.05%",
  },
];

export const allPools: AllPools[] = [
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },

  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "ethereum",
    liquidity: "$90,482,975.07",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "ethereum",
    liquidity: "$22,439,267.39",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "bnb",
    liquidity: "$34,558,726.87",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "BUSD",
      icon: <BUSD />,
    },
    network: "bnb",
    liquidity: "$39,274,392.06",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "avalanche",
    liquidity: "$56,697,899.56",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "avalanche",
    liquidity: "$44,507,384.31",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "matic",
    liquidity: "$18,329,205.78",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "matic",
    liquidity: "$19,406,942.99",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "arbitrum",
    liquidity: "$42,814,735.95",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDT",
      icon: <USDT />,
    },
    network: "arbitrum",
    liquidity: "$12,366,697.77",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "arbitrum",
    liquidity: "$2,758,725.42",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "fantom",
    liquidity: "$21,692,964.17",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "USDC",
      icon: <USDC />,
    },
    network: "optimism",
    liquidity: "$10,201,660.86",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
  {
    name: {
      title: "ETH",
      icon: <ETH />,
    },
    network: "optimism",
    liquidity: "$1,174,941.75",
    vol24: "$9,775,287.88",
    vol7d: "$13,518,789.85",
  },
];

export const transferTableDate: TransfersTableType[] = [
  {
    sourceToken: "USDT",
    destinationToken: "USDC",
    sourceNetwork: "ethereum",
    destinationNetwork: "arbitrum",
    amount: "39.98",
    value: "$40.00",
    account: "0x8bfb…b8c8",
    time: "2m ago",
  },
  {
    sourceToken: "USDC",
    destinationToken: "USDT",
    sourceNetwork: "avalanche",
    destinationNetwork: "bnb",
    amount: "17.61",
    value: "$17.62",
    account: "0x3ef8…b328",
    time: "1 m ago",
  },
  {
    sourceToken: "ETH",
    destinationToken: "ETH",
    sourceNetwork: "ethereum",
    destinationNetwork: "optimism",
    amount: "0.08",
    value: "$105.03",
    account: "0x150f...2376",
    time: "7m ago",
  },
  {
    sourceToken: "USDC",
    destinationToken: "USDT",
    sourceNetwork: "avalanche",
    destinationNetwork: "bnb",
    amount: "17.61",
    value: "$17.62",
    account: "0x3ef8…b328",
    time: "1 m ago",
  },
  {
    sourceToken: "USDT",
    destinationToken: "USDC",
    sourceNetwork: "ethereum",
    destinationNetwork: "arbitrum",
    amount: "39.98",
    value: "$40.00",
    account: "0x8bfb…b8c8",
    time: "2m ago",
  },
  {
    sourceToken: "USDT",
    destinationToken: "USDC",
    sourceNetwork: "ethereum",
    destinationNetwork: "arbitrum",
    amount: "39.98",
    value: "$40.00",
    account: "0x8bfb…b8c8",
    time: "2m ago",
  },
  {
    sourceToken: "USDC",
    destinationToken: "USDT",
    sourceNetwork: "avalanche",
    destinationNetwork: "bnb",
    amount: "17.61",
    value: "$17.62",
    account: "0x3ef8…b328",
    time: "1 m ago",
  },
  {
    sourceToken: "ETH",
    destinationToken: "ETH",
    sourceNetwork: "ethereum",
    destinationNetwork: "optimism",
    amount: "0.08",
    value: "$105.03",
    account: "0x150f...2376",
    time: "7m ago",
  },
  {
    sourceToken: "USDC",
    destinationToken: "USDT",
    sourceNetwork: "avalanche",
    destinationNetwork: "bnb",
    amount: "17.61",
    value: "$17.62",
    account: "0x3ef8…b328",
    time: "1 m ago",
  },
  {
    sourceToken: "USDT",
    destinationToken: "USDC",
    sourceNetwork: "ethereum",
    destinationNetwork: "arbitrum",
    amount: "39.98",
    value: "$40.00",
    account: "0x8bfb…b8c8",
    time: "2m ago",
  },
];

export const roadmapBlocks: RoadmapBlockProps[] = [
  {
    img: {
      src: "/img/guennyou-01.png",
      width: 1555,
      height: 1104,
    },
    labelText: "Transfer",
    title:
      "Swap 1:1 native assets cross-chain, accessing Stargate’s unified liquidity pools.",
    subtitle:
      "Stargate transfers have instant guaranteed finality; a transfer submitted on the source chain is guaranteed on the destination.",
    progressPercentage: 30,
  },
  {
    img: {
      src: "/img/guennyou-02.png",
      width: 1551,
      height: 967,
    },
    labelText: "Pools",
    title:
      "Add liquidity to Stargate’s Omnichain protocol and earn stablecoin rewards on every Stargate transfer.",
    subtitle:
      "Liquidity providers can also farm their LP tokens to receive STG token rewards.",
    progressPercentage: 50,
    layout: "reverse",
  },
  {
    img: {
      src: "/img/guennyou-03.png",
      width: 1554,
      height: 964,
    },
    labelText: "Farms",
    title:
      "Stargate liquidity providers can farm their LP tokens in exchange for STG rewards.",
    subtitle: "Earn STG and become a member of the Stargate community.",
    progressPercentage: 70,
  },
  {
    img: {
      src: "/img/guennyou-04.png",
      width: 1554,
      height: 967,
    },
    labelText: "Stake",
    title:
      "STG holders can lock their STG tokens to receive veSTG, Stargate’s governance token.",
    subtitle:
      "The longer users stake their STG tokens, the more veSTG they will receive.",
    progressPercentage: 100,
    layout: "reverse",
  },
];

export const footerLinks: { [key: string]: FooterLinks } = {
  protocol: {
    title: "Protocol",
    links: [
      {
        text: "Snapshot",
        url: "#",
      },
      {
        text: "Commonwealth",
        url: "#",
      },
      {
        text: "Gitbook",
        url: "#",
      },
    ],
  },
  community: {
    title: "Community",
    links: [
      {
        text: "Discord",
        url: "#",
      },
      {
        text: "Telegram",
        url: "#",
      },
      {
        text: "Meduim",
        url: "#",
      },
      {
        text: "Twitter",
        url: "#",
      },
    ],
  },
  resources: {
    title: "Resources",
    links: [
      {
        text: "Widget",
        url: "#",
      },
      {
        text: "Media Kit",
        url: "#",
      },
    ],
  },
};
