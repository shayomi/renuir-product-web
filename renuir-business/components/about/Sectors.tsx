// components/about/UsedAcrossSectors.tsx
import { Typography } from "@/components/ui/typography";

import { SectorCard } from "./SectorCard";
import { sectors } from "../data/sectorData";

export function Sectors() {
  return (
    <section className="py-36">
      <div className="app-container">
        <Typography
          variant="h1"
          className="mb-16 text-center tracking-tightest"
        >
          Used across sectors.
        </Typography>

        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {sectors.map((sector) => (
            <SectorCard key={sector.title} {...sector} />
          ))}
        </div>
      </div>
    </section>
  );
}
