"use client"

import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/components/shadcn/utils"
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar"
import { MenuItemParams } from "@/constants/MENU"

interface Props extends MenuItemParams {}

export function MenuItem({ Icon, ...props }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isActive =
    props.url === "/"
      ? pathname === "/"
      : pathname === props.url || pathname.startsWith(`${props.url}/`)

  const handleClick = () => {
    if (props.url) router.push(props.url)
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton
        tooltip={props.title}
        onClick={handleClick}
        className={cn(isActive && "bg-primary/10 font-semibold")}
      >
        {Icon ? <Icon /> : null}
        <span dangerouslySetInnerHTML={{ __html: props.title }} />
        {/* {props.alias && (
          <span
            className="_ml-auto _text-xs text-contrast"
            dangerouslySetInnerHTML={{ __html: props.alias }}
          />
        )} */}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
