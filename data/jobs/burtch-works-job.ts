import { JobDto } from "@/types/job-dto"

export const burtchWorksJob: JobDto = {
  title: "Software Engineer",
  company: "Burtch Works",
  website: "https://www.burtchworks.com",
  about:
    "We are a innovative startup looking for a talented Software Engineer to join our team.",
  techStack: {
    frontend: "TypeScript, React",
    backend: "Python, FastAPI",
    database: "PostgreSQL",
    cloud: "AWS",
  },
  offer: "$120k - $150k/year",
  interests: [
    "AI UseCase: The underwriting OS for SMB lending.",
    "Ownership",
    "FDE: intersection of engineering, product, and customers",
    "Experience with Python, React, or",
    "Experience with LLMs, RAG, AI agents, or production AI systems.",
  ],
  questions: ["AI Tools", "Team Size", "Engineering Challenge", "Next Steps"],
}
