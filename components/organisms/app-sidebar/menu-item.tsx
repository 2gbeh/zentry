"use client"

import { useRouter } from "next/navigation"
import {
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar"
import { MenuItemParams } from "@/constants/MENU"

interface Props extends MenuItemParams {}

export function MenuItem({ Icon, ...props }: Props) {
  const router = useRouter()

  const handleClick = () => {
    if (props.url) router.push(props.url)
  }

  return (
    <SidebarMenuItem>
      <SidebarMenuButton tooltip={props.title} onClick={handleClick}>
        {Icon ? <Icon /> : null}
        <span dangerouslySetInnerHTML={{ __html: props.title }} />
        {props.alias && (
          <span
            className="_ml-auto _text-xs text-contrast"
            dangerouslySetInnerHTML={{ __html: props.alias }}
          />
        )}
      </SidebarMenuButton>
    </SidebarMenuItem>
  )
}
