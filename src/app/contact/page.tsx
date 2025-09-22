"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Navbar } from "@/components/nav/Navbar";
import { MobileNavbar } from "@/components/nav/MobileNavbar";
import Logo from "@/components/ui/Logo";
import { cn } from "@/lib/utils";
import {
  Mail,
  Phone,
  MessageCircle,
  Github,
  Linkedin,
  Twitter,
  Send,
  CheckCircle,
  AlertCircle,
} from "lucide-react";
import { OWNER_DETAILS } from "@/data/owner.data";

// Icon mapping for dynamic icon rendering
const iconMap = {
  mail: Mail,
  phone: Phone,
  "message-circle": MessageCircle,
  github: Github,
  linkedin: Linkedin,
  twitter: Twitter,
} as const;

export default function ContactPage() {
  const [activeTab, setActiveTab] = useState<"contact" | "social">("contact");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<
    "idle" | "success" | "error"
  >("idle");

  // Handle form submission
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus("success");
        setFormData({ name: "", email: "", subject: "", message: "" });
      } else {
        setSubmitStatus("error");
      }
    } catch (error) {
      setSubmitStatus("error");
    } finally {
      setIsSubmitting(false);
    }
  };

  // Handle input changes
  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  return (
    <main className="min-h-screen bg-background text-foreground">
      <Navbar />
      <MobileNavbar />

      {/* Hero Section */}
      <section className="relative pt-20 pb-16 overflow-hidden">
        {/* Background effects */}
        <div className="absolute inset-0 bg-gradient-to-br from-imperial-red/5 via-folly/5 to-tangelo/5" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_20%,hsl(var(--background)))]" />

        <div className="relative z-10 container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              Let's{" "}
              <span className="bg-gradient-to-r from-imperial-red via-folly to-tangelo bg-clip-text text-transparent">
                Connect
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Ready to work together? I'm always excited to discuss new
              opportunities and innovative projects.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Content */}
      <section className="relative z-10 container mx-auto px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
          {/* Left Side - Contact Info & Socials */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="space-y-8"
          >
            {/* Profile Card */}
            <div className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8">
              <div className="flex items-center gap-4 mb-6">
                <Logo size="lg" />
                <div>
                  <h3 className="text-2xl font-bold">{OWNER_DETAILS.name}</h3>
                  <p className="text-muted-foreground">{OWNER_DETAILS.title}</p>
                </div>
              </div>
              <p className="text-muted-foreground leading-relaxed">
                {OWNER_DETAILS.bio}
              </p>
            </div>

            {/* Tab Navigation */}
            <div className="flex gap-2 bg-muted/30 p-1 rounded-lg">
              <button
                onClick={() => setActiveTab("contact")}
                className={cn(
                  "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
                  activeTab === "contact"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Contact Info
              </button>
              <button
                onClick={() => setActiveTab("social")}
                className={cn(
                  "flex-1 py-2 px-4 rounded-md text-sm font-medium transition-all",
                  activeTab === "social"
                    ? "bg-background text-foreground shadow-sm"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                Social Links
              </button>
            </div>

            {/* Tab Content */}
            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="space-y-4"
            >
              {activeTab === "contact" ? (
                <div className="space-y-4">
                  {Object.values(OWNER_DETAILS.contactMethods).map(
                    (method, index) => {
                      const IconComponent =
                        iconMap[method.icon as keyof typeof iconMap];
                      return (
                        <motion.a
                          key={method.name}
                          href={method.href}
                          initial={{ opacity: 0, x: -20 }}
                          animate={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.3, delay: index * 0.1 }}
                          className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl hover:bg-card/50 transition-all group"
                        >
                          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-imperial-red/20 to-folly/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                            <IconComponent className="w-6 h-6 text-imperial-red" />
                          </div>
                          <div className="flex-1">
                            <h4 className="font-semibold">{method.name}</h4>
                            <p className="text-sm text-muted-foreground">
                              {method.value}
                            </p>
                            <p className="text-xs text-muted-foreground/70">
                              {method.description}
                            </p>
                          </div>
                        </motion.a>
                      );
                    }
                  )}
                </div>
              ) : (
                <div className="space-y-4">
                  {Object.values(OWNER_DETAILS.social).map((social, index) => {
                    const IconComponent =
                      iconMap[social.icon as keyof typeof iconMap];
                    return (
                      <motion.a
                        key={social.name}
                        href={social.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.3, delay: index * 0.1 }}
                        className="flex items-center gap-4 p-4 bg-card/30 backdrop-blur-sm border border-border/20 rounded-xl hover:bg-card/50 transition-all group"
                      >
                        <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-imperial-red/20 to-folly/20 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <IconComponent
                            className={cn(
                              "w-6 h-6 text-imperial-red",
                              social.color
                            )}
                          />
                        </div>
                        <div className="flex-1">
                          <h4 className="font-semibold">{social.name}</h4>
                          <p className="text-sm text-muted-foreground">
                            Follow me on {social.name}
                          </p>
                        </div>
                      </motion.a>
                    );
                  })}
                </div>
              )}
            </motion.div>
          </motion.div>

          {/* Right Side - Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-card/50 backdrop-blur-sm border border-border/20 rounded-2xl p-8"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Send me a message</h2>
              <p className="text-muted-foreground">
                Have a project in mind? Let's discuss how we can bring your
                ideas to life.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <label
                    htmlFor="name"
                    className="block text-sm font-medium mb-2"
                  >
                    Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:ring-2 focus:ring-imperial-red/50 focus:border-imperial-red transition-all"
                    placeholder="Your name"
                  />
                </div>
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm font-medium mb-2"
                  >
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:ring-2 focus:ring-imperial-red/50 focus:border-imperial-red transition-all"
                    placeholder="your@email.com"
                  />
                </div>
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="block text-sm font-medium mb-2"
                >
                  Subject *
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:ring-2 focus:ring-imperial-red/50 focus:border-imperial-red transition-all"
                  placeholder="What's this about?"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium mb-2"
                >
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={6}
                  className="w-full px-4 py-3 bg-background/50 border border-border/20 rounded-lg focus:ring-2 focus:ring-imperial-red/50 focus:border-imperial-red transition-all resize-none"
                  placeholder="Tell me about your project or idea..."
                />
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-gradient-to-r from-imperial-red to-folly text-white py-3 px-6 rounded-lg font-semibold hover:from-imperial-red/90 hover:to-folly/90 transition-all disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                    Sending...
                  </>
                ) : (
                  <>
                    <Send className="w-4 h-4" />
                    Send Message
                  </>
                )}
              </button>

              {/* Status Messages */}
              {submitStatus === "success" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-green-400 bg-green-400/10 border border-green-400/20 rounded-lg p-3"
                >
                  <CheckCircle className="w-5 h-5" />
                  <span>
                    Message sent successfully! I'll get back to you soon.
                  </span>
                </motion.div>
              )}

              {submitStatus === "error" && (
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="flex items-center gap-2 text-red-400 bg-red-400/10 border border-red-400/20 rounded-lg p-3"
                >
                  <AlertCircle className="w-5 h-5" />
                  <span>
                    Failed to send message. Please try again or contact me
                    directly.
                  </span>
                </motion.div>
              )}
            </form>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
