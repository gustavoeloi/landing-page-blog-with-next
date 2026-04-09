import { PostsList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export default function Blog() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
  );

  return <PostsList posts={sortedPosts} />;
}
