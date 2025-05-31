import { CommonPresenter } from "../common/presenter";
import { WaitlistEntity } from "./interfaces";

type P = Partial<WaitlistEntity>

export class WaitlistPresenter extends CommonPresenter {
  constructor(protected p?: P) {
    super(p);
  }
  // ATTRIBUTES
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
  // METHODS
  setWaitlist(waitlist: P) {
    this.p = waitlist;
  }
}
