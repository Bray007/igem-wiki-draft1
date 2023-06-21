import Image from "next/image"
import Link from "next/link"
import {
  ArrowBigRight,
  ArrowRight,
  BarChart3,
  ShieldClose,
  TrendingDown,
} from "lucide-react"

import { siteConfig } from "@/config/site"
import { cn } from "@/lib/utils"
import { AspectRatio } from "@/components/ui/aspect-ratio"
import { buttonVariants } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Skeleton } from "@/components/ui/skeleton"
import { Icons } from "@/components/icons"

export default function IndexPage() {
  return (
    <>
      {/* Above The Fold */}
      <section className="relative mx-auto grid w-full max-w-7xl grid-cols-5 grid-rows-1 items-center px-8 pb-12">
        {/* Image */}
        <div className="col-span-3 col-start-3 row-start-1 h-full w-full">
          <AspectRatio ratio={3 / 2}>
            <div className="flex h-full w-full items-center justify-center bg-muted">
              <Icons.image className="h-10 w-10 text-muted-foreground" />
            </div>
          </AspectRatio>
        </div>

        {/* Text */}
        <div className={cn("z-10 col-span-3 col-start-1 row-start-1")}>
          <div className="flex max-w-[980px] flex-col items-start gap-2 justify-self-end pb-6">
            <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              This is your where your <br className="hidden sm:inline" />
              engaging catchphrase will go
            </h1>
            <p className="max-w-[700px] text-lg text-muted-foreground">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              blandit vitae metus in tristique. Nam nisl urna, pretium at
              pretium id, auctor a lectus.
            </p>
          </div>
          <div className="flex gap-4">
            <Link
              href={siteConfig.links.docs}
              target="_blank"
              rel="noreferrer"
              className={buttonVariants()}
            >
              Get Started
            </Link>
            <Link
              target="_blank"
              rel="noreferrer"
              href={siteConfig.links.github}
              className={buttonVariants({ variant: "outline" })}
            >
              Discover The Wiki
            </Link>
          </div>
        </div>
      </section>

      {/* Sponsors */}
      <section className="container relative flex flex-col items-center gap-6 py-12">
        <h1 className="text-sm text-muted-foreground">
          Thank you to our sponsers
        </h1>
        <div className="flex items-center gap-12">
          <Icons.demoLogo1 />
          <Icons.demoLogo4 />
          <Icons.demoLogo2 />
          <Icons.demoLogo5 />
          <Icons.demoLogo3 />
        </div>
      </section>

      {/* The Problem */}
      <section className="container relative flex flex-col items-center gap-6 py-12">
        {/* Label */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            {/* Circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
              1
            </div>
            <p className="text-lg font-semibold leading-7 text-primary [&:not(:first-child)]:mt-2">
              The Problem
            </p>
          </div>
          <h1 className="mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Clubroot is Spreading
          </h1>
          <p className="max-w-[700px] text-lg leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
            Vestibulum imperdiet placerat interdum.Mauris sit amet eros
            vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi.
          </p>
        </div>

        {/* Content */}
        <div className="grid grid-cols-[0.8fr_1fr]">
          <div className="relative mx-auto h-full w-64 text-muted">
            <Image
              src="/Alberta.svg"
              alt="Alberta Image"
              fill
              className="bg-muteed text-muted"
            />
          </div>
          <div className="mt-8 flex flex-col gap-10">
            <ListItem
              icon={<BarChart3 className="h-6 w-6" />}
              title="The Spread is Rapid"
            >
              Vestibulum imperdiet placerat interdum.Mauris sit amet eros
              vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
              .Vestibulum imperdiet placerat interdum.Mauris sit amet.
            </ListItem>
            <ListItem
              icon={<TrendingDown className="h-6 w-6" />}
              title="Companies are Struggling"
            >
              Vestibulum imperdiet placerat interdum.Mauris sit amet eros
              vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
              .Vestibulum imperdiet placerat interdum.Mauris sit amet.
            </ListItem>
            <ListItem
              icon={<ShieldClose className="h-6 w-6" />}
              title="No Detection Methods"
            >
              Vestibulum imperdiet placerat interdum.Mauris sit amet eros
              vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
              .Vestibulum imperdiet placerat interdum.Mauris sit amet.
            </ListItem>
          </div>
        </div>
      </section>

      {/* The Solution */}
      <section className="container relative flex flex-col items-center gap-6 py-12">
        {/* Label */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            {/* Circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
              2
            </div>
            <p className="text-lg font-semibold leading-7 text-primary [&:not(:first-child)]:mt-2">
              The Solution
            </p>
          </div>
          <h1 className="mt-6 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
            Meet &lt;&lt;CHEMICAL&gt;&gt;
          </h1>
        </div>

        {/* Content */}
        <div className="relative grid grid-cols-5">
          <div className="z-10 col-span-3 col-start-1 row-start-1 mt-8">
            <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight">
              What Makes This Awesome
            </h2>
            <p className="mt-2 text-lg font-semibold">
              Vestibulum imperdiet placerat interdum.Mauris sit amet eros
              vehicula, tempus nisi vel, dictum tellus.
            </p>
            <p className="mt-2 text-muted-foreground">
              Vestibulum imperdiet placerat interdum.Mauris sit amet eros
              vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
              .Vestibulum imperdiet placerat interdum.Mauris sit amet.
            </p>
            <div className="mt-8 flex flex-col gap-10">
              <ListItem
                icon={<Icons.logo className="h-6 w-6" />}
                title="Property 1"
              >
                Vestibulum imperdiet placerat interdum.Mauris sit amet eros
                vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
                .Vestibulum imperdiet placerat interdum.Mauris sit amet.
              </ListItem>
              <ListItem
                icon={<Icons.logo className="h-6 w-6" />}
                title="Property 2"
              >
                Vestibulum imperdiet placerat interdum.Mauris sit amet eros
                vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
                .Vestibulum imperdiet placerat interdum.Mauris sit amet.
              </ListItem>
            </div>
          </div>

          <div className="col-span-3 col-start-3 row-start-1 h-full w-full">
            <AspectRatio ratio={1}>
              <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-muted to-90%" />
            </AspectRatio>
          </div>
        </div>
      </section>

      {/* How It Words */}
      <section className="container relative flex flex-col items-center gap-6 py-12">
        {/* Label */}
        <div className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center">
            {/* Circle */}
            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary text-4xl font-bold text-primary-foreground">
              3
            </div>
            <p className="text-lg font-semibold leading-7 text-primary [&:not(:first-child)]:mt-2">
              How It Works
            </p>
          </div>
        </div>

        {/* Content */}
        <div className="mt-8 grid grid-cols-2 items-center gap-10">
          <div className="relative mx-auto w-96 text-muted">
            <AspectRatio ratio={3 / 2}>
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <Icons.image className="h-10 w-10 text-muted-foreground" />
              </div>
            </AspectRatio>
          </div>
          <ListItem
            icon={<Icons.logo className="h-6 w-6" />}
            title="Property 1"
          >
            Vestibulum imperdiet placerat interdum.Mauris sit amet eros
            vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
            .Vestibulum imperdiet placerat interdum.Mauris sit amet.
          </ListItem>
          <div className="relative mx-auto w-96 text-muted">
            <AspectRatio ratio={3 / 2}>
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <Icons.image className="h-10 w-10 text-muted-foreground" />
              </div>
            </AspectRatio>
          </div>
          <ListItem
            icon={<Icons.logo className="h-6 w-6" />}
            title="Property 2"
          >
            Vestibulum imperdiet placerat interdum.Mauris sit amet eros
            vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
            .Vestibulum imperdiet placerat interdum.Mauris sit amet.
          </ListItem>
          <div className="relative mx-auto w-96 text-muted">
            <AspectRatio ratio={3 / 2}>
              <div className="flex h-full w-full items-center justify-center bg-muted">
                <Icons.image className="h-10 w-10 text-muted-foreground" />
              </div>
            </AspectRatio>
          </div>
          <ListItem
            icon={<Icons.logo className="h-6 w-6" />}
            title="Property 3"
          >
            Vestibulum imperdiet placerat interdum.Mauris sit amet eros
            vehicula, tempus nisi vel, dictum tellus. Nunc sed eros mi
            .Vestibulum imperdiet placerat interdum.Mauris sit amet.
          </ListItem>
        </div>
      </section>

      {/* Big Numbers */}
      <section className="relative mt-12 items-center gap-6 border-y bg-muted  py-12">
        {/* Content */}
        <div className="container flex h-16 items-center justify-center gap-10">
          <div className="relative">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              90
            </h1>
            <p className="text-center text-sm font-medium uppercase text-muted-foreground">
              Cities
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="relative">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              40B+
            </h1>
            <p className="text-center text-sm font-medium uppercase text-muted-foreground">
              Crops Per Week
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="relative">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              10PB
            </h1>
            <p className="text-center text-sm font-medium uppercase text-muted-foreground">
              Protein Produced
            </p>
          </div>
          <Separator orientation="vertical" />
          <div className="relative">
            <h1 className="scroll-m-20 text-center text-4xl font-extrabold tracking-tight lg:text-5xl">
              99.99%
            </h1>
            <p className="text-center text-sm font-medium uppercase text-muted-foreground">
              Effective
            </p>
          </div>
        </div>
      </section>

      {/* See More */}

      <section className="relative mx-auto flex w-full max-w-7xl flex-col items-center gap-10 px-8 py-12">
        {/* Label */}
        <div className="flex flex-col items-center text-center">
          <p className="text-lg font-semibold leading-7 text-muted-foreground [&:not(:first-child)]:mt-2">
            Begin Your Journey
          </p>
        </div>

        {/* Content */}
        <div className="grid min-h-2/3 w-full grid-cols-[0.75fr_1fr] gap-6">
          <div className="relative mx-auto h-96 w-full cursor-pointer border p-6 transition-colors duration-200 hover:bg-muted">
            <h1 className="mb-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
              Take Our <br /> Guided Tour
            </h1>
            <ArrowRight className="h-16 w-16" />
          </div>
          <div className="relative mx-auto flex h-full w-full flex-col gap-4 px-6">
            <div>
              <h1 className="scroll-m-20 pb-1 text-3xl font-semibold tracking-tight transition-colors first:mt-0">
                Make Your Own Way
              </h1>
              <p className="text-sm text-muted-foreground">
                Alternatively explore our wiki at your own pace
              </p>
            </div>
            <div className="relative grid h-full w-full grid-cols-2 gap-4">
              <Skeleton className="h-full w-full" />
              <Skeleton className="h-full w-full" />
              <Skeleton className="h-full w-full" />
              <Skeleton className="h-full w-full" />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

interface IListItemProps {
  icon: JSX.Element
  title: string
  children: React.ReactNode
}

const ListItem = ({ icon, title, children }: IListItemProps) => {
  return (
    <div className="flex flex-col">
      {/* Icon */}
      <div className="flex h-10 w-10 items-center justify-center rounded bg-muted text-muted-foreground">
        {icon}
      </div>
      <h2 className="mt-4 scroll-m-20 text-xl font-semibold tracking-tight">
        {title}
      </h2>
      <p className="mt-2 leading-7 text-muted-foreground">{children}</p>
    </div>
  )
}
