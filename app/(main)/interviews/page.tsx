import type { Metadata } from "next"
import {
  DashboardCard,
  DashboardContainer,
  DashboardContent,
} from "@/components/species/dashboard/ui/dashboard-container"
import { Faqs } from "@/components/species/interviews/ui/faqs"
import { PATH } from "@/constants/PATH"

export const metadata: Metadata = {
  title: "Interviews",
  alternates: { canonical: PATH.interviews },
}

export default function InterviewsPage() {
  return (
    <DashboardContainer title="Interviews">
      <DashboardContent>
        <DashboardCard title="FAQs" description="Frequently asked questions">
          <Faqs />
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  )
}
