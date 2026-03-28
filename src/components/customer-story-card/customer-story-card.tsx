import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CustomerStoryCardProps = {
  content: string;
  author: {
    name: string;
    role: string;
    avatar: string;
  };
};

export const CustomerStoryCard = ({
  content,
  author,
}: CustomerStoryCardProps) => {
  console.log(author);
  return (
    <div className="flex flex-col gap-6 md:gap-8 bg-gray-600 border border-gray-400 p-6 md:p-10 rounded-md">
      <p className="italic text-gray-200 text-justify text-body-md">
        {content}
      </p>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src={author.avatar}
            alt="avatar"
            className="border border-blue-200"
          />
          <AvatarFallback>{author.name}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-gray-200 text-heading-xs">{author.name}</h4>
          <p className="text-gray-300 text-body-sm">{author.role}</p>
        </div>
      </div>
    </div>
  );
};
