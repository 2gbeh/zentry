import "./globals.css";
import type { AppProps } from "next/app";
// SHARED IMPORTS
import { ReduxProvider } from "@/store/provider";
import { Fab } from "@/components/atoms/fab";
import { Toaster } from "@/components/shadcn/ui/sonner";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ReduxProvider>
      <Component {...pageProps} />
      {process.env.NODE_ENV === "production" ? null : <Fab />}
      <Toaster richColors />
    </ReduxProvider>
  );
}
