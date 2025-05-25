import { PropsWithChildren } from "react";
// SHARED IMPORTS
import { cn } from "@/components/shadcn/utils";

type PropsType = PropsWithChildren<{
  title?: string;
}>;

export const AvatarText: React.FC<PropsType> = ({ children, title }) => (
  <div
    title={title}
    className={cn(
      "text-foreground flex size-8 cursor-default items-center justify-center rounded-full border-2 border-zinc-900 text-xs font-semibold",
      title ? "bg-zinc-700" : "bg-zinc-600",
    )}
  >
    {children}
  </div>
);
