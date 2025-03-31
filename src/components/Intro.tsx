import React from "react";
import { motion } from "framer-motion";
import { BsArrowRight, BsGithub, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";

import { useSectionInView } from "../lib/useSectionInView";
import { useActiveSectionStore } from "../stores/useActiveSectionStore";

const Intro: React.FC = () => {
  const { ref } = useSectionInView("Home", 0.5);
  const { setActiveSection, setTimeOfLastClick } = useActiveSectionStore();

  const handleContactClick = () => {
    setActiveSection("Contact");
    setTimeOfLastClick(Date.now());
  };

  return (
    <section
      ref={ref}
      id="home"
      // On mobile: margin-bottom is large (mb-16), on larger screens remove it (sm:mb-0)
      // Constrain maximum width for readability
      className="mx-auto mb-16 max-w-[60rem] text-center sm:mb-0"
    >
      {/* Container for text headings */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        {/* Headline */}
        <motion.h1
          // Make headline smaller on mobile, then bigger from sm breakpoint onwards
          className="mb-4 mt-20 px-4 text-5xl font-extrabold tracking-tight
                     bg-gradient-to-r from-nord-8 to-nord-9 text-transparent
                     bg-clip-text drop-shadow-2xl
                     sm:text-7xl md:text-8xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Hi, I&apos;m Supakrit65
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          className="mb-6 px-2 text-2xl font-bold text-nord-4 drop-shadow-lg
                     sm:text-3xl md:text-4xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ y: -3 }}
        >
          A Full Stack Developer
        </motion.h2>
      </motion.div>

      {/* Description / Body Text */}
      <motion.p
        className="mx-auto mb-10 max-w-[50rem] px-4 text-base font-medium
                   leading-relaxed text-nord-4
                   sm:text-lg"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        I&apos;m an undergraduate software engineering student at Kasetsart
        University. I love building innovative websites and diving into the
        world of data engineering.
      </motion.p>

      {/* Actions Row */}
      <motion.div
        // By default, stack items vertically (mobile).
        // At sm and up, arrange them in a row.
        className="flex flex-col items-center justify-center gap-4 sm:flex-row"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {/* Contact Me */}
        <a
          href="#contact"
          className="group rounded-full bg-nord-10 px-8 py-3 text-white
                     transition transform hover:scale-105 active:scale-95"
          onClick={handleContactClick}
        >
          Contact Me{" "}
          <BsArrowRight className="ml-2 inline-block transition-transform group-hover:translate-x-1" />
        </a>

        {/* Resume */}
        <a
          href="/resume/supakrit-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group rounded-full border border-nord-4 bg-nord-3
                     px-8 py-3 text-nord-4
                     transition transform hover:scale-105 active:scale-95"
        >
          View Resume{" "}
          <HiDownload className="ml-2 inline-block transition-transform group-hover:translate-y-1" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/supakritaphonmaeklong/"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-nord-3 bg-nord-6 p-3 text-nord-2
                     transition transform hover:scale-105 active:scale-95"
        >
          <BsLinkedin size={24} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Supakrit65"
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-full border border-nord-3 bg-nord-6 p-3 text-nord-2
                     transition transform hover:scale-105 active:scale-95"
        >
          <BsGithub size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
