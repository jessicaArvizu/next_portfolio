import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="relative bg-ja_black flex justify-center items-center
     flex-col overflow-hidden mx-auto">
      <div className="w-full">
        <Hero />
      </div>
    </main>
  );
}
