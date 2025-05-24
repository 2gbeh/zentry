const d = new Date();

export const DAY = [
  { value: "Sun", label: "Sunday" },
  { value: "Mon", label: "Monday" },
  { value: "Tue", label: "Tuesday" },
  { value: "Wed", label: "Wednesday" },
  { value: "Thu", label: "Thursday" },
  { value: "Fri", label: "Friday" },
  { value: "Sat", label: "Saturday" },
];

export const MONTH = [
  { value: "Jan", label: "January" },
  { value: "Feb", label: "February" },
  { value: "Mar", label: "March" },
  { value: "Apr", label: "April" },
  { value: "May", label: "May" },
  { value: "Jun", label: "June" },
  { value: "Jul", label: "July" },
  { value: "Aug", label: "August" },
  { value: "Sep", label: "September" },
  { value: "Oct", label: "October" },
  { value: "Nov", label: "November" },
  { value: "Dec", label: "December" },
];

export class DateUtil {
  // 19700101000000000
  static currentTimestamp = Number(d.toISOString().replace(/[-T:.Z]/g, ""));
  static currentYear = d.getFullYear();
  static currentYearShort = Number(String(d.getFullYear()).slice(-2));
  static currentMonth = d.getMonth() + 1;
  static currentDay = d.getDate();
  static currentWeekDay = d.getDay();
  // { value: "Jan", label: "January" }
  static get currentMonthText() {
    return MONTH[d.getMonth()]; // 0-11
  }
  // { value: "Sun", label: "Sunday" }
  static get currentWeekDayText() {
    return DAY[d.getDay()]; // 0-6
  }
  // 25 as 2025
  static parseYear(input: number) {
    if (!isNaN(input)) {
      // is yyyy
      if (input.toString().length === 4) {
        return input;
      }

      // 0-25 (2000-2025)
      if (input >= 0 && input <= this.currentYearShort) {
        return input < 10 ? `200${input}` : `20${input}`;
      }

      // 70-99 (1970-1999)
      if (input >= 70 && input <= 99) {
        return `19${input}`;
      }
    }
  }
  // 1 as 01
  static parseMonth(input: number) {
    if (!isNaN(input)) {
      if (input >= 1 && input <= 12) {
        return input < 10 ? `0${input}` : `${input}`;
      }
    }
  }
  // 1 as 01
  static parseDay(input: number) {
    if (!isNaN(input)) {
      if (input >= 1 && input <= 31) {
        return input < 10 ? `0${input}` : `${input}`;
      }
    }
  }
}
