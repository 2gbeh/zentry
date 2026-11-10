export interface ProfileDto {
  fullName: string
  birthDate: string
  tel: string
  email: string
  address: string
  education: Education
  hobbies?: string | string[]
  workAuth: string
  hourlyRate?: string
  baseSalary?: string
  urls: Urls
  accounts: Record<string, Accounts>
  careerSummaryRichText: string
}

interface Education {
  degree: string
  institution: string
  year: string
}

interface Urls {
  linkedIn: string
  gitHub?: string
  website?: string
}

interface Accounts {
  url?: string
  username: string
  password: string
}
