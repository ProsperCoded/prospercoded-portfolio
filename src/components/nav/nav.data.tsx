import type { LucideIcon } from "lucide-react";
import { Home, User, FileText, FolderOpen } from "lucide-react";

// Single source of truth for navigation items used by desktop and mobile
export type NavLinkItem = {
  name: string;
  href: string;
  icon?: LucideIcon; // optional icon for mobile/other UIs
};

export const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/", icon: Home },
  { name: "About", href: "#about", icon: User },
  { name: "Resume", href: "#resume", icon: FileText },
  { name: "Projects", href: "/projects", icon: FolderOpen },
];
