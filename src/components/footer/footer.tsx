import Image from "next/image";
import Link from "next/link";
import { Logo } from "@/components/logo";

export const Footer = () => {
  return (
    <footer className="border-t border-white/10 ">
      <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="flex gap-8 md:flex-row justify-center  md:justify-between">
          <Logo />

          <nav className="flex flex-col md:flex-row text-sm gap-8 items-center text-blue-300">
            <Link
              href="/termos-de-uso"
              className="hover:text-blue-400  transition-colors"
            >
              Termos de Uso
            </Link>
            <Link
              href="/privacidade"
              className="hover:text-blue-400  transition-colors"
            >
              Política de Privacidade
            </Link>
            <Link
              href="/feedback"
              className="hover:text-blue-400  transition-colors"
            >
              Enviar Feedback
            </Link>
          </nav>
        </div>
      </div>
    </footer>
  );
};
