import type { Metadata } from "next"
import {
  DashboardCard,
  DashboardContainer,
  DashboardContent,
} from "@/components/species/dashboard/ui/dashboard-container"
import { Faqs } from "@/components/species/interviews/ui/faqs"
import { PATH } from "@/constants/PATH"
//
import { Toolbar } from "@/components/species/interviews/ui/toolbar"
import { ProfileCard } from "@/components/species/interviews/ui/profile-card"
import { JobCard } from "@/components/species/interviews/ui/job-card"

export const metadata: Metadata = {
  title: "Interviews",
  alternates: { canonical: PATH.interviews },
}

export default function InterviewsPage() {
  return (
    <DashboardContainer title="Interviews">
      <DashboardContent>
        <Toolbar />
      </DashboardContent>
      <div className="grid grid-cols-1 gap-4 px-4 *:data-[slot=card]:bg-gradient-to-t *:data-[slot=card]:from-primary/5 *:data-[slot=card]:to-card *:data-[slot=card]:shadow-xs lg:px-6 @xl/main:grid-cols-2 @5xl/main:grid-cols-2 dark:*:data-[slot=card]:bg-card">
        <ProfileCard />
        <JobCard />
      </div>
      <DashboardContent>
        <DashboardCard title="FAQs" description="Frequently asked questions">
          <Faqs />
        </DashboardCard>
      </DashboardContent>
    </DashboardContainer>
  )
}
