import { IconHeartFilled } from "@tabler/icons-react";
// SHARED IMPORTS
import { Logo } from "@/components/atoms/logo";
import { APP } from "@/constants/APP";
import { COLOR } from "@/constants/COLOR";

export const Heading = () => {
  return (
    <div className="flex flex-col items-center gap-2">
      <Logo variant="brand" />
      <h1 className="mt-4 text-center text-6xl leading-16 font-bold">
        Share code snippets with
      </h1>
      <h1 className="mt-2 text-center text-6xl leading-16 font-semibold">
        {APP.name}
      </h1>
      <p className="text-muted-foreground mt-2 flex items-center gap-2 text-center text-sm">
        <IconHeartFilled size={16} color={COLOR.white} />
        HWP Labs
      </p>
    </div>
  );
};
