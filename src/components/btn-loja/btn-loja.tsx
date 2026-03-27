import { cn } from "@/lib/utils";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

type BtnLoja = {
  style?: string;
};

export const BtnLoja = ({ style }: BtnLoja) => {
  return (
    <Button
      className={cn(
        "rounded-full w-fit bg-blue-200 h-auto p-3 hover:bg-blue-300! md:mt-auto",
        style,
      )}
      asChild
    >
      <Link href="/criar-loja">
        Criar loja grátis
        <ArrowRight />
      </Link>
    </Button>
  );
};
