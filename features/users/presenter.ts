import { CommonPresenter } from "../common/presenter";
import { UserEntity } from "./interfaces";

type P = Partial<UserEntity>;

export class UserPresenter extends CommonPresenter {
  constructor(protected p?: P) {
    super(p);
  }
  // ATTRIBUTES
  get imageUrl() {
    return this?.p?.image_url;
  }
  get name() {
    return this?.p?.name;
  }
  get username() {
    return this?.p?.username;
  }
  get email() {
    return this?.p?.email;
  }
  get device() {
    return this?.p?.device;
  }
  get deviceUserAgent() {
    return this?.p?.device?.userAgent;
  }
  get deviceIpAddress() {
    return this?.p?.device?.ipAddress;
  }
  get deviceGeolocation() {
    return this?.p?.device?.geolocation;
  }
  get role() {
    return this?.p?.role;
  }
  get status() {
    return this?.p?.status;
  }
  get verifiedAt() {
    return this?.p?.verified_at;
  }
  // METHODS
  setUser(user: null | P | P[]) {
    if (user) this.p = Array.isArray(user) ? user[0] : user;
  }
  getRoleText() {
    const role = this.role;
    return role ? ["User", "Admin"][role] : null;
  }
  getStatusText() {
    const status = this.status;
    return status ? ["Active", "Suspended", "Deactivated"][status] : null;
  }
}
