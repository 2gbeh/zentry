import { PropsWithChildren } from "react";

const Container: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <div className="bg-background flex min-h-svh flex-col gap-4 p-4">
      {children}
    </div>
  );
};

const Header: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <header className="flex items-center justify-end gap-4">{children}</header>
  );
};

const Main: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <main className="flex flex-1 flex-col items-center sm:justify-center gap-4 mt-20 sm:mt-0">
      {children}
    </main>
  );
};

export const Layout = {
  Container,
  Header,
  Main,
};
