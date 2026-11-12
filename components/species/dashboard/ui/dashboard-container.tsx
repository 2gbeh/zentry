import { PropsWithChildren } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card"
import { Header } from "@/components/organisms/header"

interface Props extends PropsWithChildren {
  title?: string
}

export const DashboardContainer = ({ children, title }: Props) => {
  return (
    <>
      <Header title={title} />
      <div className="flex flex-1">
        <div className="@container/main flex flex-1 flex-col gap-4 py-4 md:gap-6 md:py-6">
          {children}
        </div>
      </div>
    </>
  )
}

export const DashboardContent = ({ children }: PropsWithChildren) => {
  return <div className="px-4 lg:px-6">{children}</div>
}

interface DashboardCardProps extends PropsWithChildren {
  title?: string
  description?: string
}

export const DashboardCard = ({
  children,
  title,
  description,
}: DashboardCardProps) => {
  return (
    <Card className="@container/card">
      {title || description ? (
        <CardHeader>
          {title ? <CardTitle>{title}</CardTitle> : null}
          {description ? (
            <CardDescription>{description}</CardDescription>
          ) : null}
        </CardHeader>
      ) : null}
      <CardContent>{children}</CardContent>
    </Card>
  )
}
