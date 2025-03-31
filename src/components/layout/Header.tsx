import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import clsx from "clsx";
import { links } from "../../lib/data";
import { useActiveSectionStore } from "../../stores/useActiveSectionStore";
import { Menu, X } from "lucide-react";
import logoImage from "../../assets/logo.png"; // Adjust the path as necessary

const Header: React.FC = () => {
  const { activeSection, setActiveSection, setTimeOfLastClick } =
    useActiveSectionStore();
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    name: string
  ) => {
    e.preventDefault();
    setActiveSection(name);
    setTimeOfLastClick(Date.now());

    const element = document.querySelector(`#${name.toLowerCase()}`);
    element?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <header className="z-[999] fixed top-0 left-0 w-full">
      <motion.div
        className="flex items-center justify-between px-6 py-4 bg-nord-0/80 backdrop-blur-md shadow-md"
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
      >
        {/* Logo Image with rounded corners */}
        <img
          src={logoImage}
          alt="Logo"
          className="w-16 h-12 object-cover" // Adjust size as needed
        />

        <button
          className="sm:hidden text-nord-4 hover:text-nord-8 transition"
          onClick={() => setMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden sm:flex gap-4">
          {links.map((link) => (
            <a
              key={link.hash}
              className={clsx(
                "px-3 py-2 text-nord-4 hover:text-nord-8 transition relative",
                activeSection === link.name && "text-nord-8"
              )}
              href={link.hash}
              onClick={(e) => handleClick(e, link.name)}
            >
              {link.name}
              {link.name === activeSection && (
                <motion.span
                  className="absolute inset-0 bg-nord-8/30 rounded-xl -z-10"
                  layoutId="activeSection"
                  transition={{ type: "spring", stiffness: 380, damping: 30 }}
                />
              )}
            </a>
          ))}
        </nav>
      </motion.div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.nav
            className="sm:hidden flex flex-col gap-2 bg-nord-0/95 backdrop-blur-md p-4 shadow-md"
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -50, opacity: 0 }}
          >
            {links.map((link) => (
              <a
                key={link.hash}
                className={clsx(
                  "px-3 py-2 rounded text-nord-4 hover:text-nord-8 transition relative",
                  activeSection === link.name && "text-nord-8 bg-nord-8/20"
                )}
                href={link.hash}
                onClick={(e) => handleClick(e, link.name)}
              >
                {link.name}
              </a>
            ))}
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
