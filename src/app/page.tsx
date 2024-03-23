import HomeInfo from "@/components/home-info";
import HomeHero from "@/components/home-hero";

export default function Home() {
  return (
    <div className="flex min-w-screen flex-col h-screen text-4xl">
      <HomeHero />
      <HomeInfo />
    </div>
  );
}
