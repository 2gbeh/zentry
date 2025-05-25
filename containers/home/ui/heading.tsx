import { IconHeartFilled } from "@tabler/icons-react";
// SHARED IMPORTS
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export const Heading = () => {
  return (
    <hgroup className="flex flex-col items-center gap-4">
      <h1 className="text-center text-5xl leading-16 font-bold sm:text-6xl">
        Share code snippets with
      </h1>
      <h1 className="text-5xl font-bold sm:text-6xl">{APP.name}</h1>
      <p className="text-muted-foreground flex items-center gap-2 text-sm">
        <IconHeartFilled size={16} color={COLOR.white} />
        HWP Labs
      </p>
    </hgroup>
  );
};
