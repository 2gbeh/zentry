import { useRouter } from "next/router";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { AvatarCascade } from "@/components/atoms/avatar-cascade";
import { Notifications } from "@/components/molecules/notifications";
import { FormBuilder } from "@/components/atoms/form-builder";
import { ThemedButton } from "@/components/atoms/themed-button";
import { PATH } from "@/constants/PATH";
// LOCAL IMPORTS
import { Layout, Heading } from "@/containers/home";

export default function HomePage() {
  const router = useRouter();
  // RENDER
  return (
    <>
      <PageTitle />
      <Layout.Container>
        <header className="flex items-center gap-4 self-end">
          <AvatarCascade
            src={["/images/avatar-1.png", "/images/avatar-2.png", "Ashley"]}
            total={9}
          />
          <Notifications />
        </header>
        <Layout.Content>
          <Heading />
          <FormBuilder.Root>
            <FormBuilder.Input
              name="email"
              type="email"
              placeholder="Enter email"
            />
            <ThemedButton.Solid onClick={() => router.push(PATH.login)}>
              Join the waitlist
            </ThemedButton.Solid>
          </FormBuilder.Root>
        </Layout.Content>
      </Layout.Container>
    </>
  );
}
