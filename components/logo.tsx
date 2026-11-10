import Link from "next/link"
import { ShapesIcon } from "lucide-react"
import { APP } from "@/constants/APP"

interface Props {
  path?: string
}

export const Logo = ({ path = "/" }: Props) => {
  return (
    <Link href={path} className="debug_ flex items-center gap-2 self-start">
      <ShapesIcon className="size-5!" />
      <span className="text-base font-semibold">{APP.name}</span>
    </Link>
  )
}
