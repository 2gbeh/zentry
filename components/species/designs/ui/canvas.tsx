"use client"

import { Lanyard } from "./lanyard"
import { useDesignStore } from "../store"
import { TemplatesDataValueType } from "../data/templates-data"

export function Canvas() {
  const templateId = useDesignStore((s) => s.templateId)
  const pageId = useDesignStore((s) => s.pageId)

  return <Lanyard pageId={pageId} />

  // const templateRenderMap: Partial<
  //   Record<TemplatesDataValueType, React.ReactNode>
  // > = {
  //   lanyard: <Lanyard pageId={pageId} />,
  // }

  // return templateRenderMap[templateId as TemplatesDataValueType]
}
