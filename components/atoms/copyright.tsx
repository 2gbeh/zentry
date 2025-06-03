export const Copyright = () => {
  return (
    <div className="text-muted-foreground hover:[&_a]:text-primary p-0 text-center text-xs text-balance [&_a]:underline [&_a]:underline-offset-4">
      &copy; ${new Date().getFullYear()}{" "}
      <a href="https://github.com/hwp-labs/zentry" target="_blank">
        Z3ntry &times; HWP Labs
      </a>
      . All rights reserved.
    </div>
  );
};
