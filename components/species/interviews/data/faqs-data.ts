import { QuestionDto } from "../types"
import { faqsDataJustin } from "./faqs-data-justin"
import { faqsDataSegun } from "./faqs-data-segun"

export const faqsData: QuestionDto[] = [
  ...faqsDataJustin,
  ...faqsDataSegun,
  {
    question: "What are you looking for in your next role?",
    answer: `
      <p>= Applied AI, Workflow Automation, Model Evaluation</p>
      <p>= Startup Culture, 0->1 Ownership, Direct Impact, Customers Feedback</p>
      <p>= Payments, Document Automation</p>
    `,
  },
  {
    question: "Why do you want to work with us?",
    answer:
      "Applied AI: Teams can manage projects, automate workflows and track markets. Great advantage within the health care space. Real ownership within a small team. Opportunity to build user-facing products from data infra to UI.",
  },
  {
    question: "Any questions for the recruiter?",
    answer: `
      <p>= Next Steps</p>
      <p>= Compensation Range</p>
      <p>= [Existing Systems Integration] Subcraft integrates with popular billing, payment, and CRM platforms through secure, API-based connections.</p>
      <p>= [AI Agent Control] OuSubcraft operates within merchant-defined parameters, ruleset, and communication guardrails.</p>
    `,
  },
  // { question: "", answer: `` },
]
