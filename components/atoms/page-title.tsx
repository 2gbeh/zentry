import Head from "next/head";
// SHARED IMPORTS
import { APP } from "@/constants/APP";

type PropsType = {
  title?: string | number;
  description?: string;
};

export const PageTitle: React.FC<PropsType> = ({ title, description }) => (
  <Head>
    <title>
      {title ? `${title} | ${APP.name}` : APP.tagline}
    </title>
    {description ? <meta name="description" content={description} /> : null}
  </Head>
);
