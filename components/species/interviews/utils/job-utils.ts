import { HYPHENS, NONE, UNKNOWN } from "@/constants"
import { JobDto } from "../types"

export type TransformedJobDto = ReturnType<typeof transformJob>

export function transformJob(x: JobDto) {
  return {
    recruiter: {
      ...x.recruiter,
      displayName: x.recruiter.displayName || UNKNOWN,
      isPhoneCall: !x.recruiter.meetingUri.startsWith("https://"),
    },
    company: {
      ...x.company,
      name: x.company?.name || UNKNOWN,
      about: x.company?.about || HYPHENS,
    },
    job: {
      ...x.job,
      role: x.job?.role || UNKNOWN,
      techStack: {
        ...x.job?.techStack,
        lang: x.job?.techStack?.lang || NONE,
        cloud: x.job?.techStack?.cloud || NONE,
        ai: x.job?.techStack?.ai || NONE,
      },
    },
  }
}
