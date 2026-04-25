// src/constants/sidebar.ts
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import type { IconType } from "react-icons";

export const navLinks = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Contact", href: "#contact" },
];

export type SocialLink = {
  name: string;
  url: string;
  icon: IconType;
  ariaLabel: string;
};

export const socialLinks: SocialLink[] = [
  {
    name: "GitHub",
    url: "https://github.com/zobyer",
    icon: FaGithub,
    ariaLabel: "GitHub",
  },
  {
    name: "LinkedIn",
    url: "https://linkedin.com/in/a-h-m-zobyer",
    icon: FaLinkedin,
    ariaLabel: "LinkedIn",
  },
  {
    name: "Facebook",
    url: "https://facebook.com/your-profile", // Replace with your real URL
    icon: FaFacebook,
    ariaLabel: "Facebook",
  },
];