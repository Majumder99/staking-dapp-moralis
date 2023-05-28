import "@/styles/globals.css";
import {
  configureChains,
  WagmiConfig,
  createClient,
  sepolia,
  createConfig,
} from "wagmi";
import { publicProvider } from "wagmi/providers/public";

const { publicClient, webSocketPublicClient } = configureChains(
  [sepolia],
  [publicProvider()]
);

const config = createConfig({
  publicClient,
  webSocketPublicClient,
});

export default function App({ Component, pageProps }) {
  return (
    <>
      <WagmiConfig config={config}>
        <Component {...pageProps} />
      </WagmiConfig>
    </>
  );
}
