import type { Metadata } from "next"
import { notFound } from "next/navigation";

import { AuthContainer } from "@/components/species/auth/ui/auth-container"
import { ResetPasswordForm } from "@/components/species/auth/ui/reset-password-form"
import { PATH } from "@/constants/PATH"

export const metadata: Metadata = {
  title: "Reset Password",
  alternates: { canonical: PATH.resetPassword },
}

interface PageProps {
  searchParams: Promise<{ token?: string }>;
}

export default async function ResetPasswordPage({ searchParams }: PageProps) {
  const { token } = await searchParams;
  if (!token) notFound();

  return (
    <AuthContainer
      title="Reset your password"
      description="Enter a new password below"
    >
      <ResetPasswordForm />
    </AuthContainer>
  )
}
