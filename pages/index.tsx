import Head from "next/head";
import Image from "next/image";
// SHARED IMPORTS
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PageTitle } from "@/components/atoms/page-title";
import { APP } from "@/constants/APP";
import { BellIcon, GalleryVerticalEnd, HeartIcon, InboxIcon } from "lucide-react";
import { Logo } from "@/components/atoms/logo";
import { Copyright } from "@/components/atoms/copyright";
import { PATH } from "@/constants/PATH";
import { useRouter } from "next/router";
import { AvatarCascade } from "@/components/atoms/avatar-cascade";
import { Notifications } from "@/components/molecules/notifications";
import { IconHeart, IconHeartFilled } from "@tabler/icons-react";
import { COLOR } from "@/constants/COLOR";

export default function HomePage() {
  const router = useRouter();
  // RENDER
  return (
    <>
      <PageTitle />
      <main className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <section className="flex items-center gap-4 self-end">
          <AvatarCascade
            src={["/images/avatar-1.png", "/images/avatar-2.png", "Ashley"]}
            total={9}
          />
          <Notifications />
        </section>
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="max-w-full sm:max-w-lg">
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Logo variant="brand" />
                  <h1 className="font-bold mt-4 text-6xl text-center leading-16">
                    Share code snippets with
                  </h1>
                  <h1 className="font-semibold mt-2 text-6xl text-center leading-16">
                    {APP.name}
                  </h1>
                  <p className="text-muted-foreground text-center text-sm mt-2 flex items-center gap-2">
                  <IconHeart size={16} color={COLOR.contrast}/>
                    HWP Labs
                  </p>
                </div>
                <form className="mt-6 flex flex-col gap-6 max-w-sm">
                  <div className="grid gap-2">
                    <Input
                      id="email"
                      type="email"
                      placeholder="Enter email"
                      required
                    />
                  </div>
                  <Button
                    type="button"
                    onClick={() => router.push(PATH.login)}
                    className="w-full"
                  >
                    Join the waitlist
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}

