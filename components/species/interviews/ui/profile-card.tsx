"use client"

import { clsx } from "cn"
import {
  type TablerIcon,
  IconBallBasketball,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCake,
  IconClockDollar,
  IconDeviceMobile,
  IconHome,
  IconMail,
  IconSchool,
  IconSpy,
  IconWorldWww,
} from "@tabler/icons-react"
import { Badge } from "@/components/shadcn/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/shadcn/ui/card"
//
import { TransformedProfileDto, transformProfile } from "../utils/profile-utils"
import { profilesData } from "../data/profiles-data"
import { useInterviewStore } from "../store"

export function ProfileCard() {
  const profileId = useInterviewStore((s) => s.profileId)
  const profile = profilesData[Number(profileId)]
  const item = transformProfile(profile)

  if (!profileId) return null

  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>
          <div className="flex-cb">
            <span>Profile Details</span>
            {renderHeaderBadges(item)}
          </div>
        </CardDescription>
        <CardTitle>{renderTitle(item)}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col-sx gap-2 font-medium">
        {renderContent(item)}
      </CardContent>
      <CardFooter className="flex-col-sx gap-4">
        <div className="flex flex-wrap gap-2 text-muted-foreground">
          {item.tel ? renderFooterItem(IconDeviceMobile, item.tel) : null}

          {renderFooterItem(IconMail, item.email)}

          {renderFooterItem(IconBrandLinkedin, item.linkedInUrlShort)}

          {item.githubUrlShort
            ? renderFooterItem(IconBrandGithub, item.githubUrlShort)
            : null}

          {item.websiteShort
            ? renderFooterItem(IconWorldWww, item.websiteShort)
            : null}

          {item.hobbies
            ? renderFooterItem(IconBallBasketball, item.hobbies)
            : null}
        </div>
        {renderFooterBadges(item)}
      </CardFooter>
    </Card>
  )
}

const renderHeaderBadges = (item: TransformedProfileDto) => (
  <div className="flex-cs flex-wrap gap-2">
    {item.birthDate ? (
      <Badge
        variant="outline"
        title={`${item.birthDate} (${item.age}y)`}
        className="cursor-default"
      >
        <IconCake />
        {item.displayBirthDate}
      </Badge>
    ) : null}
    {item.ssn ? (
      <Badge
        variant="outline"
        title="Social Security Number"
        className="cursor-help"
      >
        <IconSpy />
        {item.ssn}
      </Badge>
    ) : null}
  </div>
)

const renderFooterBadges = (item: TransformedProfileDto) => (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconClockDollar />
      {item.salaryRange.year}
    </Badge>
    <Badge variant="outline">
      <IconClockDollar />
      {item.salaryRange.month}
    </Badge>
    <Badge variant="outline">
      <IconClockDollar />
      {item.salaryRange.hour}
    </Badge>
  </div>
)

const renderTitle = (item: TransformedProfileDto) => (
  <figure className="flex-cs debug_ mt-4 gap-4">
    <div className="relative">
      <img
        src={`/profiles/${item.socials.linkedIn.avatar}`}
        alt=""
        width={70}
        className="rounded-full border-2"
      />
      <span
        className={clsx(
          "absolute right-0.5 bottom-0.5 size-4 cursor-help rounded-full border-2 border-white",
          item.gch ? "bg-green-400" : "bg-blue-400"
        )}
        title={item.gch ? "Green Card Holder" : "US Citizen"}
      ></span>
    </div>
    <figcaption className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      {item.fullName}
      {item.otherName ? (
        <>
          <br />
          {item.otherName}
        </>
      ) : null}
    </figcaption>
  </figure>
)

const renderContent = (item: TransformedProfileDto) => (
  <>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconHome className="size-4" />
      <span>
        {item.address}
        {item.county || item.weather ? <br /> : null}
        {item.county ? `${item.county} ` : null}
        {item.weather ? `[${item.weather}] ` : null}
      </span>
    </div>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconSchool className="size-4" />
      <span>
        {item.displayEducation}
        <br />[{item.education.duration}]
      </span>
    </div>
  </>
)

const renderFooterItem = (Icon: TablerIcon, text: string) => (
  <div className="flex-cs gap-2">
    <Icon size={16} className="min-w-[16px]" />
    <span>{text}</span>
  </div>
)
