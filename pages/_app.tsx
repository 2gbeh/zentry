import "@/styles/globals.css";
import type { AppProps } from "next/app";
// SHARED IMPORTS
import { Fab } from "@/components/atoms/fab";
import { ReduxProvider } from "@/store/provider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
      <Fab /> 
    </ReduxProvider>
  );
}
