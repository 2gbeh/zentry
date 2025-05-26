export const mockSupabaseSuccessResponse = {
  status: 200,
  statusText: "",
  error: null,
  data: [],
  count: null,
};

export const mockSupabaseErrorResponse = {
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

export const defaultSupabaseError405Response = {
  error: {
    name: "PostgresError",
    code: "METHOD_NOT_ALLOWED",
    message: "Method Not Allowed",
  },
};
