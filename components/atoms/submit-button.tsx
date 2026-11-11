"use client"

import { PropsWithChildren } from "react"
import { Button } from "@/components/shadcn/ui/button"
import { SpinnerAlt } from "../shadcn/ui/spinner"

interface Props extends PropsWithChildren{
  handleClick?: () => Promise<void>
  loading?: boolean
  disabled?: boolean
}

export function SubmitButton({ children, handleClick, loading, disabled }: Props) {
  return (
    <Button type="button" onClick={handleClick} disabled={loading || disabled}>
      {loading && <SpinnerAlt />}
      {children}
    </Button>
  )
}
