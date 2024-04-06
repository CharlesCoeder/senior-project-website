type HeroTextProps = {
  title: string;
  subtitle?: string;
};

import React from "react";

export default function HeroText({ title, subtitle }: HeroTextProps) {
  return (
    <div className="pb-4 z-10 max-w-md">
      <h1 className="text-5xl font-bold mb-4">{title}</h1>
      <p className="text-2xl">{subtitle}</p>
    </div>
  );
}
