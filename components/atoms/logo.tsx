import Link from "next/link";
// SHARED IMPORTS
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";
import { PATH } from "@/constants/PATH";

type PropsType = {
  variant?: "default" | "brand";
  size?: number;
  path?: string;
};

export const Logo: React.FC<PropsType> = ({
  variant = "default",
  size = 18,
  path,
}) => {
  const [width, height, background] = [
    size,
    size,
    variant === "default" ? COLOR.white : COLOR.brand,
  ];
  // RENDER
  return (
    <Link href={path ?? PATH.home} style={{ width, height, background }} />
  );
};
