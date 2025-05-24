export const PATH = {
  home: "/",
  login: "/login",
  register: "/register",
  createPost: "/posts/create",
  postDetails: (id: number | string) => `/posts/${id}`,
};
