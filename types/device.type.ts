export type DeviceType = {
  ipv6?: string;
  userAgent?: string;
  geolocation?: {
    long: number;
    lat: number;
    accuracy: number;
  };
};