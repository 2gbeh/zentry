import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const baseUrl = process.env.NEXT_PUBLIC_API_URL!;

export const baseApi = createApi({
  reducerPath: 'baseApi',
  baseQuery: fetchBaseQuery({ baseUrl }),
  tagTypes: ['Posts', 'Waitlist'],
  endpoints: (builder) => ({}),
});
