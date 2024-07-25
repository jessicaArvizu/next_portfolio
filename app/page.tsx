import Hero from "@/components/Hero";
import { FloatingNav } from "@/components/ui/FloatingNav";
import Grid from "@/components/ui/Grid";
import { FaHome } from "react-icons/fa";

export default function Home() {
  return (
    <main className="relative bg-ja_black flex justify-center items-center
     flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <FloatingNav navItems={[
          { name: 'Home', link: '/', icon: <FaHome /> }
        ]} />
        <Hero />
        <Grid />
      </div>
    </main>
  );
}
