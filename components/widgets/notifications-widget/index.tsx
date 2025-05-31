import { useEffect, useState } from "react";
import Link from "next/link";
import { InboxIcon } from "lucide-react";
// SHARED IMPORTS
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/shadcn/ui/dropdown-menu";
import { Pressable } from "@/components/atoms/pressable";
import { postsApi } from "@/store/services/postsApi";
import { PostPresenter, PostsService } from "@/store/src/posts";
import { UserPresenter } from "@/store/src/users/presenter";
import { PATH } from "@/constants/PATH";
// LOCAL IMPORTS
import data from "./data.json";

const postPresenter = new PostPresenter();
const userPresenter = new UserPresenter();

export const NotificationsWidget: React.FC = () => {
  // EXTERNAL STATES
  const { data } = postsApi.useGetTop5TodayQuery();
  // DERIVED STATES
  const hasData = data && data?.length > 0;
  // LOCAL STATES
  const [mounted, setMounted] = useState(false);
  // SIDE EFFECTS
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;
  // RENDER
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Pressable title="Updates">
          <div className="relative">
            <InboxIcon size={16} />
            {hasData ? (
              <div className="bg-contrast absolute -top-0.5 -right-0.5 size-2 rounded-full"></div>
            ) : null}
          </div>
        </Pressable>
      </DropdownMenuTrigger>
      <DropdownMenuContent
        side="bottom"
        align="end"
        sideOffset={8}
        className="w-xs"
      >
        {hasData ? (
          data.map((it, i) => {
            postPresenter.setPost(it);
            userPresenter.setUser(it.users);
            // render
            return (
              <Link
                key={it.id}
                href={PATH.postDetails(it.id)}
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
              >
                <div className="flex w-full items-center gap-2">
                  <span>{userPresenter?.username}</span>
                  <span className="ml-auto text-xs">
                    {postPresenter.getTime().longTime}
                  </span>
                </div>
                <span className="leading-5 font-medium text-wrap">
                  {postPresenter?.title}
                </span>
                <span
                  className="text-muted-foreground line-clamp-2 w-[260px] text-xs whitespace-break-spaces"
                  dangerouslySetInnerHTML={{
                    __html:
                      PostsService.formatOrgProject(
                        it?.organizations?.name,
                        it?.projects?.name,
                      ) ?? "",
                  }}
                ></span>
              </Link>
            );
          })
        ) : (
          <DropdownMenuItem>No posts today</DropdownMenuItem>
        )}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};
