import { PropsWithChildren } from "react";
// SHARED IMPORTS
import { Button } from "../shadcn/ui/button";

type PropsType = PropsWithChildren<{
  submit?: boolean;
  onClick?: VoidFunction;
  loading?: boolean;
}>;

const Solid: React.FC<PropsType> = ({ children, submit, onClick, loading }) => {
  return (
    <Button
      type={submit ? "submit" : "button"}
      onClick={onClick}
      className="w-full"
    >
      {children}
    </Button>
  );
};

export const ThemedButton = { Solid };
