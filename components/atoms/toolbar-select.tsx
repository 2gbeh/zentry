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
import { OptionType } from "@/types"

interface Props {
  name: string
  label: string
  defaultValue?: string
  value?: string
  placeholder?: string
  data?: OptionType[]
  onChange?: (value: string | null, label?: string) => void
}

export const ToolbarSelect = ({
  name,
  label,
  placeholder,
  value,
  defaultValue,
  data = [],
  onChange = () => undefined,
}: Props) => {
  const onValueChange = (value: string | null) => {
    const item = data.find((item) => item.value === value)
    onChange(value, item?.label)
  }

  return (
    <div className="flex-cs gap-2">
      <Label htmlFor={name} className="hidden whitespace-nowrap lg:inline">
        {label}
      </Label>
      <Select
        id={name}
        items={data}
        value={value}
        defaultValue={defaultValue}
        onValueChange={onValueChange}
      >
        <SelectTrigger>
          <SelectValue />
        </SelectTrigger>
        <SelectContent>
          <SelectGroup>
            {placeholder ? (
              <SelectLabel>{placeholder}</SelectLabel>
            ) : (
              <SelectLabel></SelectLabel>
            )}
            <SelectItem value="">None</SelectItem>
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
