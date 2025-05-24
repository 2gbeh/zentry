import Head from "next/head";
import Image from "next/image";
// SHARED IMPORTS
import { Card, CardContent } from "@/components/shadcn/ui/card";
import { Label } from "@/components/shadcn/ui/label";
import { Input } from "@/components/shadcn/ui/input";
import { Button } from "@/components/shadcn/ui/button";
import { PageTitle } from "@/components/atoms/page-title";
import { APP } from "@/constants/APP";
import { BellIcon, GalleryVerticalEnd, InboxIcon } from "lucide-react";
import { Logo } from "@/components/atoms/logo";
import { Copyright } from "@/components/atoms/copyright";
import { PATH } from "@/constants/PATH";
import { useRouter } from "next/router";

export default function HomePage() {
  const router = useRouter();
  return (
    <>
      <PageTitle />
      <main className="bg-background flex min-h-svh flex-col items-center justify-center gap-6 p-6 md:p-10">
        <section className="flex items-center gap-4 self-end">
          <div className="flex -space-x-3">
            <img
              src="/images/avatar-1.png"
              alt="Avatar 1"
              className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-900"
            />
            <img
              src="/images/avatar-2.png"
              alt="Avatar 2"
              className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-900"
            />
            <img
              src="/images/avatar-3.png"
              alt="Avatar 3"
              className="h-8 w-8 rounded-full border-2 border-white dark:border-zinc-900"
            />
            <div className="flex h-8 w-8 items-center justify-center rounded-full border-2 border-white bg-zinc-200 text-xs font-medium text-zinc-700 dark:border-zinc-900 dark:bg-zinc-700 dark:text-zinc-200">
              +5
            </div>
          </div>
          <div
            className="border-input flex h-8.5 w-8.5 cursor-pointer items-center justify-center rounded-md border"
            title="Updates"
          >
            <div className="relative">
              <InboxIcon size={16} />
              <div className="absolute -top-0.5 -right-0.5 h-2 w-2 rounded-full bg-[#16B8F3]"></div>
            </div>
          </div>
        </section>
        <div className="flex w-full flex-1 items-center justify-center">
          <div className="w-full max-w-sm">
            <div className="flex flex-col gap-6">
              <form>
                <div className="flex flex-col gap-6">
                  <div className="flex flex-col items-center gap-2">
                    <Logo iconOnly />
                    <h1 className="_font-bold text-3xl">Join the waitlist</h1>
                    <p className="text-muted-foreground text-center text-sm">
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
                    <Button
                      type="submit"
                      className="w-full"
                      onClick={() => router.push(PATH.login)}
                    >
                      Join
                    </Button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
        <Copyright />
      </main>
    </>
  );
}

const Notifications = () => {
  <>
    {data.map((item) => (
      <a
        href="#"
        key={item.email}
        className="hover:bg-sidebar-accent hover:text-sidebar-accent-foreground flex flex-col items-start gap-2 border-b p-4 text-sm leading-tight whitespace-nowrap last:border-b-0"
      >
        <div className="flex w-full items-center gap-2">
          <span>{item.name}</span>{" "}
          <span className="ml-auto text-xs">{item.date}</span>
        </div>
        <span className="font-medium">{item.subject}</span>
        <span className="line-clamp-2 w-[260px] text-xs whitespace-break-spaces">
          {item.teaser}
        </span>
      </a>
    ))}
  </>;
};

const data = [
  {
    name: "William Smith",
    email: "williamsmith@example.com",
    subject: "Meeting Tomorrow",
    date: "09:34 AM",
    teaser:
      "Hi team, just a reminder about our meeting tomorrow at 10 AM.\nPlease come prepared with your project updates.",
  },
  {
    name: "Alice Smith",
    email: "alicesmith@example.com",
    subject: "Re: Project Update",
    date: "Yesterday",
    teaser:
      "Thanks for the update. The progress looks great so far.\nLet's schedule a call to discuss the next steps.",
  },
  {
    name: "Bob Johnson",
    email: "bobjohnson@example.com",
    subject: "Weekend Plans",
    date: "2 days ago",
    teaser:
      "Hey everyone! I'm thinking of organizing a team outing this weekend.\nWould you be interested in a hiking trip or a beach day?",
  },
  {
    name: "Emily Davis",
    email: "emilydavis@example.com",
    subject: "Re: Question about Budget",
    date: "2 days ago",
    teaser:
      "I've reviewed the budget numbers you sent over.\nCan we set up a quick call to discuss some potential adjustments?",
  },
  {
    name: "Michael Wilson",
    email: "michaelwilson@example.com",
    subject: "Important Announcement",
    date: "1 week ago",
    teaser:
      "Please join us for an all-hands meeting this Friday at 3 PM.\nWe have some exciting news to share about the company's future.",
  },
  {
    name: "Sarah Brown",
    email: "sarahbrown@example.com",
    subject: "Re: Feedback on Proposal",
    date: "1 week ago",
    teaser:
      "Thank you for sending over the proposal. I've reviewed it and have some thoughts.\nCould we schedule a meeting to discuss my feedback in detail?",
  },
  {
    name: "David Lee",
    email: "davidlee@example.com",
    subject: "New Project Idea",
    date: "1 week ago",
    teaser:
      "I've been brainstorming and came up with an interesting project concept.\nDo you have time this week to discuss its potential impact and feasibility?",
  },
  {
    name: "Olivia Wilson",
    email: "oliviawilson@example.com",
    subject: "Vacation Plans",
    date: "1 week ago",
    teaser:
      "Just a heads up that I'll be taking a two-week vacation next month.\nI'll make sure all my projects are up to date before I leave.",
  },
  {
    name: "James Martin",
    email: "jamesmartin@example.com",
    subject: "Re: Conference Registration",
    date: "1 week ago",
    teaser:
      "I've completed the registration for the upcoming tech conference.\nLet me know if you need any additional information from my end.",
  },
  {
    name: "Sophia White",
    email: "sophiawhite@example.com",
    subject: "Team Dinner",
    date: "1 week ago",
    teaser:
      "To celebrate our recent project success, I'd like to organize a team dinner.\nAre you available next Friday evening? Please let me know your preferences.",
  },
];
