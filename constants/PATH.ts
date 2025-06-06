import { ParsedUrlQueryInput } from "querystring";

export const PATH = {
  home: "/",
  login: "/login",
  register: "/register",
  waitlist: "/waitlist",
  createPost: "/posts/create",
  postDetails: (id: number | string, query?: ParsedUrlQueryInput) =>
    query
      ? { pathname: "/posts/[id]", query: { ...query, id } }
      : `/posts/${id}`,
};
