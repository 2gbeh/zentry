import Head from "next/head";
import Image from "next/image";
// SHARED IMPORTS
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PageTitle } from "@/components/atoms/page-title";
import { APP } from "@/constants/APP";
import { GalleryVerticalEnd } from "lucide-react";
import { Logo } from "@/components/atoms/logo";
import { Copyright } from "@/components/atoms/copyright";

export default function HomePage() {
  return (
    <>
      <PageTitle />
      <main className="flex min-h-svh flex-col items-center justify-center gap-6 bg-background p-6 md:p-10 ">
        <div className="w-full max-w-sm ">
          <div className="flex flex-col gap-6 ">
            <form>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col items-center gap-2">
                  <Logo iconOnly />
                  <h1 className="text-4xl _font-bold">Join the waitlist</h1>
                  <p className="text-center text-sm text-muted-foreground">
                    Share code snippets with ZEntry
                  </p>
                </div>
                <div className="flex flex-col gap-6">
                  <div className="grid gap-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="person@domain.com"
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Join
                  </Button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </main>
      <Copyright />
    </>
  );
}
