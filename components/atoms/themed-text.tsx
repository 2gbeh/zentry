import { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  variant: "default" | "muted" | "link";
}>;

const H1: React.FC<PropsType> = ({ children, ...props }) => {
  return <h1 className="">{children}</h1>;
};

const H2: React.FC<PropsType> = ({ children, ...props }) => {
  return <h2 className="">{children}</h2>;
};

const H3: React.FC<PropsType> = ({ children, ...props }) => {
  return <h3 className="">{children}</h3>;
};

const H4: React.FC<PropsType> = ({ children, ...props }) => {
  return <h4 className="">{children}</h4>;
};

const H5: React.FC<PropsType> = ({ children, ...props }) => {
  return <h5 className="">{children}</h5>;
};

const H6: React.FC<PropsType> = ({ children, ...props }) => {
  return <h6 className="">{children}</h6>;
};

const P: React.FC<PropsType> = ({ children, ...props }) => {
  return <p className="">{children}</p>;
};

const Strong: React.FC<PropsType> = ({ children, ...props }) => {
  return <strong className="">{children}</strong>;
};

const Small: React.FC<PropsType> = ({ children, ...props }) => {
  return <small className="">{children}</small>;
};

export const ThemedText = { H1, H2, H3, H4, H5, H6, P, Strong, Small };
