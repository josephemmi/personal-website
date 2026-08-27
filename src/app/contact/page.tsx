import type { Metadata } from "next";
import { Github, Instagram, Linkedin, Mail, Newspaper } from "lucide-react";

import { Container } from "@/components/site/container";
import { PageHeader } from "@/components/site/page-header";
import { SectionHeading } from "@/components/site/section-heading";
import { siteConfig } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Joseph Emmi — LinkedIn, email, CV, and links to current projects and social profiles.",
};

const professional = [
  {
    label: "Email",
    value: siteConfig.email,
    href: `mailto:${siteConfig.email}`,
    icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/josephemmi",
    href: siteConfig.social.linkedin,
    icon: Linkedin,
  },
  {
    label: "CV",
    value: "Download PDF",
    href: "/cv.pdf",
    icon: Newspaper,
  },
];

const projects = [
  { label: "Here Then Gone", href: "/projects/here-then-gone" },
  { label: "Reissued", href: "/projects/reissued" },
  { label: "Da Mangiare", href: "/projects/da-mangiare" },
];

const social = [
  { label: "Instagram", href: siteConfig.social.instagram, icon: Instagram },
  { label: "Medium", href: siteConfig.social.medium, icon: Newspaper },
  { label: "GitHub", href: siteConfig.social.github, icon: Github },
];

export default function ContactPage() {
  return (
    <section className="pt-16 pb-24 sm:pt-24 sm:pb-28">
      <Container className="max-w-2xl">
        <PageHeader
          eyebrow="Contact"
          title="Get in touch"
          description="Happy to hear from hiring managers, founders, collaborators, or anyone who followed a link here from a photograph or a recipe."
        />

        <div className="mt-16">
          <SectionHeading title="Professional" />
          <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
            {professional.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith("http") ? "_blank" : undefined}
                rel={item.href.startsWith("http") ? "noopener noreferrer" : undefined}
                className="group flex items-center justify-between gap-4 px-5 py-4 transition-colors hover:bg-muted"
              >
                <span className="flex items-center gap-3">
                  <item.icon className="size-4 text-muted-foreground" />
                  <span className="font-medium">{item.label}</span>
                </span>
                <span className="text-sm text-muted-foreground transition-colors group-hover:text-accent">
                  {item.value}
                </span>
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading title="Projects" />
          <div className="flex flex-col divide-y divide-border rounded-xl border border-border">
            {projects.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="flex items-center justify-between px-5 py-4 font-medium transition-colors hover:bg-muted hover:text-accent"
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>

        <div className="mt-14">
          <SectionHeading title="Social" />
          <div className="flex flex-wrap gap-3">
            {social.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded-full border border-border px-4 py-2 text-sm font-medium transition-colors hover:bg-muted hover:text-accent"
              >
                <item.icon className="size-4" />
                {item.label}
              </a>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
