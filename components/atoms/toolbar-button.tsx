import { DownloadIcon, PlusIcon } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"

interface Props {
  children: string
  variant?: "add" | "download"
}

export const ToolbarButton = ({ children, variant = "add" }: Props) => {
  return (
    <Button title={children}>
      {
        {
          add: <PlusIcon />,
          download: <DownloadIcon />,
        }[variant]
      }
      <span className="hidden lg:inline">{children}</span>
    </Button>
  )
}
