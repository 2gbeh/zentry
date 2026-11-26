"use client"

import { ToolbarSelect } from "@/components/atoms/toolbar-select"
import { ToolbarButton } from "@/components/atoms/toolbar-button"
import { DashboardContent } from "@/components/species/dashboard/ui/dashboard-container"
//
import { useDesignStore } from "../store"
import { templatesData } from "../data/templates-data"

export function Toolbar() {
  const templateId = useDesignStore((s) => s.templateId)
  const setTemplateId = useDesignStore((s) => s.setTemplateId)
  const pageId = useDesignStore((s) => s.pageId)
  const setPageId = useDesignStore((s) => s.setPageId)

  return (
    <DashboardContent className="flex-cb gap-4">
      <div className="flex-cs gap-4">
        <ToolbarSelect
          name="templateId"
          label="Template:"
          placeholder="Templates"
          value={templateId}
          data={[...templatesData]}
          onChange={(id, text) => setTemplateId(id || "", text)}
        />
        <ToolbarSelect
          name="pageId"
          label="Page:"
          placeholder="Pages"
          value={pageId}
          data={Array.from({ length: 100 }).map((_, i) => ({
            label: `Page ${i + 1}`,
            value: String(i),
          }))}
          onChange={(id, text) => setPageId(id || "", text)}
        />
      </div>
      <ToolbarButton variant="download">Download</ToolbarButton>
    </DashboardContent>
  )
}
