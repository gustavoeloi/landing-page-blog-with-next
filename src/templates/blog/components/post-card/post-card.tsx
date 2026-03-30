import Image from "next/image";
import Link from "next/link";

import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

type Author = {
  name: string;
  avatar: string;
};

type PostCardProps = {
  slug: string;
  title: string;
  description: string;
  date: string;
  image: string;
  author: Author;
};

export const PostCard = ({
  slug,
  title,
  description,
  image,
  date,
  author,
}: PostCardProps) => {
  return (
    <Link href={`/blog/${slug}`} className="group">
      <article className="flex flex-col gap-4 bg-gray-600 p-2 rounded-md border-2 border-gray-400 group-hover:border-blue-400 transition-all duration-200 h-full">
        <div className="relative">
          <div className="absolute top-0 right-0 bg-gray-600/80 backdrop-blur-sm rounded-bl-lg p-2 z-10">
            <span className="text-gray-300 text-body-xs font-bold">{date}</span>
          </div>
          <div className="aspect-video relative overflow-hidden rounded-md">
            <Image
              src={image}
              alt={"Primeiro Post"}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-105"
            />
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <h3 className="md:text-heading-xs ">{title}</h3>
          <p className="text-body-xs line-clamp-3 text-gray-300">
            {description}
          </p>
        </div>
        <footer className="border-t border-gray-400 flex items-center gap-2 pt-4 pb-2">
          <Avatar className="h-6 w-6">
            <AvatarImage src={author?.avatar} />
            <AvatarFallback>{author?.name}</AvatarFallback>
          </Avatar>
          <span className="text-body-xs text-gray-300">{author?.name}</span>
        </footer>
      </article>
    </Link>
  );
};
