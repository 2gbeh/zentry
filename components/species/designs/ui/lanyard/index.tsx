import "../../styles/lanyard/base.css"

import { LanyardSideA } from "./side-a"
import { LanyardSideB } from "./side-b"

interface Props {
  pageId: string
}

export const Lanyard = ({ pageId }: Props) => {
  return (
    <div className="lanyard-styles">
      <div className="container">
        {pageId === "1" ? <LanyardSideB /> : <LanyardSideA />}
      </div>
    </div>
  )
}
