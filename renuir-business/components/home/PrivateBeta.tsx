import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Typography } from "@/components/ui/typography";
import { features } from "../data/homefeatures";

const PrivateBeta = () => {
  return (
    <section className="bg-[#020617]">
      <div className="relative app-container grid gap-16 py-48 lg:grid-cols-2">
        <div className="max-w-xl">
          <span className="inline-flex rounded-full bg-amber-400/20 px-4 py-1 text-sm font-medium text-amber-300">
            Private beta
          </span>

          <Typography variant="h2" className="mt-6 text-white">
            For venues that manage lost-and-found.
          </Typography>

          <Typography variant="p" className="mt-6 text-white/70">
            We are building an auditable system for airports, hotels, and
            transport hubs. Replace spreadsheets with automated recovery.
          </Typography>

          <div className="mt-10 grid gap-6 sm:grid-cols-2">
            {features.map((feature) => (
              <div
                key={feature.title}
                className="rounded-2xl bg-white/5 p-6 backdrop-blur"
              >
                <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-white/10">
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={18}
                    height={18}
                  />
                </div>

                <Typography variant="h6" className="text-white">
                  {feature.title}
                </Typography>

                <Typography variant="mutedText" className="mt-2 text-white/60">
                  {feature.description}
                </Typography>
              </div>
            ))}
          </div>

          <Button
            size="lg"
            variant="secondary"
            className="mt-10 rounded-full px-8"
          >
            Explore Renuir for Business
          </Button>
        </div>

        {/* Right */}
        <div className="relative ">
          <Image
            src="/images/home/privatebetaimg.png"
            alt="Renuir private beta"
            fill
            priority
            className="object-contain w-full"
          />
        </div>
      </div>
    </section>
  );
};

export default PrivateBeta;
