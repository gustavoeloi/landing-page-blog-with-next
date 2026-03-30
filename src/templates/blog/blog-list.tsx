import { Search } from "@/components/search";
import { useRouter } from "next/router";
import { GridPosts } from "@/templates/blog/components/grid-posts";

export const PostsList = () => {
  const router = useRouter();
  const query = router.query.q;
  const pageTitle = query
    ? `Resultado(s) de busca para: "${query}"`
    : "Dicas e estratégias para impulsionar seu negócio";

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

        <GridPosts />
      </div>
    </section>
  );
};
