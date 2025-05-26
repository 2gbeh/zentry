export class ApiRoutesUtil {
  static readonly METHOD_NOT_ALLOWED = {
    error: {
      name: "PostgresError",
      code: "METHOD_NOT_ALLOWED",
      message: "Method Not Allowed",
    },
  };
}
