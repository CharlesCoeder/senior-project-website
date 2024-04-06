"use client";

import { motion } from "framer-motion";

export default function HomeInfo() {
  return (
    <motion.div
      className="flex flex-col gap-6 text-lg mx-auto"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div>
        <h2 className="font-bold text-lg">
          A Hands-On Approach to Environmental Data
        </h2>
        <p className="text-base">
          We’re exploring the possibilities at the intersection of environmental
          data, federated learning, and blockchain technology. Our project is an
          academic exploration, where we're putting theory into practice using a
          network of Raspberry Pis and sensors.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Federated Learning with IoT</h2>
        <p className="text-base">
          In our project, federated learning takes center stage as we harness
          the power of distributed IoT devices. Federated learning allows each
          Raspberry Pi to train models locally on the data they collect,
          minimizing data transfer and enhancing privacy. This decentralized
          approach not only scales efficiently but also introduces a new
          dimension of resilience and locality in data processing.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Blockchain for Trust</h2>
        <p className="text-base">
          Blockchain isn't just for cryptocurrencies; we're using it in an
          innovative way to track and maintain the integrity of the data we
          collect. Each sensor's trustworthiness is recorded on a private
          blockchain, helping us filter out unreliable data. It’s a practical
          approach to understanding how blockchain can contribute to data
          reliability.
        </p>
      </div>

      <div>
        <h2 className="font-bold text-lg">Learning by Doing</h2>
        <p className="text-base">
          This project is as much about learning as it is about creating. We're
          encountering challenges, finding solutions, and gaining valuable
          experience in the realms of federated learning and blockchain. It's a
          journey through the practicalities of implementing theoretical
          concepts, and we’re excited to share our findings and experiences with
          you!
        </p>
      </div>
    </motion.div>
  );
}
