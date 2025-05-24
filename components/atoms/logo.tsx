import Link from "next/link";
import { CodesandboxIcon } from "lucide-react";
import { APP } from "@/constants/APP";

type PropsType = {
  iconOnly?: boolean;
};

export const Logo: React.FC<PropsType> = ({ iconOnly }) => {
  return iconOnly ? (
    <Link href="#" className="flex flex-col items-center gap-2 font-medium">
      <div className="flex h-8 w-8 items-center justify-center rounded-md">
        <CodesandboxIcon className="size-6" />
      </div>
      <span className="sr-only">{APP.stylizedName}</span>
    </Link>
  ) : (
    <Link href="/" className="flex items-center gap-4 font-medium">
      <div className="flex h-6 w-6 items-center justify-center rounded-full bg-primary text-primary-foreground">
        <CodesandboxIcon className="size-4" />
      </div>
      {APP.stylizedName}
    </Link>
  );
};
