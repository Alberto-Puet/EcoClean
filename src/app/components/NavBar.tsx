"use client";

import { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { HiMenu, HiX } from "react-icons/hi";
import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";

const linkVariants = {
  hidden: { opacity: 0, x: 30 },
  visible: (i: number) => ({
    opacity: 1,
    x: 0,
    transition: { delay: i * 0.15, duration: 0.5, ease: "easeOut" },
  }),
};

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleClose = () => setMenuOpen(false);

  return (
    <header
      className={`fixed top-0 left-0 w-full z-2000 transition-colors duration-300 ${
        scrolled ? "bg-slate-900 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-bold text-white">EcoClean</Link>

        {/* Ícono móvil */}
        <div
          className="lg:hidden text-white text-3xl cursor-pointer z-[60]"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX /> : <HiMenu />}
        </div>

        {/* Links desktop */}
        <ul className="hidden lg:flex gap-6 text-white font-medium items-center">
          <li className="relative group">
            <div className="cursor-pointer flex items-center">
              Productos
              <IoIosArrowDown className="ml-1" />
            </div>
            <ul className="absolute top-full left-0 mt-2 bg-slate-900 text-[#e3bf5f] rounded shadow-md transition-all duration-300 min-w-[200px] z-50 opacity-0 invisible group-hover:opacity-100 group-hover:visible group-hover:translate-y-1 hover:opacity-100 hover:visible hover:translate-y-1">
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer"><Link href="/landing-pages">Para el Hogar</Link></li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer"><Link href="/sitios-web">Industriales</Link></li>
              <li className="px-4 py-2 hover:bg-slate-800 cursor-pointer"><Link href="/sitios-web">Estetica Vehicular</Link></li>
            </ul>
          </li>
          <li><a href="/sobre-nosotros">Nosotros</a></li>
          <li><a href="/contacto">Contacto</a></li>
        </ul>

        {/* Botones a la derecha */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contacto"
            className="bg-[#1b4832] hover:bg-[#2a3a32] text-[#e3bf5f] px-4 py-2 rounded-sm font-light  transition-all"
          >
            Hablemos
          </Link>
        </div>
      </nav>

      {/* Sidebar y overlay */}
      <AnimatePresence>
        {menuOpen && (
          <>
            {/* Fondo oscuro */}
            <motion.div
              key="overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="fixed inset-0 bg-black z-40"
              onClick={handleClose}
            />

            {/* Sidebar */}
            <motion.aside
              key="sidebar"
              initial={{ x: "100%" }}
              animate={{ x: "15%" }}
              exit={{ x: "100%" }}
              transition={{ duration: 0.5, ease: "easeInOut" }}
              className="fixed top-0 right-0 w-[85%] h-screen bg-slate-900 z-50 px-6 py-8 flex flex-col text-white shadow-xl overflow-y-auto"
            >
              {/* Cruz de cierre */}
              <div className="self-end text-3xl mb-4 z-[60]" onClick={handleClose}>
                <HiX className="cursor-pointer" />
              </div>

              <div className="mt-6 flex flex-col gap-6">
                {/* Links */}
                {[
                  { label: "Servicios", hasDropdown: true },
                  { label: "Nosotros", href: "/sobre-nosotros" },
                  { label: "Contacto", href: "/contacto" },
                ].map((item, i) =>
                  item.hasDropdown ? (
                    <motion.div
                      key={item.label}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className="flex flex-col"
                    >
                      <button
                        onClick={() => setDropdownOpen(!dropdownOpen)}
                        className="flex justify-between items-center w-full text-lg"
                      >
                        <span>{item.label}</span>
                        <IoIosArrowDown className={`transition-transform ${dropdownOpen ? "rotate-180" : ""}`} />
                      </button>
                      {dropdownOpen && (
                        <div className="mt-2 ml-4 flex flex-col gap-5 text-sm  rounded   text-[#e3bf5f]">
                          <Link href="/landing-pages">Para el Hogar</Link>
                          <Link href="/sitios-web">Industriales</Link>
                          <Link href="/sitios-web">Estetica Vehicular</Link>
                        </div>
                      )}
                    </motion.div>
                  ) : (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      custom={i}
                      variants={linkVariants}
                      initial="hidden"
                      animate="visible"
                      className="text-lg font-light hover:text-cyan-400"
                    >
                      {item.label}
                    </motion.a>
                  )
                )}
                <motion.a
                  href="/contacto"
                  custom={5}
                  variants={linkVariants}
                  initial="hidden"
                  animate="visible"
                  className="bg-[#1b4832] text-[#e3bf5f] px-4 py-2 rounded-sm font-light hover:text-white hover:bg-emerald-500 transition-all"
                >
                  Hablemos
                </motion.a>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
