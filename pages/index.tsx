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
    </>
  );
}
