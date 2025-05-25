import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
      {children}
    </div>
  );
};

const Content: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="flex w-full flex-1 items-center justify-center">
      <div className="max-w-full sm:max-w-lg">
        <div className="flex flex-col gap-6">
          <main className="flex flex-col gap-6">{children}</main>
        </div>
      </div>
    </div>
  );
};

export const Layout = {
  Container,
  Content,
};
