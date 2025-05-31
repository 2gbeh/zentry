export type FilterNumberRangeType = {
  eq?: number; // equals, eq
  lt?: number;
  lte?: number;
  gt?: number;
  gte?: number;
};

export type FilterDateRangeType = {
  eq?: Date; // equals, eq
  lt?: Date;
  lte?: Date;
  gt?: Date;
  gte?: Date;
};

export const DateIntervalDatalist = [
  { value: "today", label: "Today" },
  { value: "yesterday", label: "Yesterday" },
  { value: "week", label: "This week" },
  { value: "month", label: "This month" },
  { value: "quarter", label: "This quarter" },
  { value: "year", label: "This year" },
] as const;

export type FilterDateIntervalType =
  (typeof DateIntervalDatalist)[number]["value"];

export type SortType = "asc" | "desc";

export type PaginateRequestType = {
  page: number;
  limit: number;
};

export type PaginateResponseType = {
  count: number;  // total, count
  limit: number; // size, limit
  pages: number;
  page: number;
};
