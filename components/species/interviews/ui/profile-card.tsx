import {
  type TablerIcon,
  IconBallBasketball,
  IconBrandGithub,
  IconBrandLinkedin,
  IconCake,
  IconCalendarDollar,
  IconClockHour9,
  IconDeviceMobile,
  IconHome,
  IconMail,
  IconRocket,
  IconSchool,
  IconSpy,
  IconTemperatureSun,
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

export function ProfileCard() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>
          <div className="flex-cb">
            <span>Profile Details</span>
            {renderHeaderBadges}
          </div>
        </CardDescription>
        <CardTitle>{renderTitle}</CardTitle>
      </CardHeader>
      <CardContent className="flex-col-sx gap-2 font-medium">
        {renderContent}
      </CardContent>
      <CardFooter className="flex-col-sx gap-4">
        <div className="flex flex-wrap gap-2 text-muted-foreground">
          {renderFooterItem(IconDeviceMobile, "(610)-557-9496")}
          {renderFooterItem(IconMail, "segunalabi383@gmail.com")}
          {renderFooterItem(IconBrandLinkedin, "in/segun-alabi-baa17225")}
          {renderFooterItem(IconBrandGithub, "segunalabi383")}
          {renderFooterItem(IconWorldWww, "portfolio-segun.vercel.app")}
          {renderFooterItem(IconBallBasketball, "Basketball, Gym, Reading")}
        </div>
        {renderFooterBadges}
      </CardFooter>
    </Card>
  )
}

const renderHeaderBadges = (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconCake />
      June 5th
      {/* June 5th, 1976 (50y) */}
    </Badge>
    <Badge variant="outline">
      <IconSpy />
      669
    </Badge>
  </div>
)

const renderFooterBadges = (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconCalendarDollar />
      140-160k/y
    </Badge>
    <Badge variant="outline">
      <IconClockHour9 />
      60-80/h
    </Badge>
    <Badge variant="warning">
      <IconTemperatureSun />
      19C, 66F
    </Badge>
  </div>
)

const renderTitle = (
  <figure className="flex-cs debug_ mt-4 gap-4">
    <div className="relative">
      <img src="/profiles/segun-alabi.png" alt="" width={70} />
      <span className="absolute right-0.5 bottom-0.5 size-4 rounded-full border-2 border-white bg-green-400" title="GHC"></span>
    </div>
    <figcaption className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      Segun Alabi,
      <br />
      Eniola
    </figcaption>
  </figure>
)

const renderContent = (
  <>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconHome className="size-4" />
      <span>227 Park Ave (Apt 3B) East Orange, NJ, 07017</span>
    </div>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconSchool className="size-4" />
      <span>Princeton University, NJ [09/2011 - 04/2015]</span>
    </div>
  </>
)

const renderFooterItem = (Icon: TablerIcon, text: string) => (
  <div className="flex-cs gap-2">
    <Icon size={16} className="min-w-[16px]" />
    <span>{text}</span>
  </div>
)
