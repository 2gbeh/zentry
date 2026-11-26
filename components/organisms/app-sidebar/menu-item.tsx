"use client"

import { useRouter, usePathname } from "next/navigation"
import { cn } from "@/components/shadcn/utils"
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar"
import { MenuItemParams } from "@/constants/MENU"
import { PATH } from "@/constants/PATH"

interface Props extends MenuItemParams {}

export function MenuItem({ Icon, ...props }: Props) {
  const router = useRouter()
  const pathname = usePathname()

  const isInactive = props.url === PATH.nil
  const isFocus =
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
        className={cn(
          isFocus && "bg-primary/10 font-medium",
          isInactive && "text-primary/40"
        )}
      >
        {Icon ? <Icon /> : null}
        <span dangerouslySetInnerHTML={{ __html: props.title }} />
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
