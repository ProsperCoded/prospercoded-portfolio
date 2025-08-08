"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navLinks = [
    {
      name: "About",
      href: "#about",
    },
    {
      name: "Resume",
      href: "#resume",
    },
    {
      name: "Projects",
      href: "#projects",
    },
    {
      name: "All Projects",
      href: "/projects",
    },
  ];

  return (
    <nav className="fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-max">
      <div className="flex items-center justify-between gap-x-3 bg-background/80 backdrop-blur-sm border border-border/20 rounded-lg px-3 py-2">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8  object-cover"
          />
        </Link>
        <div className="hidden md:flex items-center gap-x-2">
          <div className="h-6 w-px bg-border/80" />
          <ul
            className="flex items-center gap-x-2"
            onMouseLeave={() => setActiveLink(null)}
          >
            {navLinks.map((link) => (
              <li
                key={link.name}
                onMouseEnter={() => setActiveLink(link.name)}
                className="relative"
              >
                {activeLink === link.name && (
                  <motion.div
                    layoutId="active-link-indicator"
                    className="absolute inset-0 bg-red-600/80 rounded-full scale-125"
                    style={{
                      boxShadow: "0 0 10px 2px rgba(255, 0, 0, 0.8)",
                    }}
                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                  />
                )}
                <Link
                  href={link.href}
                  className="text-sm text-foreground/80 hover:text-foreground transition-colors px-3 py-1.5 relative z-10"
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
        <div className="md:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2 rounded-md hover:bg-muted transition-colors"
          >
            {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            className="md:hidden mt-2 bg-background/80 backdrop-blur-sm border border-border/20 rounded-lg p-4"
          >
            <ul className="flex flex-col gap-y-4">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-lg text-foreground/80 hover:text-foreground transition-colors block text-center"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
