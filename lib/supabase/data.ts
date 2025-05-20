export const fakeSupabaseSuccessResponse = {
  status: 200,
  statusText: "",
  error: null,
  data: [],
  count: null,
};

export const fakeSupabaseErrorResponse = {
  status: 404,
  statusText: "",
  error: {
    code: "42P01",
    message: 'relation "public.todos" does not exist',
    details: null,
    hint: null,
  },
  data: null,
  count: null,
};
