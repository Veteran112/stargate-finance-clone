import "../styles/globals.css";
import type { AppProps } from "next/app";
import Header from "@components/Header";
import Footer from "@components/Footer";
import MobileNavogationBar from "@components/MobileNavogationBar";
import { createClient, configureChains, defaultChains, WagmiConfig } from 'wagmi'
import { publicProvider } from 'wagmi/providers/public'


const { provider, webSocketProvider } = configureChains(defaultChains, [publicProvider()])

const client = createClient({
  provider, 
  webSocketProvider,
  autoConnect: true
})

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <WagmiConfig client={client}>
      <Header />
      <Component {...pageProps} />
      <Footer />
      <MobileNavogationBar />
    </WagmiConfig>
  );
}

export default MyApp;
