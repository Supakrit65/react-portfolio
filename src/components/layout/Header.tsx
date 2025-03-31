import React from "react";
import { motion } from "framer-motion";
import clsx from "clsx";
import { links } from "../../lib/data";
import { useActiveSectionStore } from "../../stores/useActiveSectionStore";

const Header: React.FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionStore();

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    setActiveSection(name);
    setTimeOfLastClick(Date.now());

    const element = document.querySelector(`#${name.toLowerCase()}`);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="z-[999] relative">
      <motion.div
        className="fixed top-0 left-1/2 h-[4.5rem] 
          rounded-none border border-nord-2/40 bg-nord-0/90 shadow-lg shadow-nord-0/10 backdrop-blur-[0.5rem]
          sm:top-6 sm:h-[3.25rem] sm:rounded-full sm:min-w-[36rem] w-full sm:w-auto px-6"
        initial={{ y: -100, x: "-50%", opacity: 0 }}
        animate={{ y: 0, x: "-50%", opacity: 1 }}
      >
        <nav className="flex h-full items-center justify-center">
          <ul className="flex flex-wrap items-center justify-center gap-y-1 text-[0.9rem] font-medium text-nord-4 sm:flex-nowrap sm:gap-5">
            {links.map((link) => (
              <motion.li
                key={link.hash}
                className="h-3/4 flex items-center justify-center relative"
                initial={{ y: -100, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
              >
                <a
                  className={clsx(
                    "flex w-full items-center justify-center px-3 py-3 text-nord-4 hover:text-nord-8 transition cursor-pointer",
                    {
                      "text-nord-8": activeSection === link.name,
                    }
                  )}
                  href={link.hash}
                  onClick={(e) => handleClick(e, link.name)}
                >
                  {link.name}
                  {link.name === activeSection && (
                    <motion.span
                      className="bg-nord-8/30 rounded-full absolute top-1 bottom-1 left-[-0.3rem] right-[-0.3rem] -z-10"
                      layoutId="activeSection"
                      transition={{
                        type: "spring",
                        stiffness: 380,
                        damping: 30,
                      }}
                    />
                  )}
                </a>
              </motion.li>
            ))}
          </ul>
        </nav>
      </motion.div>
    </header>
  );
};

export default Header;
