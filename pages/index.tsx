import { useRouter } from "next/router";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { AvatarCascade } from "@/components/atoms/avatar-cascade";
import { NotificationsWidget } from "@/components/molecules/notifications-widget";
import { Logo } from "@/components/atoms/logo";
import { FormBuilder } from "@/components/atoms/form-builder";
import { ThemedButton } from "@/components/atoms/themed-button";
import { PATH } from "@/constants/PATH";
// LOCAL IMPORTS
import { Layout, Heading, useHomePage } from "@/containers/home";

export default function HomePage() {
  const router = useRouter();
  const {} = useHomePage();
  // RENDER
  return (
    <>
      <PageTitle />
      <Layout.Container>
        <Layout.Header>
          <AvatarCascade
            src={[
              "/images/avatar-1.png",
              "/images/avatar-2.png",
              "e.tugbeh@outlook.com",
              "/images/avatar-3.png",
            ]}
            total={4}
            title="Joined"
          />
          <NotificationsWidget />
        </Layout.Header>
        <Layout.Main>
          <Logo />
          <Heading />
          <p></p>
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
        </Layout.Main>
      </Layout.Container>
    </>
  );
}
