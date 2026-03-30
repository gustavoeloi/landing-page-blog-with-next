import { PostCard } from "../post-card";

export const GridPosts = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 my-16">
      <PostCard
        title="5 motivos para escolher o Site.Set"
        description="a criação de um e-commerce não precisa ser difícil. Desde o cadastro de produtos até o design da sua página, nossa plataforma oferece tudo o que você precisa para começar a vender de forma simples e prática."
        date="20/08/26"
        image="/assets/first-post.png"
        slug="1"
        author={{ name: "Gustavo Eloi", avatar: "/avatar-1.png" }}
      />
    </div>
  );
};
