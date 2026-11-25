import { QuestionDto } from "../types"

export const faqsDataJustin: QuestionDto[] = [
  {
    profileId: "0",
    question:
      "My Background - Justin | 12y+ | Hawley (Wayne County), Pennsylvania",
    answer: `
      Applied AI, LLM Evaluation & Distributed Cloud Systems
    `,
  },
  {
    profileId: "0",
    question: "Uber - Senior SWE",
    answer: `
      <p>=[S] Uber Eats payments, risk and delivery platform</p>
      <p>=[T] Built a real-time fraud detection service on Kafka and Flink that scored each order and payment cutting chargeback losses 22% while keeping false declines under 1%.</p>
      <p>=[A] Developed payment features for checkout, including card authorization retries, digital wallet and Uber Cash flows and idempotent refund APIs, raising payment success rates 3% across markets.</p>
      <p>=[R] Uber Eats payments, risk and delivery platform.</p>
      `,
    metadata: {
      duration: "12/2022 - 10/2026",
      challenges:
        "Built a real-time fraud detection service on Kafka and Flink that scored each order and payment cutting chargeback losses 22% while keeping false declines under 1%",
      lessons:
        "Built a real-time fraud detection service on Kafka and Flink that scored each order and payment cutting chargeback losses 22% while keeping false declines under 1%",
      stack:
        "TypeScript, React, Python, FastAPI, PostgreSQL, OpenAI, GCP, Apache Kafka",
    },
  },
  {
    profileId: "0",
    question: "Tango - Founding Engineer, Tech Lead",
    answer: `
      Built document automation tools, dashboards, APIs for Real Estate agencies, Law Firms.
      <p></p>
      leases agreements, contracts and engagement letters, schema-validated fields
      <p></p>
      Built an AI evaluation harness on golden sets of annotated legal and real estate documents, scoring extraction accuracyandclauseflag precision and recall, with human graders settling disagreements before any prompt or model change shipped
      <p></p>
      <b>
        TypeScript, React, Python OCR, Django, PostgreSQL, OpenAI GPT-3, AWS, Terraform
      </b>
    `,
    metadata: {
      duration: "03/2020 - 11/2022",
    },
  },
  {
    profileId: "0",
    question: "CAI - Full Stack Engineer",
    answer: `
      Built full stack healthcare applications for state Medicaid and health and human services agencies, including eligibility, enrollment and case management portals used daily by caseworkers, providers and residents.
    `,
    metadata: {
      duration: "09/2017 - 03/2020",
    },
  },
  {
    profileId: "0",
    question: "OnlineStores - Backend Engineer",
    answer: `
      Developed a NestJS pricing and product configuration service for custom-printed hard hats and flags, handling artwork uploads to S3 and quantity-based pricing rules for bulk orders from businesses and schools.
    `,
    metadata: {
      duration: "06/2014 - 08/2017",
    },
  }, // { question: "", answer: `` },
]
