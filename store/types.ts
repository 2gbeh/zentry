import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export type BaseApiResponseData<T> = { data: T | undefined };

export type BaseApiResponseError = {
  error: SerializedError | FetchBaseQueryError;
};

export type BaseApiResponse<T> = BaseApiResponseData<T> | BaseApiResponseError;

export interface SupabaseResponseData<T> {
  data: T;
  meta: {
    request: Record<string, any>;
    response: Record<string, any>;
  };
}

export interface SupabaseResponseError {
  error: {
    status: number;
    data: {
      error: {
        code: string; // e.g., "23505"
        message: string; // e.g., "duplicate key value violates unique constraint ..."
        details: string | null; // e.g., "Key (email)=(etugbeh@outlook.com) already exists."
        hint: string | null;
      };
    };
  };
  meta: {
    request: Record<string, any>;
    response: Record<string, any>;
  };
}
