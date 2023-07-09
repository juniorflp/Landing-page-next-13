import { Hero } from "@/components";
import Section2 from "@/components/section2/Section2";

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg-color-ligth dark:bg-black flex flex-col ">
      <Hero />
      <Section2 />
    </main>
  );
}
