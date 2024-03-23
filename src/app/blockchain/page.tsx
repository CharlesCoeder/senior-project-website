import React from "react";

import HeroText from "@/components/hero-text";

export default function Page() {
  const title = "Blockchain Technology";

  return (
    <div className="flex flex-col gap-2 h-screen text-4xl">
      <HeroText title={title} />
      <div>Page being implemented...</div>
    </div>
  );
}
