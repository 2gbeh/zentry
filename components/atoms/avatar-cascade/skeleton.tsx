import { Skeleton } from "@/components/shadcn/ui/skeleton";

type PropsType = {
  length?: number;
};

export const AvatarCascadeSkeleton: React.FC<PropsType> = ({ length = 4 }) => {
  return (
    <div className="flex -space-x-2">
      {Array.from({ length }).map((_, i) => (
        <Skeleton
          key={i}
          className="size-8 rounded-full border-2 border-zinc-900"
        />
      ))}
    </div>
  );
};
