import type { Metadata } from "next"
import { ChartAreaInteractive } from "@/components/chart-area-interactive"
import { DataTable } from "@/components/data-table"
import { SectionCards } from "@/components/section-cards"
import {
  DashboardContainer,
  DashboardContent,
} from "@/components/species/dashboard/ui/dashboard-container"
import { PATH } from "@/constants/PATH"
//
import data from "@/data/data.json"

export const metadata: Metadata = {
  title: "Dashboard",
  alternates: { canonical: PATH.dashboard },
}

export default function DashboardPage() {
  return (
    <DashboardContainer>
      <SectionCards />
      <DashboardContent>
        <ChartAreaInteractive />
      </DashboardContent>
      <DataTable data={data} />
    </DashboardContainer>
  )
}
