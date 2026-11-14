import { CUR_YEAR, NA, NONE, UNKNOWN } from "@/constants"
import { ProfileDto } from "../types"

export type TransformedProfileDto = ReturnType<typeof transformProfile>

export function transformProfile(x: ProfileDto) {
  const birthYear = x.birthDate ? Number(x.birthDate.split(",")[1]) : CUR_YEAR

  return {
    ...x,
    age: CUR_YEAR - birthYear,
    displayBirthDate: x.birthDate ? x.birthDate.split(",")[0] : NA,
    displayEducation: `${x.education.institution}, ${x.education.location}`,
    linkedInUrlShort: x.socials.linkedIn.url.split(".com")[1],
    githubUrlShort: x.socials.github
      ? x.socials.github.url.split(".com")[1]
      : null,
    websiteShort: x.website ? x.website.replace("https://", "") : null,
    salaryRange: {
      hour: x.salaryRange?.hour || "60-80/h",
      month: x.salaryRange?.month || "10k-12k/m",
      year: x.salaryRange?.year || "140k-160k/y",
    },
  }
}
