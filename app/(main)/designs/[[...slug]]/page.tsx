import type { Metadata } from "next"
import {
  DashboardContainer,
  DashboardContent,
} from "@/components/species/dashboard/ui/dashboard-container"
import { PATH } from "@/constants/PATH"
//
import { Toolbar } from "@/components/species/designs/ui/toolbar"
import { Canvas } from "@/components/species/designs/ui/canvas"

export const metadata: Metadata = {
  title: "Design Templates",
  alternates: { canonical: PATH.designs },
}

export default function DesignsPage() {
  return (
    <DashboardContainer title="Design Templates">
      <Toolbar />
      <DashboardContent className="flex-1 flex-cc bg-foreground text-background p-4">
        <Canvas />
      </DashboardContent>
    </DashboardContainer>
  )
}
