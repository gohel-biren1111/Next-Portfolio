import { Encryption } from "@/components/main/encryption";
import { Hero } from "@/components/main/hero";
import { Projects } from "@/components/main/projects";
import { Skills } from "@/components/main/skills";
import { Package } from "@/components/main/package";
import Resume from "@/components/main/Resume";
import Contact from "@/components/main/Contact";
import Team from "@/components/main/Team";

export default function Home() {
  return (
    <main className="h-full w-full">
      <div className="flex flex-col gap-20">
        <Hero />
        <Skills />
        {/* <Encryption /> */}
        <Projects />
        <Package />
        <Resume />
        <Contact />
      </div>
    </main>
  );
}
