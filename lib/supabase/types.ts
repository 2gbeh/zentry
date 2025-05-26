export type SupabaseResponseType<T> = {
  status: number;
  statusText: string;
  count?: null | number;
  data: null | T;
  error: null | {
    code: string;
    message: string;
    details: null;
    hint: null;
  };
};
