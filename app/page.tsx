"use client"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/components/Hero/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/Projects/RecentProjects";
import Experience from "@/components/Experience/Experience";

export default function Home() {
  return (
    <main className="relative bg-base flex justify-center items-center
     flex-col overflow-hidden mx-auto text-text">
      <div className="w-full">
        <FloatingNav navItems={navItems} />
        <Hero />
        <Grid />
        <Experience />
        <RecentProjects />
      </div>
    </main>
  );
}
