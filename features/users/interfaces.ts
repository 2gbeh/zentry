import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { DeviceType } from "@/utils/device.util";
import { CommonEntity } from "../common/interfaces";

export interface UserEntity extends CommonEntity {
  image_url?: string | null;
  name?: string | null;
  username?: string;
  email?: string;
  password?: string;
  remember_token?: string | null;
  device?: DeviceType;
  role?: UserEntityRole;
  status?: UserEntityStatus;
  verified_at?: string | null;
}


enum UserEntityRole {
  USER,
  ADMIN,
}

enum UserEntityStatus {
  ACTIVE,
  SUSPENDED,
  DEACTIVATED
}