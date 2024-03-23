"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const HeroSection = () => {
  return (
    <div className="flex items-center gap-80">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="p-12 z-10 max-w-md"
      >
        <h1 className="text-6xl font-bold mb-4">
          Trusted Environmental Predictions
        </h1>
        <p className="text-3xl">
          Using Federated Learning & Blockchain on the Edge
        </p>
      </motion.div>
      <motion.div
        className="ml-10 mb-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <Image
          className="float-right"
          src="/cloud.png"
          alt="Earth"
          width={300}
          height={300}
        />
      </motion.div>
    </div>
  );
};

export default HeroSection;
