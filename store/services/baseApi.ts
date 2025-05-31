import {
  BaseQueryFn,
  createApi,
  FetchArgs,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export const baseApi = createApi({
  reducerPath: "baseApi",
  // baseQuery: customBaseQuery,
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Posts", "Waitlist"],
  endpoints: (builder) => ({}),
});

const customBaseQuery: BaseQueryFn<
  string | FetchArgs,
  unknown,
  FetchBaseQueryError
> = async (args, api, extraOptions) => {
  const rawBaseQuery = fetchBaseQuery({ baseUrl });
  const result = await rawBaseQuery(args, api, extraOptions);
  // console.log("🚀 ~ >= ~ result:", result);
  if (result.error) {
    return { error: (result.error as any)?.data?.error };
  }
  return {
    data: (result.data as any)?.data ?? result.data,
  };
};