"use client"

import * as React from "react"

import { NavDocuments } from "@/components/nav-documents"
import { NavMain } from "@/components/nav-main"
import { NavSecondary } from "@/components/nav-secondary"
import { NavUser } from "@/components/nav-user"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/shadcn/ui/sidebar"
import {
  LayoutDashboardIcon,
  ListIcon,
  ChartBarIcon,
  FolderIcon,
  UsersIcon,
  CameraIcon,
  FileTextIcon,
  Settings2Icon,
  CircleHelpIcon,
  SearchIcon,
  DatabaseIcon,
  FileChartColumnIcon,
  FileIcon,
  CommandIcon,
  HatGlassesIcon,
  FileBadgeIcon,
  LightbulbIcon,
  SquareActivityIcon,
  ActivityIcon,
  ClipboardClockIcon,
  FileClockIcon,
  PaletteIcon,
  ChartPieIcon,
  WalletIcon,
  DatabaseSearchIcon,
  DramaIcon,
  HeadsetIcon,
  CastIcon,
  ListVideoIcon,
  FileHeadphoneIcon,
  BubblesIcon,
  ShapesIcon,
} from "lucide-react"
import { PATH } from "@/constants/PATH"
import Link from "next/link"
import { Logo } from "./logo"

const data = {
  user: {
    name: "Emanuel",
    email: "etugbeh@outlook.com",
    avatar: "/images/webmaster.png",
  },
  navMain: [
    {
      title: "Dashboard",
      url: PATH.dashboard,
      icon: <ChartPieIcon />,
    },
    {
      title: "Finance Ledger",
      alias: "Fedora&trade;",
      url: PATH.nil,
      icon: <WalletIcon />,
    },
    {
      title: "Design Templates",
      url: PATH.nil,
      icon: <PaletteIcon />,
    },
    {
      title: "Episode Scripts",
      url: PATH.nil,
      icon: <FileHeadphoneIcon />,
    },
    {
      title: "Interview Prep",
      alias: "Coyote&trade;",
      url: PATH.interviews,
      icon: <ListVideoIcon />,
    },
    {
      title: "Timesheet",
      url: PATH.nil,
      icon: <ClipboardClockIcon />,
    },
  ],
  navTertiary: [
    {
      title: "Journals",
      alias: "Napkin&trade;",
      url: PATH.nil,
      icon: <LightbulbIcon />,
    },
    {
      title: "Credentials",
      alias: "S3tcred&trade;",
      url: PATH.nil,
      icon: <FileBadgeIcon />,
    },
    {
      title: "Secrets",
      url: PATH.nil,
      icon: <HatGlassesIcon />,
    },
  ],
  navSecondary: [
    {
      title: "Audit Logs",
      url: PATH.nil,
      icon: <DatabaseSearchIcon />,
    },
    {
      title: "Settings",
      url: PATH.nil,
      icon: <Settings2Icon />,
    },
  ],
}
export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="offcanvas" {...props}>
      <SidebarHeader>
        <Logo path={PATH.dashboard} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
        <NavDocuments items={data.navTertiary} />
        <NavSecondary items={data.navSecondary} className="mt-auto" />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
    </Sidebar>
  )
}
