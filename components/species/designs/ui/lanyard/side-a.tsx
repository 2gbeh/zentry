import "../../styles/lanyard/utils-side-a.css"

import { lanyardData as data } from "../../data/lanyard-data"
import { LanyardNotch } from "./notch"

export const LanyardSideA = () => {
  return (
    <section className="lanyard-side-a-styles">
      <main className="flex-1">
        <LanyardNotch />
        <h1>{data.association}</h1>
        <h2>{data.chapter}</h2>
        <h3 dangerouslySetInnerHTML={{ __html: data.event }} />
        <h4>
          {data.displayName}
          {data.affiliations}
        </h4>
        <h5>{data.bio}</h5>
        <p>
          <a href={`mailto:${data.email}`} target="_blank">
            {data.email}
          </a>
        </p>
        <figure className="flex-col-cx">
          <figcaption>
            <b>ORCID:</b>{" "}
            <a href={data.orcid.url} target="_blank">
              {data.orcid.id}
            </a>
          </figcaption>
          <img src={data.orcid.img} alt="" className="shadow-lg" />
        </figure>
      </main>
      <footer>{data.designation}</footer>
    </section>
  )
}
