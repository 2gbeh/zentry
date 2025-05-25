import { InboxIcon } from "lucide-react";
// SHARED IMPORTS
import { Pressable } from "@/components/atoms/pressable";
// LOCAL IMPORTS
import { mockNotificationsWidgetData } from "./data";

type PropsType = {};

export const NotificationsWidget: React.FC<PropsType> = ({}) => {
  return (
    <Pressable title="Updates">
      <div className="relative">
        <InboxIcon size={16} />
        <div className="bg-contrast absolute -top-0.5 -right-0.5 size-2 rounded-full"></div>
      </div>
    </Pressable>
  );
};

const NotificationsWidgetContextMenu = () => {
  <>
    {mockNotificationsWidgetData.map((it, i) => (
      <a
        key={i}
        href="#"
        className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
      >
        <div className="flex w-full items-center gap-2">
          <span>{it.name}</span>{" "}
          <span className="ml-auto text-xs">{it.date}</span>
        </div>
        <span className="font-medium">{it.subject}</span>
        <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
          {it.teaser}
        </span>
      </a>
    ))}
  </>;
};
