import { z, ZodHelper as Z } from "@/utils/helpers/zod.helper";
import { DeviceType } from "@/utils/device.util";
import { CommonEntity } from "../common/interfaces";

export interface WaitlistEntity extends CommonEntity {
  email: string;
  device: DeviceType;
}

export const waitlistSchema = z.object({
  email: z.string().email(),
  device: z.object({
    userAgent: z.string().optional(),
    ipv4: z.string().optional(),
    ipv6: z.string().optional(),
    geolocation: z
      .object({
        long: z.number(),
        lat: z.number(),
        accuracy: z.number(),
      })
      .optional(),
  }),
});

export type CreateWaitlistDto = z.infer<typeof waitlistSchema>;

export type UpdateWaitlistDto = Partial<CreateWaitlistDto>;

export interface QueryWaitlistDto {}

export interface QueryWaitlistResponse {
  getCountAndTop3: {
    count: number;
    data: Pick<WaitlistEntity, "id" | "email">[];
  };
}
