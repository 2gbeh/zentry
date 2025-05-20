import "@/styles/globals.css";
import type { AppProps } from "next/app";
import { ReduxProvider } from "@/store/provider";
import { PageTitle } from "@/components/atoms/page-title";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <PageTitle />
      <Component {...pageProps} />
    </ReduxProvider>
  );
}
