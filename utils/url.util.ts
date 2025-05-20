type RecordUnknownType = Record<string, unknown | unknown[]>;
type RecordStrType = Record<string, string | string[]>;

export class UrlUtil {
  static toQueryStr(obj?: RecordUnknownType) {
    if (obj) {
      const params = new URLSearchParams();
      //
      for (const key in obj) {
        const value = obj[key];
        if (Array.isArray(value)) {
          value.forEach((val) => params.append(key, String(val)));
        } else {
          params.set(key, String(value));
        }
      }
      //
      return params.toString();
    }
    return "";
  }

  static toQueryObj(str?: string) {
    if (str) {
      const params = new URLSearchParams(str);
      const obj: RecordStrType = {};
      //
      for (const [key, value] of params.entries()) {
        if (obj[key]) {
          if (Array.isArray(obj[key])) {
            (obj[key] as string[]).push(value);
          } else {
            obj[key] = [obj[key] as string, value];
          }
        } else {
          obj[key] = value;
        }
      }
      //
      return obj;
    }
    return {};
  }
}
