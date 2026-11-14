export interface ProfileDto {
  fullName: string
  otherName?: string
  birthDate?: string
  tel?: string
  email: string
  address: string
  weather?: string
  education: {
    institution: string
    degree?: string
    location: string
    duration: string
  }
  socials: {
    linkedIn: {
      avatar: string
      url: string
    }
    github?: {
      url: string
    }
  }
  website?: string
  hobbies?: string
  salaryRange?: {
    hour?: string
    month?: string
    year?: string
  }
  ssn?: number
  gch?: boolean
}

export interface JobDto {
  recruiter: {
    displayName: string
    meetingUri: string // http://meet.google.com/mvf-wbck-vvg (760)-488-0679
  }
  company?: {
    name: string
    about?: string
    website?: string
  }
  job?: {
    role: string
    url?: string
    techStack?: {
      lang?: string
      cloud?: string
      ai?: string
    }
    salaryRange?: {
      actual?: string
      expected: string
    }
  }
}

export interface QuestionDto {
  q: string
  a?: string
}
