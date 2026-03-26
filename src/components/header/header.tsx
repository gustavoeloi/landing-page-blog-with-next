import Link from "next/link";
import Image from "next/image";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/router";
import { ActiveLink } from "../active-link";

export const Header = () => {
  const router = useRouter();

  return (
    <header className="fixed top-0 z-50 w-full border-b border-white/10 bg-backgroud/95 backdrop-blur supports-backdrop-filters:bg-background/60">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link href="/">
            <Image
              alt="logo website"
              src="/logo-site.svg"
              width={100}
              height={24}
            />
          </Link>

          <nav className="flex items-center gap-6">
            <ActiveLink href="/">Início</ActiveLink>
            <ActiveLink href="/blog">Blog</ActiveLink>
            <Button variant="secondary" asChild>
              <Link href="/comecar">Começar</Link>
            </Button>
          </nav>
        </div>
      </div>
    </header>
  );
};
