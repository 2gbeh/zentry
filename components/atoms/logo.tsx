import Link from "next/link";
// SHARED IMPORTS
import { COLOR } from "@/constants/COLOR";
import { PATH } from "@/constants/PATH";

type PropsType = {
  size?: number;
  path?: string;
  alt?: boolean;
};

export const Logo: React.FC<PropsType> = ({ size = 20, path, alt }) => {
  const [width, height, background] = [
    size,
    size,
    alt ? COLOR.white : COLOR.brand,
  ];
  // RENDER
  return (
    <Link href={path ?? PATH.home} style={{ width, height, background }} />
  );
};
