import Head from "next/head";
import { APP } from "@/constants/APP";

type PropsType = {
  title?: unknown;
  description?: string;
};

export const PageTitle: React.FC<PropsType> = ({ title, description }) => (
  <Head>
    <title>
      {title ? `${title} | ${APP.name}` : APP.baseTitle}
    </title>
    {description ? <meta name="description" content={description} /> : null}
  </Head>
);
