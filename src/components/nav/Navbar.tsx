"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./nav.data";
export const Navbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <nav className="hidden md:block fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[90vw] max-w-max">
      <div className="flex items-center justify-between gap-x-3 bg-background/80 backdrop-blur-sm border border-border/20 rounded-lg px-3 py-2">
        <Link href="/" className="flex items-center gap-x-2">
          <Image
            src="/assets/logo.png"
            alt="Logo"
            width={32}
            height={32}
            className="w-8 h-8 object-cover"
          />
        </Link>
        <div className="flex items-center gap-x-2">
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
      </div>
    </nav>
  );
};
