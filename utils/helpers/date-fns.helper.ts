import { format } from "date-fns";

type DateType = null | string | Date;

export class DateFnsHelper {
  static transform = (as: string, date?: DateType) => {
    const d = date ? new Date(date) : new Date();
    return format(d, as);
  };

  // Sun, Jan 1, 1970
  static verbose = (date?: DateType) =>
    this.transform("EEE, MMM d, yyyy", date);

  // Jan 1
  static compact = (date?: DateType) => this.transform("MMM d", date);

  // January 1, 1970
  static longDate = (date?: DateType) => this.transform("MMMM d, yyyy", date);

  // Jan 1, 1970
  static shortDate = (date?: DateType) => this.transform("MMM d, yyyy", date);

  // 12:00 AM
  static longTime = (date?: DateType) => this.transform("hh:mm a", date);

  // 00:00
  static shortTime = (date?: DateType) => this.transform("HH:mm", date);
}
