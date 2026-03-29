import { CardFeature } from "@/components/card-feature";
import { Button } from "../ui/button";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { BtnLoja } from "@/components/btn-loja";
import Image from "next/image";

export const FeatureSection = () => {
  return (
    <section className="container grid gap-6 md:grid-cols-2 pb-8 pt-8 md:py-10">
      <CardFeature
        title="Crie um Próprio catálogo de produtos online em poucos minutos"
        tag="simples"
      />
      <CardFeature
        title="Venda para seu público através de uma plataforma única"
        tag="prático"
      />

      <div className="col-span-full flex flex-col gap-2 ">
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 rounded-lg bg-gray-500 pb-6">
          <CardFeature
            title="Venda para seu público através de uma plataforma única"
            tag="personalizável"
          >
            <BtnLoja style="hidden md:flex" />
          </CardFeature>

          <div className="flex flex-col items-center justify-center w-full  ">
            <div className="w-full max-w-md overflow-hidden">
              <Image
                src="/feature-section.svg"
                alt="features"
                width={440}
                height={330}
                className="object-cover w-full"
              />
            </div>

            <BtnLoja style="w-full md:hidden" />
          </div>
        </div>
      </div>
    </section>
  );
};
