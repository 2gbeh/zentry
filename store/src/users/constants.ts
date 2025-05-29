export class UsersConstants {
  static readonly ROLE = [
    { value: "0", label: "USER" },
    { value: "1", label: "ADMIN" },
  ];

  static readonly STATUS = [
    { value: "0", label: "ACTIVE" },
    { value: "1", label: "SUSPENDED" },
    { value: "2", label: "DEACTIVATED" },
  ];

  static get defaultValue() {
    return {
      role: this.ROLE[0].value,
      status: this.STATUS[0].value,
    };
  }
}
