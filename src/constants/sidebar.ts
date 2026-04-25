import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import { FiDownload } from "react-icons/fi";  // 👈 download icon
import type { IconType } from "react-icons";

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
  icon?: IconType;      // optional icon
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/zobyer_fullstack_dev.pdf", external: true, icon: FiDownload }, // 👈 with icon
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
    url: "https://www.facebook.com/zobyer.ajmir/",
    icon: FaFacebook,
    ariaLabel: "Facebook",
  },
];