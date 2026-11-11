"use client"

import { useState } from "react"
import { useRouter } from "next/navigation"
import { Field, FieldLabel } from "@/components/shadcn/ui/field"
import { FieldInput, FieldInputPassword } from "@/components/atoms/field-input"
import { SubmitButton } from "@/components/atoms/submit-button"
import { OAuthButtons } from "./oauth-buttons"
import { Hyperlink } from "@/components/atoms/hyperlink"
import { sleep } from "@/utils/sleep"
import { PATH } from "@/constants/PATH"

export function LoginForm() {
  const router = useRouter()

  const [loading, setLoading] = useState(false)

  const handleSubmit = async () => {
    setLoading(true)
    await sleep()
    router.replace(PATH.dashboard)
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
      <FieldInputPassword
        name="password"
        placeholder="•••• ••••"
        required
        customLabel={
          <div className="flex-cb">
            <FieldLabel htmlFor="password">Password</FieldLabel>
            <Hyperlink path={PATH.forgotPassword}>Forgot password?</Hyperlink>
          </div>
        }
      />
      <Field>
        <SubmitButton handleClick={handleSubmit} loading={loading}>
          Login
        </SubmitButton>
      </Field>
      <OAuthButtons />
    </>
  )
}
