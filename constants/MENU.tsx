import {
  type LucideIcon,
  Settings2Icon,
  HatGlassesIcon,
  FileBadgeIcon,
  LightbulbIcon,
  ClipboardClockIcon,
  PaletteIcon,
  ChartPieIcon,
  WalletIcon,
  DatabaseSearchIcon,
  ListVideoIcon,
  FileHeadphoneIcon,
  PresentationIcon,
} from "lucide-react"
import { PATH } from "./PATH"

export interface MenuItemParams {
  slug: string
  title: string
  alias?: string
  url?: string
  Icon?: LucideIcon
}

export const MENU = {
  primary: [
    {
      slug: "dashboard",
      title: "Dashboard",
      url: PATH.dashboard,
      Icon: ChartPieIcon,
    },
    {
      slug: "journals",
      title: "Journals",
      alias: "Napkin&trade;",
      url: PATH.nil,
      Icon: LightbulbIcon,
    },
    {
      slug: "credentials",
      title: "Credentials",
      alias: "S3tcred&trade;",
      url: PATH.credentials,
      Icon: FileBadgeIcon,
    },
    {
      slug: "finances",
      title: "Finance Ledger",
      alias: "Fedora&trade;",
      url: PATH.nil,
      Icon: WalletIcon,
    },
    {
      slug: "designs",
      title: "Design Templates",
      url: PATH.nil,
      Icon: PaletteIcon,
    },
    {
      slug: "scripts",
      title: "Episode Scripts",
      url: PATH.nil,
      Icon: FileHeadphoneIcon,
    },
    {
      slug: "slides",
      title: "Presentation Slides",
      alias: "Cascade&trade;",
      url: PATH.nil,
      Icon: PresentationIcon,
    },
    {
      slug: "interviews",
      title: "Interview Prep",
      alias: "Coyote&trade;",
      url: PATH.interviews,
      Icon: ListVideoIcon,
    },
    {
      slug: "timesheet",
      title: "Timesheet",
      url: PATH.nil,
      Icon: ClipboardClockIcon,
    },
  ],
  secondary: [
    {
      slug: "audits",
      title: "Audit Logs",
      url: PATH.nil,
      Icon: DatabaseSearchIcon,
    },
    {
      slug: "settings",
      title: "Settings",
      url: PATH.nil,
      Icon: Settings2Icon,
    },
  ],
} as const satisfies Record<string, MenuItemParams[]>
