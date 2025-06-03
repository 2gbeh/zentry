import { Html, Head, Main, NextScript } from "next/document";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export default function Document() {
  return (
    <Html lang="en" className="dark">
      <Head>
        <meta name="description" content={APP.description} />
        <meta name="keywords" content={APP.keywords} />
        <meta name="owner" content={APP.owner} />
        <meta name="designer" content={APP.designer} />
        <meta name="copyright" content={APP.copyright} />
        <meta name="theme-color" content={COLOR.black} />
        <meta name="robots" content="index,follow" />
        <meta name="msapplication-TileColor" content={COLOR.brand} />
        <meta
          name="msapplication-TileImage"
          content="/msapplication-tile-image.png"
        />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content={COLOR.black}
        />
        <meta name="apple-mobile-web-app-title" content={APP.name} />
        {/* OPEN GRAPH */}
        <meta property="og:site_name" content={APP.name} />
        <meta property="og:title" content={APP.tagline} />
        <meta property="og:description" content={APP.description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={APP.url} />
        <meta property="og:image" content={`${APP.url}/social-preview.jpg`} />
        <meta property="og:image:alt" content="" />
        <meta property="og:image:width" content="1280" />
        <meta property="og:image:height" content="640" />
        <meta property="og:determiner" content="auto" />
        <meta property="og:locale" content="en_US" />
        {/* TWITTER CARD */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={APP.tagline} />
        <meta name="twitter:url" content={APP.url} />
        <meta name="twitter:description" content={APP.description} />
        <meta name="twitter:image" content={`${APP.url}/social-preview.jpg`} />
        <meta
          name="twitter:image:src"
          content={`${APP.url}/social-preview.jpg`}
        />
        <meta name="twitter:image:alt" content="" />
        <meta name="twitter:creator" content={APP.creator} />
        {/* LINKS */}
        <link rel="icon" href="/favicon.ico" />
        <link rel="shortcut icon" href="/favicon.ico" />
        <link
          rel="apple-touch-icon"
          href="/apple-touch-icon.png"
          type="image/png"
        />
        <link
          rel="mask-icon"
          href="/mask-icon.svg"
          type="image/svg+xml"
          color={COLOR.brand}
        />
        <link rel="canonical" href={APP.url} />
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body className="antialiased" id="top">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
