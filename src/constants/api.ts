export const API_METHODS = {
  GET: "GET",
  POST: "POST",
  PATCH: "PATCH",
  DELETE: "DELETE",
};
export type ApiMethods = typeof API_METHODS[keyof typeof API_METHODS];
