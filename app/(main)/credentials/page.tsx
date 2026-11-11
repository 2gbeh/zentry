import type { Metadata } from "next"
import { DataTable } from "@/components/data-table"
import { DashboardContainer } from "@/components/species/dashboard/ui/dashboard-container"
import { PATH } from "@/constants/PATH"
//
import data from "@/data/data.json"

export const metadata: Metadata = {
  title: "Credentials",
  alternates: { canonical: PATH.credentials },
}

export default function CredentialsPage() {
  return (
    <DashboardContainer title="Credentials">
      <DataTable data={data} />
    </DashboardContainer>
  )
}
