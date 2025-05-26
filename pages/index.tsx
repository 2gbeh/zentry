import { useRouter } from "next/router";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { AvatarCascade } from "@/components/atoms/avatar-cascade";
import { NotificationsWidget } from "@/components/molecules/notifications-widget";
import { Logo } from "@/components/atoms/logo";
import { FormBuilder } from "@/components/atoms/form-builder";
import { ThemedButton } from "@/components/atoms/themed-button";
// LOCAL IMPORTS
import { Layout, Heading, useHomePage } from "@/containers/home";

export default function HomePage() {
  const {
    getCountAndTop3QueryData,
    getCountAndTop3QueryState,
    register,
    errors,
    handleSubmit,
    submitting,
    transformedGetCountAndTop3QueryData,
    onSubmit,
  } = useHomePage();
  // console.log("🚀 ~ HomePage ~ getAllQueryData:", getCountAndTop3QueryData);
  // RENDER
  return (
    <>
      <PageTitle />
      <Layout.Container>
        <Layout.Header>
          <AvatarCascade
            src={transformedGetCountAndTop3QueryData}
            total={getCountAndTop3QueryData?.count}
            title="Joined"
          />
          <NotificationsWidget />
        </Layout.Header>
        <Layout.Main>
          <Logo />
          <Heading />
          <p></p>
          <FormBuilder.Root
            onSubmit={handleSubmit(onSubmit)}
            disabled={submitting}
          >
            <FormBuilder.Input
              field="email"
              label="Email"
              type="email"
              placeholder="Enter email"
              register={register}
              errors={errors}
            />
            <ThemedButton.Solid submit loading={submitting}>
              {submitting ? "One sec..." : "Join the waitlist"}
            </ThemedButton.Solid>
          </FormBuilder.Root>
        </Layout.Main>
      </Layout.Container>
    </>
  );
}
