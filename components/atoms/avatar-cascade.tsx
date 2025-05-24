import { ImageUtil } from "@/utils/image.util";

type PropsType = {
  src: string[];
  total: number;
};

export const AvatarCascade: React.FC<PropsType> = ({ src, total }) => {
  return (
    <figure className="flex -space-x-3">
      {src.map((it, i) =>
        ImageUtil.isValidName(it) ? (
          <img
            key={i}
            src={it}
            alt=""
            className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-900"
          />
        ) : (
          <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-700 text-xs text-white dark:border-zinc-900 dark:bg-zinc-700">
            {it.slice(0, 2).toUpperCase()}
          </div>
        ),
      )}
      <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-sm font-medium text-zinc-700 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-200">
        +{total - 3}
      </div>
    </figure>
  );
};
