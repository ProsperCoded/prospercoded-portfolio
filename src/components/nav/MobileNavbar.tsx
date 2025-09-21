"use client";
import Link from "next/link";
import Image from "next/image";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { navLinks } from "./nav.data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export const MobileNavbar = () => {
  const [activeLink, setActiveLink] = useState<string | null>(null);

  return (
    <>
      {/* Fixed circular logo top-left on mobile */}
      <Link
        href="/"
        className="md:hidden fixed top-4 left-4 z-[60] h-10 w-10 rounded-full overflow-hidden border border-border/30 shadow-md bg-background/70 backdrop-blur-sm flex items-center justify-center"
      >
        <Image
          src="/assets/logo.png"
          alt="Logo"
          width={40}
          height={40}
          className="h-full w-full object-cover"
        />
      </Link>

      {/* Bottom navigation bar */}
      <nav className="md:hidden fixed bottom-3 left-1/2 -translate-x-1/2 z-50 w-[92vw] max-w-sm">
        <div className="bg-background/90 backdrop-blur-md border border-border/30 rounded-xl px-3 py-2 shadow-lg">
          <ul className="flex items-center justify-between">
            {navLinks.map((link) => {
              const icon = link.icon;
              const isActive = activeLink === link.name;

              return (
                <li key={link.name} className="relative">
                  <Link
                    href={link.href}
                    className="flex flex-col items-center gap-0.5 px-2 py-1.5 rounded-lg transition-all duration-200"
                    onTouchStart={() => setActiveLink(link.name)}
                    onTouchEnd={() =>
                      setTimeout(() => setActiveLink(null), 150)
                    }
                    onClick={() => {
                      setActiveLink(link.name);
                      setTimeout(() => setActiveLink(null), 200);
                    }}
                  >
                    {isActive && (
                      <motion.div
                        layoutId="mobile-active-indicator"
                        className="absolute inset-0 bg-red-600/15 rounded-lg"
                        style={{ boxShadow: "0 0 12px 1px rgba(255,0,0,0.25)" }}
                        transition={{
                          type: "spring",
                          stiffness: 400,
                          damping: 30,
                        }}
                      />
                    )}
                    {icon && (
                      <FontAwesomeIcon
                        icon={icon}
                        className={`transition-colors duration-200 relative z-10 ${
                          isActive ? "text-red-500" : "text-foreground/70"
                        }`}
                        style={{ fontSize: '18px' }}
                      />
                    )}
                    <span
                      className={`text-[10px] font-medium transition-colors duration-200 relative z-10 ${
                        isActive ? "text-red-500" : "text-foreground/70"
                      }`}
                    >
                      {link.name}
                    </span>
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    </>
  );
};
