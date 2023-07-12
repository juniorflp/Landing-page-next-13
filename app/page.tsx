import { Hero, Section2, Section3 } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden bg-bg-color-ligth dark:bg-black flex flex-col transition linear duration-700">
      <Hero />
      <Section2 />
      <Section3 />
    </main>
  );
}
