import { PropsWithChildren } from "react";
import { Loader2Icon } from "lucide-react";
// SHARED IMPORTS
import { Button } from "../shadcn/ui/button";

type PropsType = PropsWithChildren<{
  onClick?: VoidFunction;
  loading?: boolean;
  typeSubmit?: boolean;
  fullWidth?: boolean;
}>;

const Solid: React.FC<PropsType> = ({
  children,
  onClick,
  loading,
  typeSubmit,
  fullWidth,
}) => {
  return (
    <Button
      type={typeSubmit ? "submit" : "button"}
      onClick={typeSubmit ? undefined : onClick}
      disabled={loading}
      className={fullWidth ? "w-full" : undefined}
    >
      {loading && <Loader2Icon className="size-4 animate-spin" />}
      {children}
    </Button>
  );
};

export const ThemedButton = { Solid };
