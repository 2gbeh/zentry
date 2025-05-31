import { PropsWithChildren } from "react";

type PropsType = PropsWithChildren<{
  onClick?: VoidFunction;
  title?: string;
}>;

export const Pressable: React.FC<PropsType> = ({
  children,
  onClick,
  title,
}) => {
  return (
    <div
      onClick={onClick}
      title={title}
      className="border-input flex size-8.5 cursor-pointer items-center justify-center rounded-md border"
    >
      {children}
    </div>
  );
};
