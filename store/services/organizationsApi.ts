import { baseApi } from "./baseApi";
import {
  OrganizationEntity,
  CreateOrganizationDTO,
  UpdateOrganizationDTO,
} from "../src/organizations";

const url = "/organizations";
const type = "Organizations" as const;

export const organizationsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<OrganizationEntity[], void>({
      query: () => url,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type, id })), { type, id: "LIST" }]
          : [{ type, id: "LIST" }],
    }),
    getById: builder.query<OrganizationEntity, string>({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => [{ type, id }],
    }),
    create: builder.mutation<OrganizationEntity, CreateOrganizationDTO>({
      query: (body) => ({ method: "POST", url, body }),
      invalidatesTags: [{ type, id: "LIST" }],
    }),
    update: builder.mutation<
      OrganizationEntity,
      { id: string; body: UpdateOrganizationDTO }
    >({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `${url}/${id}`,
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    delete: builder.mutation<OrganizationEntity, string>({
      query: (id) => ({ method: "DELETE", url: `${url}/${id}` }),
      invalidatesTags: (result, error, id) => [
        { type, id },
        { type, id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});
