"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Field } from "@/components/shadcn/ui/field"
import { FieldInputPassword } from "@/components/atoms/field-input"
import { SubmitButton } from "@/components/atoms/submit-button"
import { Hyperlink } from "@/components/atoms/hyperlink"
import { sleep } from "@/utils/sleep"
import { PATH } from "@/constants/PATH"

export function ResetPasswordForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await sleep()
    router.replace(PATH.login)
  }

  return (
    <>
      <FieldInputPassword
        name="password"
        label="New password"
        placeholder="•••• ••••"
        required
      />
      <FieldInputPassword
        name="password"
        label="Confirm new password"
        placeholder="•••• ••••"
        required
      />
      <Field>
        <SubmitButton handleClick={handleSubmit} loading={loading}>
          Create
        </SubmitButton>
      </Field>
      <div className="text-center">
        <Hyperlink path={PATH.login}>Return to Log in</Hyperlink>
      </div>
    </>
  )
}
