"use client"

import {
  type TablerIcon,
  IconBrandAdobeIllustrator,
  IconBriefcase,
  IconClockDollar,
  IconCloudComputing,
  IconCode,
  IconInfoCircle,
  IconPhoneCall,
  IconUser,
  IconVideo,
} from "@tabler/icons-react"
import { Badge } from "@/components/shadcn/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card"
//
import { useInterviewStore } from "../store"
import { TransformedJobDto, transformJob } from "../utils/job-utils"
import { jobsData } from "../data/jobs-data"

export function JobCard() {
  const jobId = useInterviewStore((s) => s.jobId)
  const job = jobsData[Number(jobId)]
  const item = transformJob(job)

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>
          <div className="flex-cb">
            <span>Job Details</span>
            {renderHeaderBadges(item)}
          </div>
        </CardDescription>
        <CardTitle>{renderTitle(item)}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col-sx gap-2 font-medium">
        {renderContent(item)}
      </CardContent>
      <CardFooter className="flex-col-sx gap-4">
        <div className="flex flex-col gap-2 text-muted-foreground">
          {renderFooterItem(IconCode, item.job.techStack.lang)}
          {renderFooterItem(IconCloudComputing, item.job.techStack.cloud)}
          {renderFooterItem(IconBrandAdobeIllustrator, item.job.techStack.ai)}
        </div>
        {renderFooterBadges(item)}
      </CardFooter>
    </Card>
  )
}

const renderHeaderBadges = (item: TransformedJobDto) => (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconUser />
      {item.recruiter.displayName}
    </Badge>
    <Badge
      variant="success"
      title="Copy"
      onClick={() =>
        prompt(
          item.recruiter.isPhoneCall ? "Phone Number" : "Meeting Link",
          item.recruiter.meetingUri
        )
      }
      className="cursor-pointer"
    >
      {item.recruiter.isPhoneCall ? (
        <>
          <IconPhoneCall /> Call
        </>
      ) : (
        <>
          <IconVideo /> Join
        </>
      )}
    </Badge>
  </div>
)

const renderFooterBadges = (item: TransformedJobDto) => (
  <div className="flex-cs flex-wrap gap-2">
    {item.job.salaryRange?.actual ? (
      <Badge variant="outline">
        <IconClockDollar />
        {item.job.salaryRange.actual}
      </Badge>
    ) : null}
    {item.job.salaryRange?.expected ? (
      <Badge variant="warning">
        <IconClockDollar />
        {item.job.salaryRange.expected}
      </Badge>
    ) : null}
  </div>
)

const renderTitle = (item: TransformedJobDto) => (
  <div className="flex-cs debug_ mt-8 min-h-[50px] text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
    <a
      href={item.company.website || undefined}
      target="_blank"
      className={item.company.website && "link-text"}
    >
      {item.company.name}
    </a>
  </div>
)

const renderContent = (item: TransformedJobDto) => (
  <>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconInfoCircle className="size-4 min-w-[16px]" />
      <span>{item.company.about}</span>
    </div>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconBriefcase className="size-4 min-w-[16px]" />
      <a href={item.job.url || undefined} target="_blank" className="link-text">
        {item.job.role}
      </a>
    </div>
  </>
)

const renderFooterItem = (Icon: TablerIcon, text?: string) => (
  <div className="flex-cs gap-2">
    <Icon size={16} className="min-w-[16px]" />
    <span>{text}</span>
  </div>
)
