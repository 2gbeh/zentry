// SHARED IMPORTS
import { ImageUtil } from "@/utils/image.util";
// LOCAL IMPORTS
import { AvatarText } from "./ui/avatar-text";
import { AvatarCascadeUtil as _ } from "./utils";

type PropsType = {
  src?: string[];
  total?: number;
  title?: string;
};

export const AvatarCascade: React.FC<PropsType> = ({
  src = [],
  total = 0,
  title,
}) => {
  return src.length > 0 ? (
    <figure className="flex -space-x-2">
      {src.map((it, i) => {
        if (i < _.LIMIT) {
          return ImageUtil.isValidName(it) ? (
            <img
              key={i}
              src={it}
              alt=""
              className="size-8 rounded-full border-2 border-zinc-900"
            />
          ) : (
            <AvatarText key={i}>{_.formatName(it)}</AvatarText>
          );
        }
      })}
      <AvatarText title={title}>{_.formatTotal(total)}</AvatarText>
    </figure>
  ) : null;
};
