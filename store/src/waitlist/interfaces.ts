import { DeviceType } from "@/utils/device.util";
import { CommonEntity } from "../common/interfaces";

export interface WaitlistEntity extends CommonEntity {
  email: string;
  device: DeviceType;
}
