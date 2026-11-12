import type { Metadata } from "next"
import { PlusIcon } from "lucide-react"
import { Label } from "@/components/shadcn/ui/label"
import { Input } from "@/components/shadcn/ui/input"
import { Button } from "@/components/shadcn/ui/button"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/shadcn/ui/select"
import { DashboardContent } from "@/components/species/dashboard/ui/dashboard-container"
import { PATH } from "@/constants/PATH"

const profiles = [
  { label: "Donovan Piper", value: "donovan" },
  { label: "Segun Alabi", value: "segun" },
  { label: "Marcel Mcloy", value: "marcel" },
  { label: "Jeron Walker", value: "jeron" },
  { label: "Shaid Florence", value: "shaid" },
  { label: "Justin Pallay", value: "justin" },
]

const jobs = [{ label: "Attilio", value: "attilio" }]

export function Toolbar() {
  return (
    <DashboardContent className="flex-cb gap-3">
      <div className="flex-cs gap-2">
        <Label
          htmlFor="profiles"
          className="hidden whitespace-nowrap lg:inline"
        >
          Select Profile:
        </Label>
        <Select id="profiles" items={profiles} defaultValue="segun">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Profiles</SelectLabel>
              {profiles.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <div className="flex-cs gap-2">
        <Label htmlFor="jobs" className="hidden whitespace-nowrap lg:inline">
          Select Job:
        </Label>
        <Select id="jobs" items={jobs} defaultValue="attilio">
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Jobs</SelectLabel>
              {jobs.map((item) => (
                <SelectItem key={item.value} value={item.value}>
                  {item.label}
                </SelectItem>
              ))}
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      <Input type="search" placeholder="Search keywords..." />
      <Button>
        <PlusIcon />
        <span className="hidden lg:inline">Add Question</span>
      </Button>
    </DashboardContent>
  )
}
