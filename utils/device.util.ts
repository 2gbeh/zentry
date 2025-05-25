export type DeviceType = {
  ipv4?: string;
  ipv6?: string;
  userAgent?: string;
  geolocation?: {
    long: number;
    lat: number;
    accuracy: number;
  };
};

export class DeviceUtil {
  static userAgent = window?.navigator?.userAgent;

  static async fetchIp() {
    const [ipv6, ipv4] = await Promise.allSettled([
      fetch("https://api64.ipify.org?format=json").then((res) => res.json()),
      fetch("https://api.ipify.org?format=json").then((res) => res.json()),
    ]);

    return {
      ipv6: ipv6.status === "fulfilled" ? ipv6.value.ip : undefined,
      ipv4: ipv4.status === "fulfilled" ? ipv4.value.ip : undefined,
    };
  }

  static async fetchGeolocation() {
    const position = await new Promise<GeolocationPosition>(
      (resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject, {
          enableHighAccuracy: true,
          timeout: 5000,
        });
      },
    );

    return {
      long: position.coords.longitude,
      lat: position.coords.latitude,
      accuracy: position.coords.accuracy,
    };
  }
}
