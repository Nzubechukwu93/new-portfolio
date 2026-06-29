import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import DarkModeToggle from "./DarkModeToggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className="
      fixed
      top-0
      left-0
      right-0
      z-50
      backdrop-blur-lg
      bg-white/70
      dark:bg-slate-950/70
      border-b
      border-white/10
      "
    >
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="font-bold text-xl">Portfolio</h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center gap-8">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
          <DarkModeToggle />
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl"
        >
          ☰
        </button>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            className="md:hidden bg-white dark:bg-slate-900"
          >
            <div className="flex flex-col p-5 gap-4">
              <a href="#about" onClick={() => setIsOpen(false)}>
                About
              </a>

              <a href="#projects" onClick={() => setIsOpen(false)}>
                Projects
              </a>

              <a href="#contact" onClick={() => setIsOpen(false)}>
                Contact
              </a>

              <DarkModeToggle />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;