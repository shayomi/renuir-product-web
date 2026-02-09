import { AboutHero } from "@/components/about/AboutHero";
import { Team } from "@/components/about/Team";
import { TrustFeatures } from "@/components/about/TrustFeatures";

const SECTIONS = [
  { Component: AboutHero, className: "" },
  { Component: Team, className: "" },
  { Component: TrustFeatures, className: "" },
];

export default function Home() {
  return (
    <main className="overflow-hidden">
      {SECTIONS.map(({ Component, className }, index) => (
        <section key={index} className={className}>
          <Component />
        </section>
      ))}
    </main>
  );
}
