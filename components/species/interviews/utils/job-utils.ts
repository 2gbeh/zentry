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
      stack: {
        ...x.job?.stack,
        lang: x.job?.stack?.lang || NONE,
        cloud: x.job?.stack?.cloud || NONE,
        ai: x.job?.stack?.ai || NONE,
      },
    },
  }
}
