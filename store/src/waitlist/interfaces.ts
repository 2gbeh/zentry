import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { DeviceType } from "@/utils/device.util";
import { CommonEntity } from "../common/interfaces";

export interface WaitlistEntity extends CommonEntity {
  email?: string;
  device?: DeviceType;
}

export const waitlistSchema = z.object({
  email: Z.email(),
  device: Z.device(),
});

export type CreateWaitlistDto = z.infer<typeof waitlistSchema>;

export type UpdateWaitlistDto = Partial<CreateWaitlistDto>;

export interface QueryWaitlistDto {}

export interface QueryWaitlistResponse {
  getTop3: Pick<WaitlistEntity, "id" | "email">[];
}
