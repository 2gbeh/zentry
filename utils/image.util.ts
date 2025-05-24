type InputType = null | string;

export class ImageUtil {
  static isValidName(str?: InputType) {
    return /\.(jpg|jpeg|png|gif|bmp|webp|svg)$/i.test(str ?? "#");
  }

  static async isValidUrl(url?: InputType): Promise<boolean> {
    return new Promise((resolve) => {
      const img = new Image();
      img.onload = () => resolve(true);
      img.onerror = () => resolve(false);
      img.src = url ?? "#";
    });
  }
}
