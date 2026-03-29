import { Clock, Store } from "lucide-react";

import Image from "next/image";

import { BtnLoja } from "@/components/btn-loja";

import { PT_Sans_Caption } from "next/font/google";

const ptSansCaptions = PT_Sans_Caption({
  subsets: ["latin"],
  weight: "700",
});

export const HeroSection = () => {
  return (
    <section className="container relative flex items-center justify-center mt-32 md:mt-16">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8  min-h-80 md:h-144 items-center">
        <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
          <h1
            className={`${ptSansCaptions.className}text-gray-100 text-heading-lg md:text-heading-hg font-sans text-center md:text-start`}
          >
            Venda seus produtos como afiliado em um único lugar
          </h1>

          <div className="flex flex-col items-center justify-center gap-4 md:items-start lg:items-start">
            <div>
              <div className="flex items-center gap-2">
                <Clock className="text-cyan-100 h-4 w-4" />
                <span className=" text-body-sm md:text-body-md text-gray-200">
                  Crie o seu site em menos de 5 minutos
                </span>
              </div>

              <div className="flex items-center gap-2">
                <Store className="text-cyan-100 h-4 w-4" />
                <span className="text-body-sm md:text-body-md text-gray-200">
                  Acompanhe e otimize seu negócio online
                </span>
              </div>
            </div>

            <div className="text-white flex flex-col gap-2 mt-5 items-center md:items-start ls:items-start">
              <BtnLoja />

              <p className="text-gray-300 text-body-xs">
                Não precisa de cartão de crédito
              </p>
            </div>
          </div>
        </div>

        <div className="relative h-[20rem] hidden md:h-full order-first md:order-last items-center justify-center md:flex lg:flex">
          <Image
            src="/hero-section.svg"
            alt="Ilustração com ícones de store, tag e sacola"
            width={200}
            height={400}
            className="h-full w-auto object-contain"
          />
        </div>
      </div>
    </section>
  );
};
