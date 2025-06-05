import { useRouter } from "next/router";
// SHARED IMPORTS
import { PageTitle } from "@/components/atoms/page-title";
import { AvatarCascade } from "@/components/molecules/avatar-cascade";
import { NotificationsWidget } from "@/components/widgets/notifications-widget";
import { Logo } from "@/components/atoms/logo";
import { FormBuilder } from "@/components/molecules/form-builder";
import { ThemedButton } from "@/components/atoms/themed-button";
// LOCAL IMPORTS
import {
  Layout,
  Jumbotron,
  Masthead,
  useWaitlistPage,
} from "@/features/waitlist";

export default function WaitlistPage() {
  const {
    getCountAndTop3QueryData,
    getCountAndTop3QueryState,
    submitting,
    form,
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
            src={getCountAndTop3QueryData?.data?.map(({ email }) => email!)}
            total={getCountAndTop3QueryData?.count}
            loading={getCountAndTop3QueryState.isLoading}
          />
          <NotificationsWidget />
        </Layout.Header>
        <Layout.Main>
          <Logo />
          <Jumbotron />
          <Masthead />
          <p></p>
          <FormBuilder.Root form={form} onSubmit={onSubmit}>
            <FormBuilder.FieldInput
              control={form.control}
              name="email"
              type="email"
              label="Email"
              placeholder="Enter email"
            />
            <ThemedButton.Solid loading={submitting} typeSubmit fullWidth>
              Join the waitlist
            </ThemedButton.Solid>
          </FormBuilder.Root>
        </Layout.Main>
      </Layout.Container>
    </>
  );
}
