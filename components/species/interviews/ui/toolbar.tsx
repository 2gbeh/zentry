"use client"

import { Input } from "@/components/shadcn/ui/input"
import { ToolbarSelect } from "@/components/atoms/toolbar-select"
import { ToolbarButton } from "@/components/atoms/toolbar-button"
import { DashboardContent } from "@/components/species/dashboard/ui/dashboard-container"
import { UNKNOWN } from "@/constants"
//
import { useInterviewStore } from "../store"
import { jobsData } from "../data/jobs-data"
import { profilesData } from "../data/profiles-data"

export function Toolbar() {
  const jobId = useInterviewStore((s) => s.jobId)
  const setJobId = useInterviewStore((s) => s.setJobId)
  const profileId = useInterviewStore((s) => s.profileId)
  const setProfileId = useInterviewStore((s) => s.setProfileId)
  const searchQuery = useInterviewStore((s) => s.searchQuery)
  const setSearchQuery = useInterviewStore((s) => s.setSearchQuery)

  return (
    <DashboardContent className="flex-cb gap-4">
      <ToolbarSelect
        name="profileId"
        label="Profile:"
        placeholder="Profiles"
        value={profileId}
        data={profilesData.map((item, i) => ({
          label: item.fullName,
          value: String(i),
        }))}
        onChange={(id, text) => setProfileId(id || "", text)}
      />
      <ToolbarSelect
        name="jobId"
        label="Job:"
        placeholder="Jobs"
        value={jobId}
        data={jobsData.map((item, i) => ({
          label: item.company?.name || UNKNOWN,
          value: String(i),
        }))}
        onChange={(id, text) => setJobId(id || "", text)}
      />
      <Input
        type="search"
        placeholder="Search keywords..."
        value={searchQuery}
        onChange={(ev) => setSearchQuery(ev.target.value)}
      />
      <ToolbarButton>Add Question</ToolbarButton>
    </DashboardContent>
  )
}
