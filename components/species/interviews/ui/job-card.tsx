import {
  type TablerIcon,
  IconBrandAdobeIllustrator,
  IconBriefcase,
  IconCalendarDollar,
  IconClockHour9,
  IconCloudComputing,
  IconCode,
  IconInfoCircle,
  IconPhoneCall,
  IconUser,
  IconVideo,
  IconWorldSearch,
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

export function JobCard() {
  return (
    <Card className="@container/card">
      <CardHeader>
        <CardDescription>
          <div className="flex-cb">
            <span>Job Details</span>
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
          {renderFooterItem(
            IconCode,
            "TypeScript, React, React Native, Node.js, SQL"
          )}
          {renderFooterItem(IconCloudComputing, "AWS/GCP, Segment")}
          {renderFooterItem(
            IconBrandAdobeIllustrator,
            "AI/LLM, OpenAI/Anthropic, LangChain, RAG, Agentic WF, Vector DB (Pinecone, Milvus, pgvector)"
          )}
        </div>
        {renderFooterBadges}
      </CardFooter>
    </Card>
  )
}

const renderHeaderBadges = (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconUser />
      Nicole (Recruiter)
    </Badge>
    {/* <Badge variant="success">
      <IconPhoneCall />
      (760)-488-0679
    </Badge> */}
    <Badge variant="success" title="http://meet.google.com/mvf-wbck-vvg">
      <IconVideo />
      Join
    </Badge>
  </div>
)

const renderFooterBadges = (
  <div className="flex-cs flex-wrap gap-2">
    <Badge variant="outline">
      <IconCalendarDollar />
      200-250k/y
    </Badge>
    <Badge variant="outline">
      <IconClockHour9 />
      60-80/h
    </Badge>
  </div>
)

const renderTitle = (
  <figure className="flex-cs debug_ mt-4 min-h-[75px] gap-4">
    <figcaption className="text-2xl font-semibold tabular-nums @[250px]/card:text-3xl">
      Attilio
    </figcaption>
  </figure>
)

const renderContent = (
  <>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconBriefcase className="size-4" />
      <a
        href="https://drive.google.com/file/d/1iUZueSK_eO3r8HBatIZe45IDNwg-7ag4/view?usp=drive_link"
        target="_blank"
        className="link-text"
      >
        Founding AI Full Stack Engineer
      </a>
    </div>
    <div className="flex-cs line-clamp-1 gap-2">
      <IconInfoCircle className="size-4" />
      <span>Conflict-Free Life Optimization Platform</span>
    </div>
  </>
)

const renderFooterItem = (Icon: TablerIcon, text: string) => (
  <div className="flex-cs gap-2">
    <Icon size={16} className="min-w-[16px]" />
    <span>{text}</span>
  </div>
)
