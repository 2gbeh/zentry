"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Field } from "@/components/shadcn/ui/field"
import { FieldInput } from "@/components/atoms/field-input"
import { SubmitButton } from "@/components/atoms/submit-button"
import { OAuthButtons } from "./oauth-buttons"
import { sleep } from "@/utils/sleep"
import { PATH } from "@/constants/PATH"
import { Hyperlink } from "@/components/atoms/hyperlink"

export function ForgotPasswordForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await sleep()
    router.replace(PATH.login)
  }

  return (
    <>
      <FieldInput
        name="email"
        type="email"
        label="Email"
        placeholder="person@domain.com"
        required
      />
      <Field>
        <SubmitButton handleClick={handleSubmit} loading={loading}>
          Send
        </SubmitButton>
      </Field>
      <div className="text-center">
        <Hyperlink path={PATH.login}>Return to Log in</Hyperlink>
      </div>
    </>
  )
}
