import Link from "next/link";

import { Container } from "@/components/site/container";
import { siteConfig } from "@/lib/site";

const footerLinks = [
  { href: "/about", label: "About" },
  { href: "/work", label: "Work" },
  { href: "/writing", label: "Writing" },
  { href: "/photography", label: "Photography" },
  { href: "/now", label: "Now" },
  { href: "/contact", label: "Contact" },
];

const socialLinks = [
  { href: siteConfig.social.linkedin, label: "LinkedIn" },
  { href: siteConfig.social.instagram, label: "Instagram" },
  { href: siteConfig.social.medium, label: "Medium" },
  { href: siteConfig.social.github, label: "GitHub" },
];

export function Footer() {
  return (
    <footer className="border-t border-border/70">
      <Container className="max-w-5xl py-12">
        <div className="flex flex-col gap-10 sm:flex-row sm:justify-between">
          <div className="max-w-sm">
            <p className="font-serif text-lg">Joseph Emmi</p>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
              I build products, explore ideas and document the things I find
              interesting.
            </p>
          </div>

          <div className="flex gap-16">
            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Site
              </span>
              {footerLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="flex flex-col gap-2">
              <span className="font-mono text-xs uppercase tracking-wider text-muted-foreground">
                Elsewhere
              </span>
              {socialLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col-reverse items-start gap-4 border-t border-border/70 pt-6 text-xs text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© {new Date().getFullYear()} Joseph Emmi. All rights reserved.</p>
          <p className="font-mono">Built with Next.js, in Glasgow.</p>
        </div>
      </Container>
    </footer>
  );
}
