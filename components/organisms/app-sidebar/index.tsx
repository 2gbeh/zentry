"use client"

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
} from "@/components/shadcn/ui/sidebar"
import { Logo } from "@/components/logo"
import { PATH } from "@/constants/PATH"
import { MENU } from "@/constants/MENU"
//
import { MenuButtons } from "./menu-buttons"
import { MenuItem } from "./menu-item"
import { MenuUser } from "./menu-user"

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <Logo path={PATH.dashboard} />
      </SidebarHeader>
      <SidebarContent>
        <MenuButtons />
        <SidebarGroup>
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU.primary.map((item) => (
                <MenuItem key={item.slug} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        <SidebarGroup className="mt-auto">
          <SidebarGroupContent>
            <SidebarMenu>
              {MENU.secondary.map((item) => (
                <MenuItem key={item.slug} {...item} />
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <MenuUser />
      </SidebarFooter>
    </Sidebar>
  )
}
