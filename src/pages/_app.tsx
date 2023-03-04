import type { AppProps } from "next/app";

import { Hind_Siliguri } from "@next/font/google";

import "../styles/globals.css";

const HindSiliguri = Hind_Siliguri({ subsets: ["latin"], weight: ["300"], variable: "--font-body" });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main className={HindSiliguri.variable}>
      <Component {...pageProps} />
    </main>
  );
}
