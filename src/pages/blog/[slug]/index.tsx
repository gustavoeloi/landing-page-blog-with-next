import { useRouter } from "next/router";
import { allPosts } from "contentlayer/generated";
import { toast } from "sonner";

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
import Link from "next/link";
import { CallToAction } from "@/templates/landing-page/sections";

type socialMediaType = {
  href?: string;
  name: string;
  imagePath: string;
  copyLink?: () => void;
};

export default function SlugPost() {
  const router = useRouter();
  const slug = router.query.slug as string;

  const post = allPosts.find((post) => post._raw.flattenedPath === slug);

  const handleCopyLink = () => {
    const currentURL = window.location.href;
    navigator.clipboard.writeText(currentURL);
    toast("✅ Link copiado com sucesso!", {
      description: "Use CTRL + V para colar",
    });
  };

  const socialMedias: socialMediaType[] = [
    {
      href: "https://www.linkedin.com",
      name: "Linkedin",
      imagePath: "/assets/linkedin.svg",
    },
    {
      href: "https://www.facebook.com",
      name: "Facebook",
      imagePath: "/assets/facebook.svg",
    },
    {
      href: "https://www.slack.com",
      name: "Slack",
      imagePath: "/assets/slack.svg",
    },
    {
      name: "Copiar Link",
      imagePath: "/assets/link.svg",
      copyLink: handleCopyLink,
    },
  ];

  return (
    post && (
      <main className="pt-24">
        <div className="container mb-24">
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

          <div className="mt-8 md:flex gap-4">
            <div className="bg-gray-500 rounded-md border border-gray-400 overflow-hidden max-w-179.5">
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
            <div className="hidden md:flex flex-col gap-8 w-full">
              <p className="text-heading-xs text-gray-200 ">Compartilhar</p>

              <ul className="flex flex-col gap-3 ">
                {socialMedias.map((s) => {
                  if (s.copyLink && !s.href) {
                    return (
                      <li key={s.name}>
                        <button
                          onClick={s.copyLink}
                          className="flex gap-3 items-center w-full px-5 py-3 border border-gray-400 rounded group hover:border-blue-200 transition-all cursor-pointer"
                        >
                          <Image
                            src={s.imagePath}
                            alt={s.name}
                            width={16}
                            height={16}
                          />
                          <span className="text-action-sm">{s.name}</span>
                        </button>
                      </li>
                    );
                  }

                  return (
                    <li
                      className="px-5 py-3 border border-gray-400 rounded group hover:border-blue-200 transition-all duration-200 "
                      onClick={s.copyLink}
                    >
                      <Link
                        href={s.href as string}
                        className="flex gap-3 items-center group-hover:text-blue-200"
                      >
                        <Image
                          alt={s.name}
                          src={s.imagePath}
                          width={16}
                          height={16}
                          className="group-hover:text-blue-200 transition-colors "
                        />
                        <span className="text-action-sm">{s.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>
        <CallToAction />
      </main>
    )
  );
}
