import { Suspense } from "react"
import Image from "next/image"

import { Editor } from "@/components/editor"
import { Icons } from "@/components/icons"

export default async function IndexPage() {
  return (
    <section className="container flex h-full  flex-col gap-2 pb-8 md:flex-row">
      {/* Hero */}
      <div className="group flex flex-col items-center justify-center md:w-2/4">
        <div className="mt-14 flex flex-col items-center justify-center md:mt-0 md:w-96">
          <h1 className="animate-fade-in-up text-center text-4xl font-bold md:text-start md:text-6xl lg:text-7xl">
            <span>Free Background Remover Tool with</span>
            <br></br>
            <span>AI</span>
            <span className="inline-block">
              <Icons.SolarStarsBoldDuotone className="flex group-hover:animate-tada"></Icons.SolarStarsBoldDuotone>
            </span>
          </h1>
        </div>
      </div>

      {/* Content */}
      <Suspense
        fallback={
          <div className="flex w-2/4 flex-col items-center justify-center">
            <p>Loading...</p>
          </div>
        }
      >
        <Editor></Editor>
      </Suspense>
    </section>
  )
}
