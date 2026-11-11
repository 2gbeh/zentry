"use client"

import { Button } from "@/components/shadcn/ui/button"
import {
  SidebarGroup,
  SidebarGroupContent,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar"
import {
  CirclePlusIcon,
  FileHeadphoneIcon,
  ListVideoIcon,
  MailIcon,
} from "lucide-react"
import { useRouter } from "next/navigation"

export function NavMain({
  items,
}: {
  items: {
    title: string
    alias?: string
    url: string
    icon?: React.ReactNode
  }[]
}) {
  const router = useRouter()

  return (
    <SidebarGroup>
      <SidebarGroupContent className="flex flex-col gap-2">
        <SidebarMenu>
          <SidebarMenuItem className="flex items-center gap-2">
            <SidebarMenuButton
              tooltip="Quick Create"
              className="min-w-8 bg-primary text-primary-foreground duration-200 ease-linear hover:bg-primary/90 hover:text-primary-foreground active:bg-primary/90 active:text-primary-foreground"
            >
              <CirclePlusIcon />
              <span>New Transaction</span>
            </SidebarMenuButton>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
              title="New Interview"
            >
              <ListVideoIcon />
              <span className="sr-only">New Interview</span>
            </Button>
            <Button
              size="icon"
              className="size-8 group-data-[collapsible=icon]:opacity-0"
              variant="outline"
              title="New Episode"
            >
              <FileHeadphoneIcon />
              <span className="sr-only">New Episode</span>
            </Button>
          </SidebarMenuItem>
        </SidebarMenu>
        <SidebarMenu>
          {items.map((item) => (
            <SidebarMenuItem key={item.title}>
              <SidebarMenuButton tooltip={item.title} onClick={() => router.push(item.url)}>
                {item.icon}
                <span dangerouslySetInnerHTML={{ __html: item.title }} />
                {item.alias && (
                  <span
                    className="_ml-auto _text-xs text-contrast"
                    dangerouslySetInnerHTML={{ __html: item.alias }}
                  />
                )}
              </SidebarMenuButton>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarGroupContent>
    </SidebarGroup>
  )
}
