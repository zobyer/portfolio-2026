import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa";
import type { IconType } from "react-icons";

export type NavLink = {
  name: string;
  href: string;
  external?: boolean;
};

export const navLinks: NavLink[] = [
  { name: "About", href: "#about" },
  { name: "Experience", href: "#experience" },
  { name: "Education", href: "#education" },
  { name: "Research", href: "#research" },
  { name: "Contact", href: "#contact" },
  { name: "Resume", href: "/zobyer_fullstack_dev.pdf", external: true },
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
    url: "https://facebook.com/your-profile",
    icon: FaFacebook,
    ariaLabel: "Facebook",
  },
];