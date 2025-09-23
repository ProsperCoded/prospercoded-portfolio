// Centralized owner information for the portfolio site
export const OWNER_DETAILS = {
  // Personal Information
  name: "Prosper Enwerem",
  fullName: "Prosper Enwerem Tochukwu",
  username: "Prosper Coded",
  title: "Fullstack Software Engineer",
  bio: "I'm passionate about building scalable solutions that solve real-world problems. Let's discuss how we can work together to create something amazing.",
  location: "Nigeria",

  // Contact Information
  email: "enweremproper@gmail.com",
  phone: "+2349155004456",
  whatsapp: "+2349155004456",

  // Social Links
  social: {
    github: {
      name: "GitHub",
      url: "https://github.com/prosperenwerem",
      icon: "github",
      color: "hover:text-gray-400",
    },
    linkedin: {
      name: "LinkedIn",
      url: "https://linkedin.com/in/prosper-enwerem",
      icon: "linkedin",
      color: "hover:text-blue-400",
    },
    twitter: {
      name: "Twitter",
      url: "https://twitter.com/prosperenwerem",
      icon: "twitter",
      color: "hover:text-blue-300",
    },
  },

  // Contact Methods
  contactMethods: {
    email: {
      name: "Email",
      value: "enweremproper@gmail.com",
      icon: "mail",
      href: "mailto:enweremproper@gmail.com",
      description: "Send me an email",
    },
    phone: {
      name: "Phone",
      value: "+2349155004456",
      icon: "phone",
      href: "tel:+2349155004456",
      description: "Call or text me",
    },
    whatsapp: {
      name: "WhatsApp",
      value: "+2349155004456",
      icon: "message-circle",
      href: "https://wa.me/2349155004456",
      description: "Chat on WhatsApp",
    },
  },

  // Professional Information
  experience: "4+ years",
  specialization: "Node.js ecosystem",
  currentRole: "Lead Backend Engineer at ATC Africa",
  education: "University of Ibadan",

  // Key Projects
  notableProjects: [
    "UniNav - University-wide platform for study materials",
    "MedMap - Medical mapping solution",
    "GoalFund - Financial goal tracking",
    "Party Currency - Event management system",
  ],

  // Skills & Technologies
  coreSkills: [
    "Backend Development",
    "API Design",
    "Database Management",
    "System Architecture",
    "Team Leadership",
  ],

  // Availability
  availability: "Open to new opportunities",
  workPreference: "Remote or Hybrid",

  // Personal Interests
  interests: [
    "Hackathons",
    "Building personal projects",
    "LeetCode challenges",
    "Continuous learning",
    "Music",
  ],
} as const;

// Type definitions for better TypeScript support
export type OwnerDetails = typeof OWNER_DETAILS;
export type SocialLink =
  (typeof OWNER_DETAILS.social)[keyof typeof OWNER_DETAILS.social];
export type ContactMethod =
  (typeof OWNER_DETAILS.contactMethods)[keyof typeof OWNER_DETAILS.contactMethods];
