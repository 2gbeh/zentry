import "../../styles/lanyard/utils-side-b.css"

import { lanyardData as data } from "../../data/lanyard-data"
import { LanyardNotch } from "./notch"

export const LanyardSideB = () => {
  return (
    <section className="lanyard-side-b-styles flex-col-1">
      <main className="relative flex-1 _bg-[#e8f5ec] text-[#109230]">
        <LanyardNotch />
        <div className="mt-[40px] space-y-1 text-center font-bold uppercase">
          <h1 className="tracking-wide_ text-[28px]">{data.association}</h1>
          <h2 className="_tracking-wide text-[26px]">{data.chapter}</h2>
          <h3
            className="_text-[#ffff08] mt-2 font-[cambria] text-[32px] leading-9 tracking-wide text-[#dc2626]"
            dangerouslySetInnerHTML={{ __html: data.event }}
          />
        </div>
        <div className="absolute -bottom-[48px] w-full px-[120px] text-[18px]">
          <div className="flex-col-cc h-[340px] w-full space-y-1.5 rounded-[16px] border-4 border-[#dce5de] bg-[#fff] text-center font-medium text-foreground">
            <div className="name font-[cambria]_ text-[22px] leading-8 font-bold tracking-wide_">
              {data.displayName}{", "}MNCS
            </div>
            <div className="bio font-semibold_ text-[18px]_">{data.bio}</div>
            <div className="email text-[#109230] underline underline-offset-2">
              {data.email}
            </div>
            <div className="orcid">
              <b className="font-semibold">ORCID:</b> {data.orcid.id}
            </div>
            <figure className="flex-cc mt-1.5">
              <img
                src={data.orcid.img}
                alt=""
                width={140}
                className="shadow-lg"
              />
            </figure>
          </div>
        </div>
      </main>
      <footer className="h-[80px] bg-[#109230]"></footer>
    </section>
  )
}
