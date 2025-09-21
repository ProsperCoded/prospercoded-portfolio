import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome, faUser, faFileAlt, faFolderOpen } from "@fortawesome/free-solid-svg-icons";

// Single source of truth for navigation items used by desktop and mobile
export type NavLinkItem = {
  name: string;
  href: string;
  icon?: any; // FontAwesome icon for mobile/other UIs
};

export const navLinks: NavLinkItem[] = [
  { name: "Home", href: "/", icon: faHome },
  { name: "About", href: "#about", icon: faUser },
  { name: "Resume", href: "#resume", icon: faFileAlt },
  { name: "Projects", href: "/projects", icon: faFolderOpen },
];
