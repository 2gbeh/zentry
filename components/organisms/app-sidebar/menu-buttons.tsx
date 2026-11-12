import { CirclePlusIcon, FileHeadphoneIcon, ListVideoIcon } from "lucide-react"
import { Button } from "@/components/shadcn/ui/button"

export const MenuButtons = () => {
  return (
    <div className="flex-cs mt-2 gap-2 px-2">
      <Button className="flex flex-1">
        <CirclePlusIcon />
        <span>New Transaction</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        title="New Interview"
        className="size-8 group-data-[collapsible=icon]:opacity-0"
      >
        <ListVideoIcon />
        <span className="sr-only">New Interview</span>
      </Button>
      <Button
        variant="outline"
        size="icon"
        title="New Episode"
        className="size-8 group-data-[collapsible=icon]:opacity-0"
      >
        <FileHeadphoneIcon />
        <span className="sr-only">New Episode</span>
      </Button>
    </div>
  )
}
