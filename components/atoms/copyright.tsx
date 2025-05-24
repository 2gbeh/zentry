import { APP } from "@/constants/APP";

export const Copyright = () => {
  return (
    <div
      className="text-balance text-center text-xs text-muted-foreground [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-primary p-0"
      dangerouslySetInnerHTML={{ __html: APP.copyright }}
    ></div>
  );
};
