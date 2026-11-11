import { PropsWithChildren } from "react"
import { cn } from "cn"
import { FieldGroup } from "@/components/shadcn/ui/field"

interface Props extends PropsWithChildren, React.ComponentProps<"form"> {
  title?: string
  description?: string
}

export function AuthContainer({
  children,
  className,
  title,
  description,
  ...props
}: Props) {
  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      autoComplete="off"
    >
      <FieldGroup>
        <div className="flex flex-col items-center gap-1 text-center">
          <h1 className="text-2xl font-bold">{title}</h1>
          <p className="text-sm text-balance text-muted-foreground">
            {description}
          </p>
        </div>
        {children}
      </FieldGroup>
    </form>
  )
}
