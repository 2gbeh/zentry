import { JobDto } from "../types";

export const data: JobDto[] = [
  {
    recruiter: {
      displayName: "Nicole (Recruiter)",
      // meetingUri: "http://meet.google.com/mvf-wbck-vvg",
      meetingUri: "(760)-488-0679",
    },
    company: {
      name: "Attilio",
      about: "Conflict-Free Life Optimization Platform",
      website: "",
    },
    job: {
      role: "Founding AI Full Stack Engineer",
      url: "https://drive.google.com/file/d/1iUZueSK_eO3r8HBatIZe45IDNwg-7ag4/view?usp=drive_link",
      techStack: {
        lang: "TypeScript, React, React Native, Node.js, SQL",
        cloud: "AWS/GCP, Segment",
        ai: "AI/LLM, OpenAI/Anthropic, LangChain, RAG, Agentic WF, Vector DB (Pinecone, Milvus, pgvector)",
      },
      salaryRange: {
        expected: "200k-220k/y",
      },
    },
  },
  {
    recruiter: {
      displayName: "Ryan (COO)",
      meetingUri:
        "https://teams.microsoft.com/l/meetup-join/19%3ameeting_ZjAwZTdiMmMtNjVlMi00NzZlLWFhMWQtOTg3YWFjNjNkZTY1%40thread.v2/0?context=%7b%22Tid%22%3a%22232a8150-1ff6-4e00-ad51-c491fb66cb74%22%2c%22Oid%22%3a%22a7ee4692-dea4-40b8-8eb4-46add89ae90a%22%7d",
    },
    company: {
      name: "Alight",
      website: "http://alight.com",
    },
    job: {
      role: "Staff Data Platform Engineer",
      url: "https://careers.alight.com/us/en/job/R-38579/Staff-Data-Platform-Engineer-Virtual",
      techStack: {
        lang: "Python, SQL",
        cloud:
          "AWS, Dagster (AWS Step Functions, Azure Data Factory, Apache Airflow)",
        ai: "AI/LLM, OpenAI/Anthropic, LangChain, RAG, Agentic WF, Vector DB (Pinecone, Milvus, pgvector)",
      },
      salaryRange: {
        actual: "185k-235k/y",
        expected: "200k-220k/y",
      },
    },
  },
]
