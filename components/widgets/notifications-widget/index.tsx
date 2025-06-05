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
import { PostPresenter, PostsService } from "@/features/posts";
import { UserPresenter } from "@/features/users/presenter";
import { OrganizationPresenter } from "@/features/organizations/presenter";
import { ProjectPresenter } from "@/features/projects/presenter";
import { PATH } from "@/constants/PATH";
// LOCAL IMPORTS
import { useNotificationsWidget } from "./states";

const postPresenter = new PostPresenter();
const userPresenter = new UserPresenter();
const organizationPresenter = new OrganizationPresenter();
const projectPresenter = new ProjectPresenter();

export const NotificationsWidget: React.FC = () => {
  const { mounted, data, hasData } = useNotificationsWidget();
  if (!mounted) return null;
  // RENDER
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>
        <Pressable title="Updates">
          <div className="relative">
            <InboxIcon size={16} />
            {hasData ? (
              <div className="bg-contrast absolute -right-0.5 -top-0.5 size-2 rounded-full"></div>
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
          data?.map((it, i) => {
            postPresenter.setPost(it);
            userPresenter.setUser(it.users);
            organizationPresenter.setOrganization(it.organizations);
            projectPresenter.setProject(it.projects);
            // render
            return (
              <Link
                key={it.id!}
                href={PATH.postDetails(it.id!)}
                className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 whitespace-nowrap border-b p-4 text-sm leading-tight last:border-b-0"
              >
                <div className="flex w-full items-center gap-2">
                  <span>{userPresenter?.username}</span>
                  <span className="ml-auto text-xs">
                    {postPresenter.getTime().longTime}
                  </span>
                </div>
                <span className="text-wrap font-medium leading-5">
                  {postPresenter?.title}
                </span>
                <span
                  className="text-muted-foreground line-clamp-2 w-[260px] whitespace-break-spaces text-xs"
                  dangerouslySetInnerHTML={{
                    __html:
                      PostsService.formatOrgProject(
                        organizationPresenter?.name,
                        projectPresenter?.name,
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
