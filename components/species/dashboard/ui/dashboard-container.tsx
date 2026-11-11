import { PropsWithChildren } from "react"
import { SiteHeader } from "@/components/site-header"

interface Props extends PropsWithChildren {
  title?: string
}

export const DashboardContainer = ({ children, title }: Props) => {
  return (
    <>
      <SiteHeader title={title} />
      <div className="flex flex-1">
        <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
          {children}
        </div>
      </div>
    </>
  )
}
