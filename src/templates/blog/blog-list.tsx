import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { GridPosts } from "@/templates/blog/components/grid-posts";
import { allPosts, Post } from "contentlayer/generated";
import { PostCard } from "./components/post-card";
import { CloudAlert } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { CallToAction } from "../landing-page/sections";

export const PostsList = () => {
  const router = useRouter();
  const query = router.query.q as string;
  const pageTitle = query
    ? `Resultado(s) de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = query
    ? allPosts.filter((post) =>
        post.title
          .toLocaleLowerCase()
          .includes(query.toLocaleLowerCase().trim()),
      )
    : allPosts;
  const hasPosts = posts.length > 0;

  return (
    <section className="pt-24 grow">
      <div className="container pb-24">
        <header className="flex flex-col md:flex-row gap-6 justify-between items-start md:items-center">
          <div className="flex flex-col gap-3">
            <span className="text-body-tag text-cyan-100 bg-cyan-300 py-2 px-4 rounded-sm uppercase w-fit">
              Blog
            </span>

            <h1 className="text-heading-lg md:text-heading-xl max-w-110">
              {pageTitle}
            </h1>
          </div>

          <Search />
        </header>

        {hasPosts && (
          <GridPosts>
            {posts.map((post) => (
              <PostCard
                key={post._id}
                title={post.title}
                date={new Date(post.date).toLocaleDateString("pt-BR")}
                description={post.description}
                author={{
                  name: post.author.name,
                  avatar: post.author.avatar,
                }}
                image={post.image}
                slug={post.slug}
              />
            ))}
          </GridPosts>
        )}

        {!hasPosts && (
          <div className="my-16 flex flex-col items-center justify-center gap-4 ">
            <CloudAlert className="w-8 h-8 text-blue-300 " />
            <p className=" text-center text-heading-sm text-gray-300 italic">
              Nenhum post foi encontrado!
            </p>
          </div>
        )}
      </div>

      <CallToAction />
    </section>
  );
};
