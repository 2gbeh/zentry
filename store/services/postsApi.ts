import { baseApi } from "./baseApi";
import {
  PostEntity,
  CreatePostDto,
  UpdatePostDto,
  QueryPostResponse,
} from "../src/posts";

const url = "/posts";
const type = "Posts" as const;

export const postsApi = baseApi.injectEndpoints({
  endpoints: (builder) => ({
    getAll: builder.query<PostEntity[], void>({
      query: () => url,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type, id })), { type, id: "LIST" }]
          : [{ type, id: "LIST" }],
    }),
    getById: builder.query<PostEntity, string>({
      query: (id) => `${url}/${id}`,
      providesTags: (result, error, id) => [{ type, id }],
    }),
    create: builder.mutation<PostEntity, CreatePostDto>({
      query: (body) => ({ method: "POST", url, body }),
      invalidatesTags: [{ type, id: "LIST" }],
    }),
    update: builder.mutation<PostEntity, { id: string; body: UpdatePostDto }>({
      query: ({ id, body }) => ({
        method: "PATCH",
        url: `${url}/${id}`,
        body,
      }),
      invalidatesTags: (result, error, { id }) => [{ type, id }],
    }),
    delete: builder.mutation<PostEntity, string>({
      query: (id) => ({ method: "DELETE", url: `${url}/${id}` }),
      invalidatesTags: (result, error, id) => [
        { type, id },
        { type, id: "LIST" },
      ],
    }),
    // CUSTOM ENDPOINTS
    getTop5Today: builder.query<QueryPostResponse["getTop5Today"], void>({
      query: () => `${url}/rpc/getTop5Today`,
      providesTags: (result) =>
        result
          ? [...result.map(({ id }) => ({ type, id })), { type, id: "LIST" }]
          : [{ type, id: "LIST" }],
    }),
  }),
  overrideExisting: true,
});
