"use client"

import { Field, FieldLabel } from "@/components/shadcn/ui/field"
import { Input } from "@/components/shadcn/ui/input"
import { EyeIcon, EyeOffIcon } from "lucide-react"
import { useState } from "react"

interface Props extends React.ComponentProps<"input"> {
  name: string
  label?: string
  customLabel?: React.ReactNode
  autoComplete?: string
}

export const FieldInput = ({
  name,
  label,
  customLabel,
  autoComplete,
  ...props
}: Props) => {
  return (
    <Field>
      <CustomLabel options={{ name, label, customLabel }} />
      <Input id={name} autoComplete="off" {...props} />
    </Field>
  )
}

export const FieldInputPassword = ({
  name,
  label,
  customLabel,
  type,
  ...props
}: Props) => {
  const [show, setShow] = useState(false)

  return (
    <Field>
      <CustomLabel options={{ name, label, customLabel }} />
      <div className="relative">
        <Input
          id={name}
          type={show ? "text" : "password"}
          autoComplete="off"
          {...props}
        />
        <button
          type="button"
          onClick={() => setShow(!show)}
          title={show ? "Hide" : "Show"}
          className="absolute top-2.5 right-3 cursor-pointer text-icon"
        >
          {show ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
        </button>
      </div>
    </Field>
  )
}

interface CustomLabelProps {
  name: string
  label?: string
  customLabel?: React.ReactNode
  required?: boolean
}

const CustomLabel = ({ options }: { options: CustomLabelProps }) => {
  return options.customLabel ? (
    options.customLabel
  ) : options.label ? (
    <FieldLabel htmlFor={options.name}>{options.label}</FieldLabel>
  ) : null
}
