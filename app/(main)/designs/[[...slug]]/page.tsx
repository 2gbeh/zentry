import type { Metadata } from "next"
import { DataTable } from "@/components/molecules/data-table"
import { DashboardContainer } from "@/components/species/dashboard/ui/dashboard-container"
import { PATH } from "@/constants/PATH"
//
import data from "@/data/data.json"

export const metadata: Metadata = {
  title: "Design Templates",
  alternates: { canonical: PATH.designs },
}

export default function DesignsPage() {
  return (
    <DashboardContainer title="Design Templates">
      <DataTable data={data} />
    </DashboardContainer>
  )
}
