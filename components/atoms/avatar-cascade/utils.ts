export class AvatarCascadeUtil {
  static readonly LIMIT = 3;

  static formatName = (str: string) => {
    const withoutSpecialChars = str.replace(/[-_.]/g, "");
    const first2Chars = withoutSpecialChars.slice(0, 2);
    return first2Chars.toUpperCase();
  };

  static formatTotal = (int: number) =>
    int > this.LIMIT ? `+${int - this.LIMIT}` : int;
}
