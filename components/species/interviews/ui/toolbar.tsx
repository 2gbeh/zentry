"use client"

import { Input } from "@/components/shadcn/ui/input"
import { ToolbarSelect } from "@/components/atoms/toolbar-select"
import { ToolbarButton } from "@/components/atoms/toolbar-button"
import { DashboardContent } from "@/components/species/dashboard/ui/dashboard-container"
import { useInterviewStore } from "../store"
import { UNKNOWN } from "@/constants"
//
import { profilesData } from "../data/profiles-data"
import { jobsData } from "../data/jobs-data"

const profiles = [
  { label: "Donovan Piper", value: "1" },
  { label: "Segun Alabi", value: "2" },
  { label: "Marcel Mcloy", value: "3" },
  { label: "Jeron Walker", value: "4" },
  { label: "Shaid Florence", value: "5" },
  { label: "Justin Pallay", value: "6" },
]

export function Toolbar() {
  const jobId = useInterviewStore((s) => s.jobId)
  const setJobId = useInterviewStore((s) => s.setJobId)
  const profileId = useInterviewStore((s) => s.profileId)
  const setProfileId = useInterviewStore((s) => s.setProfileId)

  return (
    <DashboardContent className="flex-cb gap-3">
      <ToolbarSelect
        label="Select Profile:"
        value={profileId}
        data={profilesData.map((item, i) => ({
          label: item.fullName,
          value: String(i),
        }))}
        onChange={(id) => setProfileId(id || "")}
      />
      <ToolbarSelect
        label="Select Job:"
        value={jobId}
        data={jobsData.map((item, i) => ({
          label: item.company?.name || UNKNOWN,
          value: String(i),
        }))}
        onChange={(id) => setJobId(id || "")}
      />
      <Input type="search" placeholder="Search keywords..." />
      <ToolbarButton>Add Question</ToolbarButton>
    </DashboardContent>
  )
}
