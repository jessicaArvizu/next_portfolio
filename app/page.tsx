"use client"
import { FloatingNav } from "@/components/ui/FloatingNav";
import { navItems } from "@/data";
import Hero from "@/components/Hero";
import Grid from "@/components/Grid";
import RecentProjects from "@/components/RecentProjects";
import About from "@/components/About"

export default function Home() {
  return (
    <main className="relative bg-ja_black flex justify-center items-center
     flex-col overflow-hidden mx-auto text-text">
      <div className="w-full">
        <FloatingNav navItems={navItems}/>
        <Hero />
        <About/>
        <Grid />
        <RecentProjects/>
      </div>
    </main>
  );
}
