import "@/styles/globals.css";
import { Inter } from "next/font/google";
import { ApolloProvider } from "@apollo/client";
import { client } from "../lib/apollo";
import type { AppProps } from "next/app";
import Head from "next/head";

const inter = Inter({
  subsets: ["latin"],
});

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Head>
        <title>Hertel</title>
      </Head>
      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ApolloProvider>
  );
}
