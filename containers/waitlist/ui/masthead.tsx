import { IconHeartFilled } from "@tabler/icons-react";
// SHARED IMPORTS
import { COLOR } from "@/constants/COLOR";

export const Masthead = () => {
  return (
    <p className="text-muted-foreground flex items-center gap-2 text-sm font-medium">
      <IconHeartFilled size={16} color={COLOR.white} />
      HWP Labs
    </p>
  );
};
