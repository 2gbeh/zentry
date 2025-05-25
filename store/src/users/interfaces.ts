import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { DeviceType } from "@/utils/device.util";
import { SortType } from "@/types/query-params.types";
import { CommonEntity } from "../common";
//
import { UserConstants as K } from "./constants";

export interface UserEntity extends CommonEntity {
  image_url?: null | string;
  name?: null | string;
  username?: string;
  email?: string;
  password?: string;
  remember_token?: null | string;
  device?: DeviceType;
  role?: UserEntityRole;
  status?: UserEntityStatus;
  verified_at?: null | string;
}

export type UserEntityRole = (typeof K.ROLE)[number]["value"];

export type UserEntityStatus = (typeof K.STATUS)[number]["value"];

export const userSchema = z.object({
  image_url: Z.imageUrl().nullish(),
  name: Z.birthName().nullish(),
  username: Z.username(),
  email: Z.email(),
  password: Z.strongPassword(),
  remember_token: z.string().length(60).nullish(),
  device: Z.device().nullish(),
  role: Z.select(K.ROLE).nullish().default(K.defaultValue.role),
  status: Z.select(K.STATUS).nullish().default(K.defaultValue.status),
  verified_at: Z.pastDate().nullish(),
});

export type CreateUserDTO = z.infer<typeof userSchema>;

export type UpdateUserDTO = Partial<CreateUserDTO>;

export type QueryUserDTO = {
  search?: string;
  filter?: {
    role?: UserEntityRole;
    status?: UserEntityStatus;
    verified_at?: boolean;
  };
  sort?: {
    name?: SortType;
    username?: SortType;
    email?: SortType;
    role?: SortType;
    status?: SortType;
    verified_at?: SortType;
  };
  paginate?: {
    page: number;
    limit: number;
  };
};
