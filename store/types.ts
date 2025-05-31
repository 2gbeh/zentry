import { SerializedError } from "@reduxjs/toolkit";
import { FetchBaseQueryError } from "@reduxjs/toolkit/query/react";

export type BaseApiResponseData<T> = { data: T | undefined };

export type BaseApiResponseError = {
  error: SerializedError | FetchBaseQueryError;
};

export type BaseApiResponse<T> = T | BaseApiResponseError;

