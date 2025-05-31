// SHARED IMPORTS
import {
  Avatar,
  AvatarFallback,
  AvatarImage,
} from "@/components/shadcn/ui/avatar";
import { ImageUtil } from "@/utils/image.util";
// LOCAL IMPORTS
import { AvatarCascadeSkeleton } from "./skeleton";
import { AvatarCascadeUtil as _ } from "./utils";

type PropsType = {
  title: string;
  src?: string[];
  total?: null | number;
  loading?: boolean;
};

export const AvatarCascade: React.FC<PropsType> = ({
  title,
  src = [],
  total,
  loading,
}) => {
  return loading ? (
    <AvatarCascadeSkeleton />
  ) : src.length > 0 ? (
    <figure className="flex -space-x-2">
      {src.map((it, i) => {
        if (i < _.LIMIT) {
          return (
            <Avatar key={i}>
              {ImageUtil.isValidExt(it) ? (
                <AvatarImage src={it} alt="" className="" />
              ) : (
                <AvatarFallback className="text-foreground cursor-help border-2 border-zinc-900 bg-zinc-700 text-xs">
                  {_.formatName(it)}
                </AvatarFallback>
              )}
            </Avatar>
          );
        }
      })}
      <Avatar>
        <AvatarFallback
          title={title}
          className="text-foreground cursor-help border-2 border-zinc-900 bg-zinc-600 text-xs font-medium"
        >
          {_.formatTotal(total ?? 0)}
        </AvatarFallback>
      </Avatar>
    </figure>
  ) : null;
};
