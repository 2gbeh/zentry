import { baseApi } from "./baseApi";
import { UserEntity, CreateUserDto, UpdateUserDto } from "../src/users";

const url = "/users";
const type = "Users" as const;

export const usersApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<UserEntity[], void>({
      query: () => url,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type, id })), { type, id: "LIST" }]
          : [{ type, id: "LIST" }],
    }),
    getById: builder.query<UserEntity, string>({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => [{ type, id }],
    }),
    create: builder.mutation<UserEntity, CreateUserDto>({
      query: (body) => ({ method: "POST", url, body }),
      invalidatesTags: [{ type, id: "LIST" }],
    }),
    update: builder.mutation<UserEntity, { id: string; body: UpdateUserDto }>({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `${url}/${id}`,
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    delete: builder.mutation<UserEntity, string>({
      query: (id) => ({ method: "DELETE", url: `${url}/${id}` }),
      invalidatesTags: (result, error, id) => [
        { type, id },
        { type, id: "LIST" },
      ],
    }),
  }),
  overrideExisting: false,
});
