import Link from "next/link";
import { useDisclosure } from "@mantine/hooks";
import { PATH } from "@/constants/PATH";

export const Fab = () => {
  const [opened, { toggle }] = useDisclosure(false);
  // RENDER
  return (
    <div className="fixed right-5 bottom-5 z-99 flex flex-col items-end gap-4">
      {opened &&
        Object.entries(PATH).map(([name, path]) => {
          const href =
            typeof path === "string"
              ? path
              : path("b3fc3c8b-2c79-4d99-8b2d-bcd7380167aa");
          // render
          return (
            <Link
              key={name}
              href={href}
              className="flex flex-col border-b text-sm whitespace-nowrap text-gray-400 last:border-b-0 hover:border-[#f35116] hover:text-gray-200"
            >
              <span className="line-clamp-2 text-xs whitespace-break-spaces">
                {name}
              </span>
            </Link>
          );
        })}
      <button
        aria-label="Navigate"
        title="Navigate"
        onClick={toggle}
        className="size-5 cursor-pointer bg-[#16B8F3] focus:outline-none"
      />
    </div>
  );
};

// const cm = (
//   <ContextMenu>
//     <ContextMenuTrigger asChild>
//       <img
//         src="image.png"
//         alt="User Avatar"
//         className="h-10 w-10 cursor-pointer rounded-full border border-white dark:border-zinc-900"
//       />
//     </ContextMenuTrigger>
//     <ContextMenuContent className="w-48">
//       <ContextMenuLabel>Options</ContextMenuLabel>
//       <ContextMenuSeparator />
//       <ContextMenuItem onClick={() => alert("View Profile")}>
//         View Profile
//       </ContextMenuItem>
//       <ContextMenuItem onClick={() => alert("Send Message")}>
//         Send Message
//       </ContextMenuItem>
//       <ContextMenuSeparator />
//       <ContextMenuItem onClick={() => alert("Remove")}>Remove</ContextMenuItem>
//     </ContextMenuContent>
//   </ContextMenu>
// );
