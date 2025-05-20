import { SerializedError } from "@reduxjs/toolkit";
import {
  createApi,
  fetchBaseQuery,
  FetchBaseQueryError,
} from "@reduxjs/toolkit/query/react";

export type ApiResponseType<T> = Promise<
  { data: T | undefined } | { error: SerializedError | FetchBaseQueryError }
>;

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ["Users", "Organizations"],
  endpoints: (builder) => ({}),
});
