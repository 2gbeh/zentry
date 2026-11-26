import { PropsWithChildren } from "react"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card"
import { Header } from "@/components/organisms/header"
import { cn } from "@/components/shadcn/utils"

interface Props extends PropsWithChildren {
  title?: string
}

export const DashboardContainer = ({ children, title }: Props) => {
  return (
    <>
      <Header title={title} />
      <div className="flex flex-1">
        <main className="@container/main flex flex-1 flex-col gap-4 pt-4 md:gap-6 md:pt-6">
          {children}
        </main>
      </div>
    </>
  )
}

interface DashboardContentProps extends PropsWithChildren {
  className?: string
}

export const DashboardContent = ({
  children,
  className,
}: DashboardContentProps) => {
  return <div className={cn("px-4 lg:px-6", className)}>{children}</div>
}

interface DashboardCardProps extends PropsWithChildren {
  title?: string
  description?: React.ReactNode
  actions?: React.ReactNode
  className?: string
}

export const DashboardCard = ({
  children,
  title,
  description,
  actions,
  className,
}: DashboardCardProps) => {
  return (
    <Card className="@container/card gap-1">
      {title || description ? (
        <CardHeader className="flex-cb">
          <span>
            {title ? <CardTitle>{title}</CardTitle> : null}
            {description ? (
              <CardDescription>{description}</CardDescription>
            ) : null}
          </span>
          {actions}
        </CardHeader>
      ) : null}
      <CardContent className={className}>{children}</CardContent>
    </Card>
  )
}
