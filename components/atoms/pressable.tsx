import { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  title?: string;
}>;

export const Pressable: React.FC<PropsType> = ({ children, title }) => {
  return (
    <div
      className="border-input flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-md border"
      title={title}
    >
      {children}
    </div>
  );
};
