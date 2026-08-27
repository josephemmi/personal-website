export const siteConfig = {
  name: "Joseph Emmi",
  title: "Joseph Emmi — Product Builder, Designer, Founder",
  description:
    "I build products, explore ideas and document the things I find interesting.",
  url: "https://josephemmi.com",
  email: "hello@josephemmi.com",
  locale: "en_GB",
  nav: [
    { href: "/about", label: "About" },
    { href: "/work", label: "Work" },
    { href: "/projects", label: "Projects" },
    { href: "/writing", label: "Writing" },
    { href: "/photography", label: "Photography" },
    { href: "/now", label: "Now" },
    { href: "/contact", label: "Contact" },
  ],
  social: {
    linkedin: "https://www.linkedin.com/in/josephemmi",
    instagram: "https://www.instagram.com/josephemmi",
    medium: "https://medium.com/@josephemmi",
    github: "https://github.com/josephemmi",
  },
} as const;

export type NavItem = (typeof siteConfig.nav)[number];
