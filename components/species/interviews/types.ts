export interface ProfileDto {
  fullName: string
  otherName?: string
  birthDate?: string
  tel?: string
  email: string
  address: string
  county?: string
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
  zadarma?: {
    username: string
    password: string
  }
  hobbies?: string
  salaryRange?: {
    hour?: string
    month?: string
    year?: string
  }
  ssn?: number
  gch?: boolean
  background?: string
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
    stack?: {
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
  question: string
  answer?: string
  profileId?: string
  metadata?: {
    duration: string
    stack?: string
    // STAR
    situation?: string
    task?: string
    action?: string
    result?: string
    // CLUE
    challenges?: string
    lessons?: string
  }
}
