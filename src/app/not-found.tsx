import Link from "next/link";

import { Container } from "@/components/site/container";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <section className="flex min-h-[60vh] items-center py-24">
      <Container className="max-w-xl text-center">
        <p className="font-mono text-xs uppercase tracking-wider text-accent">404</p>
        <h1 className="mt-4 font-serif text-4xl tracking-tight">
          Nothing here, then gone
        </h1>
        <p className="mt-4 text-muted-foreground leading-relaxed">
          Whatever you were looking for doesn&apos;t exist at this address —
          or existed once and moved on.
        </p>
        <Button asChild className="mt-8">
          <Link href="/">Back home</Link>
        </Button>
      </Container>
    </section>
  );
}
