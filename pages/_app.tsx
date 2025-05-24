import "@/styles/globals.css";
import type { AppProps } from "next/app";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { Fab } from "@/components/atoms/fab";
import { ReduxProvider } from "@/store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <PageTitle />
      <Component {...pageProps} />
      <Fab />
    </ReduxProvider>
  );
}
