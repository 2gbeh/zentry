import { PropsWithChildren } from "react";
// SHARED IMPORTS
import { Button } from "../shadcn/ui/button";

type PropsType = PropsWithChildren<{
  onClick?: VoidFunction;
  loading?: boolean;
}>;

const Solid: React.FC<PropsType> = ({ children, onClick, loading }) => {
  return (
    <Button type="button" onClick={onClick} className="w-full">
      {children}
    </Button>
  );
};

export const ThemedButton = { Solid };
