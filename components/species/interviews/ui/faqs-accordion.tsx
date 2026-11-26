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
          .filter(
            (item) =>
              !item.hidden &&
              (item.profileId ? item.profileId === profileId : true)
          )
          .map((item, i) => (
            <AccordionItem key={i}>
              <AccordionTrigger>
                <div className="flex-cb w-full">
                  <span>{item.title}</span>
                  {item.subtitle ? (
                    <span className="mr-4 text-muted-foreground">
                      {item.subtitle}
                    </span>
                  ) : null}
                </div>
              </AccordionTrigger>
              <AccordionContent className="space-y-4">
                {item.summary ? (
                  <div className="font-medium_ text-muted-foreground">
                    {item.summary}
                  </div>
                ) : null}
                <div
                  dangerouslySetInnerHTML={{ __html: item.description || "" }}
                />
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
