import { Store } from "lucide-react";
import { BtnLoja } from "../btn-loja";
import { PT_Sans_Caption } from "next/font/google";

const ptSansCaption = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export const CallToAction = () => {
  return (
    <section className="relative py-24 bg-linear-to-b from-cyan-950/20 to-gray-700 ">
      <div className="absolute inset-0 bg-[url(/bg-cta.svg)] bg-cover bg-center bg-no-repeat opacity-90" />
      <div className="absolute top-0 left-1/2 -translate-y-1/2 -translate-x-1/2 p-4 bg-cyan-300 w-fit rounded-full">
        <Store className="text-cyan-100 " />
      </div>

      <div className="container relative">
        <div className="flex flex-col items-center gap-6 text-center">
          <h2
            className={`${ptSansCaption.className} text-gray-100 text-balance text-heading-xl mb-6 max-w-120`}
          >
            Crie uma loja online e inicie suas vendas ainda hoje
          </h2>
          <BtnLoja />
        </div>
      </div>
    </section>
  );
};
