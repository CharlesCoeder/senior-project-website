import HeroSection from "@/components/hero-section";
import HomeInfo from "@/components/home-info";

export default function Home() {
  return (
    <div className="flex min-w-screen flex-col h-screen text-4xl ml-20 mr-20">
      <HeroSection />
      <HomeInfo />
    </div>
  );
}
