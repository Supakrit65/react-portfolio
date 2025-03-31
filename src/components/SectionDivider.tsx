"use client";
import { motion } from "framer-motion";

const SectionDivider = () => {
  return (
    <motion.div
      className="mb-24 sm:my-24"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        delay: 0.2,
      }}
    >
      <div className="relative flex flex-row sm:flex-col justify-center items-center">
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-nord-3 rounded-full opacity-50"></div>
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-nord-4 rounded-full animate-pulse opacity-60"></div>
        <div className="mx-2 sm:mx-0 sm:my-2 w-2 h-2 bg-nord-6 rounded-full opacity-70"></div>
      </div>
    </motion.div>
  );
};

export default SectionDivider;
