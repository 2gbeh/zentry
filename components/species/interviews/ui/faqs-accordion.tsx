import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion"
//
import { faqsData } from "../data/faqs-data"

export function FaqsAccordion() {
  return (
    <Accordion multiple>
      {faqsData.map(({ q, a }, i) => (
        <AccordionItem key={i}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>
            <div dangerouslySetInnerHTML={{ __html: a || "" }} />
          </AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
