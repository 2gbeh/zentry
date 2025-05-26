import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
// SHARED IMPORTS
import { waitlistApi } from "@/store/services/waitlistApi";
import { DeviceUtil } from "@/utils/device.util";
import { MOCK } from "@/constants/MOCK";
// LOCAL IMPORTS
import { formDataSchema, FormDataType, HomePageUtil as _ } from "./utils";

const M = MOCK.home;

export function useHomePage() {
  // EXTERNAL STATES
  const { data: getCountAndTop3QueryData, ...getCountAndTop3QueryState } =
    waitlistApi.useGetCountAndTop3Query();
  const [createMutation] = waitlistApi.useCreateMutation();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver: zodResolver(formDataSchema),
    defaultValues: M.formData ? _.mockDefaultValues : _.defaultValues,
  });
  // LOCAL STATES
  const [submitting, setSubmitting] = useState(false);
  const [userAgent, setUserAgent] = useState("");
  // DERIVED STATES
  const transformedGetCountAndTop3QueryData =
    _.transformGetCountAndTop3QueryData(getCountAndTop3QueryData);
  // SIDE EFFECTS
  useEffect(() => {
    if (typeof window !== "undefined") {
      setUserAgent(window.navigator.userAgent);
    }
  }, []);
  // ACTIONS
  async function onSubmit(formData: FormDataType) {
    setSubmitting(true);
    try {
      const ipAddress = await DeviceUtil.fetchIpAddress();
      const geolocation = await DeviceUtil.fetchGeolocation();
      const body = _.prepareCreateMutationBody(
        formData,
        userAgent,
        ipAddress,
        geolocation,
      );
      createMutation(body)
        .unwrap()
        .then((data) => {
          reset();
        })
        .catch((err) => {
          console.log("🚀 ~ onSubmit ~ createMutation ~ err:", err);
        })
        .finally(() => {
          setSubmitting(false);
        });
    } catch (err) {
      console.log("🚀 ~ onSubmit ~ DeviceUtil ~ err:", err);
    } finally {
      setSubmitting(false);
    }
  }

  return {
    getCountAndTop3QueryData,
    getCountAndTop3QueryState,
    register,
    errors,
    handleSubmit,
    submitting,
    transformedGetCountAndTop3QueryData,
    onSubmit,
  };
}
