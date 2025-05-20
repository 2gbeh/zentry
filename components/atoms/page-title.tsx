import Head from "next/head";

type PropsType = {
  title?: string | number;
  description?: string;
};

export const PageTitle: React.FC<PropsType> = ({ title, description }) => (
  <Head>
    <title>
      {title ? `${title} | ZEntry` : "ZEntry by HWP Labs - Share Code Snippets"}
    </title>
    {description ? <meta name="description" content={description} /> : null}
  </Head>
);
