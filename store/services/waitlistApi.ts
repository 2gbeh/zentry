import { baseApi } from "./baseApi";
import {
  WaitlistEntity,
  CreateWaitlistDto,
  UpdateWaitlistDto,
  QueryWaitlistResponse,
} from "../src/waitlist";

const url = "/waitlist";
const type = "Waitlist" as const;

export const waitlistApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<WaitlistEntity[], void>({
      query: () => url,
      providesTags: (result) => {
        return result
          ? [...result.map(({ id }) => ({ type, id })), { type, id: "LIST" }]
          : [{ type, id: "LIST" }];
      },
    }),
    getById: builder.query<WaitlistEntity, string>({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => [{ type, id }],
    }),
    create: builder.mutation<WaitlistEntity, CreateWaitlistDto>({
      query: (body) => ({ method: "POST", url, body }),
      invalidatesTags: [{ type, id: "LIST" }],
    }),
    update: builder.mutation<
      WaitlistEntity,
      { id: string; body: UpdateWaitlistDto }
    >({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `${url}/${id}`,
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    delete: builder.mutation<WaitlistEntity, string>({
      query: (id) => ({ method: "DELETE", url: `${url}/${id}` }),
      invalidatesTags: (result, error, id) => [
        { type, id },
        { type, id: "LIST" },
      ],
    }),
    // CUSTOM ENDPOINTS
    getCountAndTop3: builder.query<
      QueryWaitlistResponse["getCountAndTop3"],
      void
    >({
      query: () => `${url}/rpc/getCountAndTop3`,
      providesTags: (result) =>
        result
          ? [
              ...(result?.data.map(({ id }) => ({ type, id })) ?? []),
              { type, id: "LIST" },
            ]
          : [{ type, id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});
