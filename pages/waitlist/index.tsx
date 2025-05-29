import { useRouter } from "next/router";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { AvatarCascade } from "@/components/atoms/avatar-cascade";
import { NotificationsWidget } from "@/components/molecules/notifications-widget";
import { Logo } from "@/components/atoms/logo";
import { FormBuilder } from "@/components/atoms/form-builder";
import { ThemedButton } from "@/components/atoms/themed-button";
// LOCAL IMPORTS
import { Layout, Heading, useWaitlistPage } from "@/containers/waitlist";

export default function WaitlistPage() {
  const {
    getCountAndTop3QueryData,
    getCountAndTop3QueryState,
    register,
    errors,
    handleSubmit,
    submitting,
    onSubmit,
  } = useWaitlistPage();
  // RENDER
  return (
    <>
      <PageTitle title={"Join the wailist"} />
      <Layout.Container>
        <Layout.Header>
          <AvatarCascade
            title="Joined"
            src={getCountAndTop3QueryData?.data?.map(({ email }) => email)}
            total={getCountAndTop3QueryData?.count}
            loading={getCountAndTop3QueryState.isLoading}
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
