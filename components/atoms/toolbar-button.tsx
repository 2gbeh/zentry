import { PlusIcon } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"

interface Props {
  children: string
  variant?: "add"
}

export const ToolbarButton = ({ children, variant = "add" }: Props) => {
  return (
    <Button>
      {{ add: <PlusIcon /> }[variant]}
      <span className="hidden lg:inline">{children}</span>
    </Button>
  )
}
