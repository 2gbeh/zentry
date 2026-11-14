import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion"
//
import { data } from "../data/faqs"

export function Faqs() {
  return (
    <Accordion>
      {data.map(({ q, a }, i) => (
        <AccordionItem key={i}>
          <AccordionTrigger>{q}</AccordionTrigger>
          <AccordionContent>{a}</AccordionContent>
        </AccordionItem>
      ))}
    </Accordion>
  )
}
