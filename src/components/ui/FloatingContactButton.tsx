"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MessageCircle, X, Mail, Phone } from "lucide-react";
import Link from "next/link";
import { OWNER_DETAILS } from "@/data/owner.data";

export function FloatingContactButton() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Floating Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed top-4 right-4 z-50 bg-gray-500/20 backdrop-blur-md border border-white/10 text-white/90 shadow hover:bg-gray-500/30 md:top-auto md:bottom-6 md:right-6 md:bg-gradient-to-r md:from-imperial-red md:to-folly md:text-white md:shadow-lg md:hover:shadow-xl md:border-0 transition-all duration-300 flex items-center justify-center group rounded-full px-3 py-1.5 md:w-14 md:h-14 md:p-0"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <div className="flex items-center gap-1.5 md:gap-2">
          <motion.div
            animate={{ rotate: isOpen ? 180 : 0 }}
            transition={{ duration: 0.2 }}
          >
            {isOpen ? (
              <X className="w-3.5 h-3.5 md:w-6 md:h-6" />
            ) : (
              <MessageCircle className="w-3.5 h-3.5 md:w-6 md:h-6" />
            )}
          </motion.div>
          <span className="md:hidden font-medium text-xs tracking-wide">
            {isOpen ? "Close" : "Let's Chat"}
          </span>
        </div>
      </motion.button>

      {/* Quick Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: -20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed top-14 md:top-auto md:bottom-24 right-4 md:right-6 z-40 space-y-3"
          >
            {/* Contact Form Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
            >
              <Link
                href="/contact"
                className="flex items-center gap-3 bg-card/90 backdrop-blur-sm border border-border/20 rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-card transition-all shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <MessageCircle className="w-5 h-5 text-imperial-red" />
                <span>Contact Form</span>
              </Link>
            </motion.div>

            {/* Email Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <a
                href={OWNER_DETAILS.contactMethods.email.href}
                className="flex items-center gap-3 bg-card/90 backdrop-blur-sm border border-border/20 rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-card transition-all shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Mail className="w-5 h-5 text-imperial-red" />
                <span>Email Me</span>
              </a>
            </motion.div>

            {/* WhatsApp Link */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <a
                href={OWNER_DETAILS.contactMethods.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 bg-card/90 backdrop-blur-sm border border-border/20 rounded-xl px-4 py-3 text-sm font-medium text-foreground hover:bg-card transition-all shadow-lg hover:shadow-xl"
                onClick={() => setIsOpen(false)}
              >
                <Phone className="w-5 h-5 text-imperial-red" />
                <span>WhatsApp</span>
              </a>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Backdrop */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-black/20 backdrop-blur-sm"
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>
    </>
  );
}
