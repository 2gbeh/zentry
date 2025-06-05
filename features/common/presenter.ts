import { DateFnsHelper } from "@/utils/helpers/date-fns.helper";
import { CommonEntity } from "./interfaces";

type P = Partial<CommonEntity>;

export class CommonPresenter {
  constructor(protected p?: P) {}
  // ATTRIBUTES
  get id() {
    return this?.p?.id;
  }
  get createdAt() {
    return this?.p?.created_at;
  }
  get updatedAt() {
    return this?.p?.updated_at;
  }
  get deletedAt() {
    return this?.p?.deleted_at;
  }
  // METHODS
  getDate() {
    const d = this.updatedAt ?? this.createdAt;
    return {
      verbose: DateFnsHelper.verbose(d),
      compact: DateFnsHelper.compact(d),
      longDate: DateFnsHelper.longDate(d),
      shortDate: DateFnsHelper.shortDate(d),
    };
  }
  getTime() {
    const d = this.updatedAt ?? this.createdAt;
    return {
      longTime: DateFnsHelper.longTime(d),
      shortTime: DateFnsHelper.shortTime(d),
    };
  }
}
