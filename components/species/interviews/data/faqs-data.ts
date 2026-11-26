import { QuestionDto } from "../types"
import { faqsDataJustin } from "./faqs-data-justin"
import { faqsDataSegun } from "./faqs-data-segun"

export const faqsData: QuestionDto[] = [
  ...faqsDataJustin,
  ...faqsDataSegun,
  {
    title: "What are you looking for in your next role?",
    description: `
      <p>= Applied AI | Workflow automation | Model evaluation</p>
      <p>= Startup culture | 0->1 ownership | Customers feedback | Direct impact</p>
      <p>= Payments or healthcare space | Document automation</p>
    `,
  },
  {
    title: "Why do you want to work with us?",
    description: `
      <p>= Startup culture: Working within a small team</p>
      <p>= Ownership: Build an AI-driven LMS from 0->1</p>
      <p>= Applied ML: Leverage ML algorithms amd models to build faster, smarter, scalable machine</p>
      <p>= Payment background alignment: Loan management automation</p>
    `,
  },
  {
    title: "Questions for Recruiter",
    description: `
      <p>= Next steps | How many rounds</p>
      <p>= FT/Contract position |  Compensation range</p>
      <p>= Team size | Current engineering challenge</p>
      <p>
        <b>= Minimum Requirements Verification Process?</b> <br/> 
        1y+ in business | $20k+ MRR | US-based company <br/>
        Partnering with an external service or have an in-house verification system?
      </p>
      
    `,
  },
  // { title: "", description: `` },
]
