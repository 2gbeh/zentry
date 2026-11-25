"use client"

import {
  FunnelXIcon,
  ListChevronsDownUpIcon,
  ListChevronsUpDownIcon,
} from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/shadcn/ui/accordion"
import { DashboardCard } from "../../dashboard/ui/dashboard-container"
//
import { InterviewStoreType, useInterviewStore } from "../store"
import { faqsData } from "../data/faqs-data"

export function FaqsAccordion() {
  const profileId = useInterviewStore((s) => s.profileId)
  const searchQuery = useInterviewStore((s) => s.searchQuery)
  const setSearchQuery = useInterviewStore((s) => s.setSearchQuery)
  const expandMultiple = useInterviewStore((s) => s.expandMultiple)
  const toggleExpandMultiple = useInterviewStore((s) => s.toggleExpandMultiple)

  return (
    <DashboardCard
      title="FAQs"
      description={
        searchQuery
          ? `Showing results for "${searchQuery}"`
          : `Frequently asked questions`
      }
      actions={
        <Actions
          options={{
            searchQuery,
            setSearchQuery,
            expandMultiple,
            toggleExpandMultiple,
          }}
        />
      }
    >
      <Accordion multiple={expandMultiple}>
        {faqsData
          .filter((item) =>
            item.profileId ? item.profileId === profileId : true
          )
          .map(({ question, answer, ...item }, i) => (
            <AccordionItem key={i}>
              <AccordionTrigger>
                <div className="flex-cb w-full">
                  <span>{question}</span>
                  {item.metadata?.duration ? (
                    <span className="mr-4 text-muted-foreground">
                      {item.metadata.duration}
                    </span>
                  ) : null}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                {item.metadata?.stack ? (
                  <div className="font-medium_ text-muted-foreground">
                    {item.metadata.stack}
                  </div>
                ) : null}
                <div dangerouslySetInnerHTML={{ __html: answer || "" }} />
                {item.metadata?.result ? (
                  <div className="font-medium">{item.metadata.result}</div>
                ) : null}
                {item.metadata?.challenges ? (
                  <div className="text-red-800">{item.metadata.challenges}</div>
                ) : null}
                {item.metadata?.lessons ? (
                  <div className="text-blue-800">{item.metadata.lessons}</div>
                ) : null}
              </AccordionContent>
            </AccordionItem>
          ))}
      </Accordion>
    </DashboardCard>
  )
}

interface ActionsProps {
  options: Pick<
    InterviewStoreType,
    "searchQuery" | "setSearchQuery" | "expandMultiple" | "toggleExpandMultiple"
  >
}

const Actions = ({ options }: ActionsProps) => (
  <div className="flex-cs gap-4">
    {options.searchQuery ? (
      <Button
        variant="outline"
        onClick={() => options.setSearchQuery("")}
        size="icon-sm"
        title="Clear Filters"
      >
        <FunnelXIcon />
      </Button>
    ) : undefined}
    <Button
      variant={options.expandMultiple ? "default" : "outline"}
      onClick={options.toggleExpandMultiple}
      size="icon-sm"
      title="Expand Multiple"
    >
      {options.expandMultiple ? (
        <ListChevronsUpDownIcon />
      ) : (
        <ListChevronsDownUpIcon />
      )}
    </Button>
  </div>
)
