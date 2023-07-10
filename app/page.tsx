import { Hero } from "@/components";
import Section2 from "@/components/section2/Section2";
import Section3 from "@/components/section3/Section3";

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg-color-ligth dark:bg-black flex flex-col ">
      <Hero />
      <Section2 />
      <Section3 />
    </main>
  );
}
