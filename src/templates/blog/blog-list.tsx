import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { GridPosts } from "@/templates/blog/components/grid-posts";
import { allPosts } from "contentlayer/generated";
import { PostCard } from "./components/post-card";

export const PostsList = () => {
  const router = useRouter();
  const query = router.query.q;
  const pageTitle = query
    ? `Resultado(s) de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

  const posts = allPosts;

  return (
    <section className="py-24 grow">
      <div className="container">
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
      </div>
    </section>
  );
};
