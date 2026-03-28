import { CustomerStoryCard } from "../customer-story-card";

export const CustomerStorySection = () => {
  return (
    <section className="container py-32">
      <div className="flex flex-col items-center gap-12">
        <h1 className="text-gray-100 text-heading-md md:text-heading-xl text-center">
          Quem utiliza, aprova!
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 md:gap-6">
          <CustomerStoryCard
            text="Criar minha loja com o site.set foi a melhor decisão para o meu negócio. A plataforma é super intuitiva, e consegui colocar meus produtos à venda em poucos minutos. A"
            name="Annette Bon es"
            subtitle="CEO na Anne Corp"
            avatarPath="/avatar-1.png"
          />
          <CustomerStoryCard
            text="Transformar minha ideia em uma loja online foi fácil e rápido. Adorei as opções de personalização e a   para gerenciar os pedidos. Já vejo meus produtos alcançando mais pessoas!"
            name="Jacob Jones"
            subtitle="CEO na JJ Org"
            avatarPath="/avatar-2.jpg"
          />
        </div>
      </div>
    </section>
  );
};
