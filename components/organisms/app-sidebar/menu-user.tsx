"use client"

import { useRouter } from "next/navigation"
import {
  EllipsisVerticalIcon,
  CircleUserRoundIcon,
  LogOutIcon,
  HatGlassesIcon,
} from "lucide-react"
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu"
import {
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  useSidebar,
} from "@/components/shadcn/ui/sidebar"
import { PATH } from "@/constants/PATH"

const user = {
  name: "Emanuel",
  email: "etugbeh@outlook.com",
  avatar: "/images/webmaster.png",
}

export function MenuUser() {
  const router = useRouter()
  const { isMobile } = useSidebar()

  const handleLogout = async () => {
    if (confirm("Are you sure?")) {
      router.replace(PATH.login)
    }
  }

  const handleSecrets = async () => {
    const pin = prompt("Enter Pin:")
    if (!pin) return

    if (pin === process.env.NEXT_PUBLIC_SECRETS_PIN) {
      router.push(PATH.nil)
    } else {
      alert("Unauthorized!")
    }
  }

  return (
    <SidebarMenu>
      <SidebarMenuItem>
        <DropdownMenu>
          <DropdownMenuTrigger
            render={
              <SidebarMenuButton size="lg" className="aria-expanded:bg-muted" />
            }
          >
            <Avatar className="grayscale_ size-8 rounded-lg">
              <AvatarImage src={user.avatar} alt={user.name} />
              <AvatarFallback className="rounded-lg">ET</AvatarFallback>
            </Avatar>
            <div className="grid flex-1 text-left text-sm leading-tight">
              <span className="truncate font-medium">{user.name}</span>
              <span className="truncate text-xs text-foreground/70">
                {user.email}
              </span>
            </div>
            <EllipsisVerticalIcon className="ml-auto size-4" />
          </DropdownMenuTrigger>
          <DropdownMenuContent
            className="min-w-56"
            side={isMobile ? "bottom" : "right"}
            align="end"
            sideOffset={4}
          >
            <DropdownMenuGroup>
              <DropdownMenuItem>
                <CircleUserRoundIcon />
                My Profile
              </DropdownMenuItem>
              <DropdownMenuItem onClick={handleSecrets}>
                <HatGlassesIcon />
                My Secrets
              </DropdownMenuItem>
            </DropdownMenuGroup>
            <DropdownMenuSeparator />
            <DropdownMenuItem onClick={handleLogout}>
              <LogOutIcon />
              Log out
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </SidebarMenuItem>
    </SidebarMenu>
  )
}
