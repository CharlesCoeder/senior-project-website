type HeroTextProps = {
  title: string;
  subtitle?: string;
};

import React from "react";

export default function HeroText({ title, subtitle }: HeroTextProps) {
  console.log(title);
  console.log(subtitle);
  return (
    <div className="pb-12 z-10 max-w-md">
      <h1 className="text-6xl font-bold mb-4">{title}</h1>
      <p className="text-3xl">{subtitle}</p>
    </div>
  );
}
