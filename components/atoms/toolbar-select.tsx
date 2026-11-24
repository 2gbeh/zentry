import { Label } from "@/components/shadcn/ui/label"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"

interface Props {
  label: string
  value?: string
  defaultValue?: string
  data: { label: string; value: string }[]
  onChange?: (value: string | null) => void
}

export const ToolbarSelect = ({
  label,
  value,
  defaultValue,
  data,
  onChange,
}: Props) => {
  return (
    <div className="flex-cs gap-2">
      <Label htmlFor="profiles" className="hidden whitespace-nowrap lg:inline">
        {label}
      </Label>
      <Select
        id="profiles"
        items={data}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onChange}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            <SelectLabel>Profiles</SelectLabel>
            {data.map((item) => (
              <SelectItem key={item.value} value={item.value}>
                {item.label}
              </SelectItem>
            ))}
          </SelectGroup>
        </SelectContent>
      </Select>
    </div>
  )
}
