import "./globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";
// SHARED IMPORTS
import { ReduxProvider } from "@/store/provider";
import { Toaster } from "@/components/shadcn/ui/sonner";
import { Fab } from "@/components/atoms/fab";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta name="description" content={APP.description} />
        <meta name="keywords" content={APP.keywords} />
        <meta name="owner" content="HWP Labs" />
        <meta name="designer" content="Emmanuel Tugbeh" />
        <meta name="copyright" content="2017" />
        <meta name="theme-color" content={COLOR.black} />
        <meta name="robots" content="index,follow" />
        <link
          rel="manifest"
          href="/manifest.json"
          crossOrigin="use-credentials"
        />
        <link rel="canonical" href={APP.url} />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        {/* OPEN GRAPH */}
        <meta property="og:site_name" content={APP.name} />
        <meta property="og:title" content={APP.tagline} />
        <meta property="og:description" content={APP.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP.url} />
        <meta property="og:image" content="/social-preview.jpg" />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:determiner" content="auto" />
        <meta property="og:locale" content="en_US" />
        /* Twitter Card */
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP.tagline} />
        <meta name="twitter:url" content={APP.url} />
        <meta name="twitter:description" content={APP.description} />
        <meta name="twitter:image" content="/social-preview.jpg" />
        <meta name="twitter:image:src" content="/social-preview.jpg" />
        <meta name="twitter:image:alt" content="" />
        <meta name="twitter:image:width " content="1280" />
        <meta name="twitter:image:height " content="640" />
      </Head>
      <ReduxProvider>
        <Component {...pageProps} />
        {process.env.NODE_ENV === "production" ? null : <Fab />}
        <Toaster richColors />
      </ReduxProvider>
    </>
  );
}
