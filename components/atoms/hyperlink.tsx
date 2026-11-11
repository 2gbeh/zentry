import { PropsWithChildren } from "react"
import Link from "next/link"

interface Props extends PropsWithChildren {
  path: string
}

export const Hyperlink = ({ children, path }: Props) => {
  return (
    <Link
      href={path}
      className="debug_ self-start text-sm text-brand underline-offset-3 hover:underline"
    >
      {children}
    </Link>
  )
}
