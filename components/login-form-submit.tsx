"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Button } from "@/components/shadcn/ui/button"
import { sleep } from "@/utils/sleep"
import { PATH } from "@/constants/PATH"
import { Buffer } from "./shadcn/ui/spinner"

export function LoginFormSubmit() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await sleep()
    router.replace(PATH.dashboard)
  }

  return (
    <Button type="button" onClick={handleSubmit} disabled={loading}>
      {loading && <Buffer />}
      Login
    </Button>
  )
}
