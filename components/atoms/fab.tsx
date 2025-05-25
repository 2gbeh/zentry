import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
// SHARED IMPORTS
import { PATH } from "@/constants/PATH";
import { cn } from "../shadcn/utils";

export const Fab = () => {
  const [opened, { toggle }] = useDisclosure(false);
  // RENDER
  return (
    <div className="fixed right-4 bottom-4 z-99 flex flex-col items-end gap-2">
      {/* MENU */}
      {opened && (
        <div className="flex flex-col items-end gap-1">
          {Object.entries(PATH).map(([name, path]) => {
            const href =
              typeof path === "string"
                ? path
                : path("b3fc3c8b-2c79-4d99-8b2d-bcd7380167aa");
            // render
            return (
              <Link
                key={name}
                href={href}
                className="hover:border-contrast border-b text-xs whitespace-nowrap text-gray-400 hover:text-gray-200"
              >
                {name}
              </Link>
            );
          })}
        </div>
      )}

      {/* TRIGGER */}
      <button
        aria-label="Navigate"
        title="Navigate"
        onClick={toggle}
        className={cn(
          "bg-brand size-5 cursor-pointer focus:outline-none",
          opened && "rounded-full",
        )}
      />
    </div>
  );
};