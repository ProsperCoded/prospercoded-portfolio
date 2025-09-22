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
        className="fixed bottom-16 md:bottom-6 right-6 z-50 w-14 h-14 bg-gradient-to-r from-imperial-red to-folly text-white rounded-full shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 25 }}
      >
        <motion.div
          animate={{ rotate: isOpen ? 45 : 0 }}
          transition={{ duration: 0.2 }}
        >
          {isOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <MessageCircle className="w-6 h-6" />
          )}
        </motion.div>
      </motion.button>

      {/* Quick Contact Options */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: 20 }}
            transition={{ duration: 0.2 }}
            className="fixed bottom-32 md:bottom-24 right-6 z-40 space-y-3"
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
