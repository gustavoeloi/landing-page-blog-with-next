import { CardSupport } from "@/components/card-support";
import { HeartHandshake, Paintbrush, Store } from "lucide-react";

export const SupportSection = () => {
  return (
    <section className="relative pb-8 md:py-10 min-h-150 flex">
      <div
        className="absolute inset-0 hidden md:block bg-[url(/bg-support.svg)] bg-cover bg-no-repeat opacity-90 "
        aria-hidden={true}
      />
      <div className="container flex flex-col justify-center items-center relative z-10">
        <h1 className="text-heading-md md:text-heading-xl mb-8 text-center max-w-3xl">
          Sua loja de afiliados, simples, do jeito que deveria ser
        </h1>

        <div className="flex flex-col md:flex-row gap-6">
          <CardSupport
            title="Personalize seu site"
            description="Adicione sua logo, favicon, cores no seu catalago e tenha tudo com a sua cara."
            variant="darkBlue"
          >
            <Paintbrush />
          </CardSupport>
          <CardSupport
            title="Venda de qualquer loja"
            description="Não importa a loja, o Site.Set permite que você insera qualquer link de afiliado."
            variant="darkGreen"
          >
            <Store />
          </CardSupport>
          <CardSupport
            title="Receba suporte amigável"
            description="Nossa equipe estará sempre pronta para te atender para ajudar no que for preciso."
            variant="darkBlue"
          >
            <HeartHandshake />
          </CardSupport>
        </div>
      </div>
    </section>
  );
};
