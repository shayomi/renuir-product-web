import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import Nav from "./HomeNav";

export function HomeHero() {
  return (
    <section className="relative overflow-hidden">
      <Image
        src="/images/home/renuir-bg.png"
        alt="Hero background"
        fill
        priority
        className="object-cover"
      />
      <div className="relative mt-12">
        {" "}
        <Nav />
      </div>

      <div className="relative app-container py-40 flex flex-col text-center">
        <Typography
          variant="bigletter"
          className="mt-8 text-[204px] text-white/80 font-normal"
        >
          Lost &amp; Found,
        </Typography>

        <Typography
          variant="bigletter"
          className="tracking-tightest text-white"
        >
          Reimagined.
        </Typography>

        <Typography
          variant="lead"
          className="mx-auto mt-6 max-w-lg text-white/80"
        >
          A secure platform connecting venues and people. Recover items with
          dignity, speed, and transparency.
        </Typography>

        <div className="mt-18 flex flex-wrap items-center justify-center gap-4">
          <Button size="lg" variant="secondary" className="rounded-full px-8">
            Business Solutions
          </Button>

          <Button
            size="lg"
            className="rounded-full bg-primary px-8 text-primary-foreground hover:bg-primary/90"
          >
            Download the app
          </Button>
        </div>
      </div>
    </section>
  );
}
