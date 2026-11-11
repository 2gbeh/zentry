import { AuthContainer } from "@/components/species/auth/ui/auth-container"
import { LoginForm } from "@/components/species/auth/ui/login-form"

export default function LoginPage() {
  return (
    <AuthContainer
      title="Login to your account"
      description="Enter your login details below to access your dashboard"
    >
      <LoginForm />
    </AuthContainer>
  )
}
