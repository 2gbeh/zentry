import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion"

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

const data = [
  {
    q: "What are your shipping options?",
    a: "We offer standard (5-7 days), express (2-3 days), and overnight shipping. Free shipping on international orders.",
  },
  {
    q: "What is your return policy?",
    a: "Returns accepted within 30 days. Items must be unused and in original packaging. Refunds processed within 5-7 business days.",
  },
  {
    q: "How can I contact customer support?",
    a: "Reach us via email, live chat, or phone. We respond within 24 hours during business days.",
  },
]
