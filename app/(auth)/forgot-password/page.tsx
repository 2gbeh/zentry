import type { Metadata } from "next"

import { AuthContainer } from "@/components/species/auth/ui/auth-container"
import { ForgotPasswordForm } from "@/components/species/auth/ui/forgot-password-form"
import { PATH } from "@/constants/PATH"

export const metadata: Metadata = {
  title: "Forgot Password",
  alternates: { canonical: PATH.forgotPassword },
}

export default function ForgotPasswordPage() {
  return (
    <AuthContainer
      title="Forgot your password"
      description="Enter your email below to reset your password"
    >
      <ForgotPasswordForm />
    </AuthContainer>
  )
}
