"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import HeroText from "./hero-text";

import React from "react";

export default function HomeHero() {
  return (
    <div className="flex items-center gap-[11rem]">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <HeroText
          title={"Trusted Environmental Predictions"}
          subtitle={"Using Federated Learning & Blockchain on the Edge"}
        />
      </motion.div>
      <motion.div
        className="mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="float-right"
          src="/cloud.png"
          alt="Earth"
          width={200}
          height={200}
        />
      </motion.div>
    </div>
  );
}
