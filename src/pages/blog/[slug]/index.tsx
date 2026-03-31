import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";

import {
  Breadcrumb,
  BreadcrumbList,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

export default function SlugPost() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  return (
    post && (
      <main className="py-24">
        <div className="container">
          <Breadcrumb>
            <BreadcrumbList>
              <BreadcrumbItem>
                <BreadcrumbLink href="/blog" className="text-gray-100">
                  Blog
                </BreadcrumbLink>
              </BreadcrumbItem>
              <BreadcrumbSeparator />
              <BreadcrumbItem>
                <BreadcrumbPage className="text-blue-200">Post</BreadcrumbPage>
              </BreadcrumbItem>
            </BreadcrumbList>
          </Breadcrumb>

          <div className="mt-8 md:flex md:gap-6">
            <div className="bg-gray-500 rounded-md border border-gray-400 overflow-hidden">
              <div className="aspect-video relative">
                <Image
                  src={post.image}
                  alt={post.title}
                  fill
                  className="object-cover"
                />
              </div>

              <div className="flex flex-col gap-8 py-6 px-8 md:py-12 md:px-16">
                <h1 className="text-heading-md md:text-heading-xl">
                  {post.title}
                </h1>
                <div>
                  <div className="flex items-center gap-4">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={post?.author.avatar} />
                      <AvatarFallback>{post?.author.name}</AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="text-body-sm text-gray-200">
                        {post.author.name}
                      </p>
                      <p className="text-body-xs text-gray-300">
                        Publicado em{" "}
                        {new Date(post.date).toLocaleDateString("pt-BR")}
                      </p>
                    </div>
                  </div>

                  <div
                    className="mt-8 prose prose-invert prose-cyan max-w-none"
                    dangerouslySetInnerHTML={{ __html: post.body.html }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="hidden md:flex">
              <p>Compartilhar</p>
            </div>
          </div>
        </div>
      </main>
    )
  );
}
