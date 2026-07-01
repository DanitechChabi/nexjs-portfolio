import Hero from "@/components/sections/Hero";
import Expertise from "@/components/sections/Expertise";
import Projects from "@/components/sections/Projects";
import Timeline from "@/components/sections/Timeline";
import Testimonials from "@/components/sections/Testimonials";
import FAQ from "@/components/sections/FAQ";
import Blog from "@/components/sections/Blog";

export default function Page() {
  return (
    <main className="min-h-screen bg-pearl">
      <Hero />
      <Expertise />
      <Projects />
      <Timeline />
      <Testimonials />
      <FAQ />
      <Blog />
    </main>
  );
}
