export interface SupabaseResponse<T> {
  status: number;
  statusText: string;
  count?: null | number;
  data: null | T;
  error: null | {
    code: string;
    message: string;
    details:
      | null
      | {
          cardinality: string;
          embedding: string;
          relationship: string;
        }[];
    hint: null | string;
  };
}
