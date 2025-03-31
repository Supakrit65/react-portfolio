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
      className="mb-28 max-w-[60rem] text-center sm:mb-0"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h1
          className="mb-4 mt-4 p-4 text-8xl font-extrabold tracking-tight bg-gradient-to-r from-nord-8 to-nord-9 text-transparent bg-clip-text drop-shadow-2xl"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ type: "spring", stiffness: 80, duration: 0.8 }}
          whileHover={{ scale: 1.05 }}
        >
          Hi, I'm Supakrit65
        </motion.h1>

        <motion.h2
          className="mb-6 p-2 text-4xl font-bold text-nord-4 drop-shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.6 }}
          whileHover={{ y: -3 }}
        >
          A Full stack developer
        </motion.h2>
      </motion.div>

      <motion.p
        className="mb-10 p-4 text-lg font-medium leading-relaxed text-nord-4 max-w-[50rem] mx-auto"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.5 }}
      >
        I'm an undergraduate software engineering student at Kasetsart
        University. I love building innovative websites and diving into the
        world of data engineering.
      </motion.p>

      <motion.div
        className="flex flex-col sm:flex-row justify-center items-center gap-4"
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.5 }}
      >
        {/* Contact Me */}
        <a
          href="#contact"
          className="group bg-nord-10 text-white px-8 py-3 rounded-full transition transform hover:scale-105 active:scale-95"
          onClick={handleContactClick}
        >
          Contact Me{" "}
          <BsArrowRight className="inline-block ml-2 transition-transform group-hover:translate-x-1" />
        </a>

        {/* Resume */}
        <a
          href="/resume/supakrit-resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="group bg-nord-3 text-nord-4 px-8 py-3 rounded-full border border-nord-4 transition transform hover:scale-105 active:scale-95"
        >
          View Resume{" "}
          <HiDownload className="inline-block ml-2 transition-transform group-hover:translate-y-1" />
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/supakritaphonmaeklong/"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nord-6 text-nord-2 p-3 rounded-full border border-nord-3 transition transform hover:scale-105 active:scale-95"
        >
          <BsLinkedin size={24} />
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/Supakrit65"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-nord-6 text-nord-2 p-3 rounded-full border border-nord-3 transition transform hover:scale-105 active:scale-95"
        >
          <BsGithub size={24} />
        </a>
      </motion.div>
    </section>
  );
};

export default Intro;
