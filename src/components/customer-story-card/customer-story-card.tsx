import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

type CustomerStoryCardProps = {
  text: string;
  name: string;
  subtitle: string;
  avatarPath: string;
};

export const CustomerStoryCard = ({
  text,
  name,
  subtitle,
  avatarPath,
}: CustomerStoryCardProps) => {
  return (
    <div className="flex flex-col gap-6 md:gap-8 bg-gray-600 border border-gray-400 p-6 md:p-10 rounded-md">
      <p className="italic text-gray-200 text-justify text-body-md">{text}</p>

      <div className="flex items-center gap-4">
        <Avatar>
          <AvatarImage
            src={avatarPath}
            alt="avatar"
            className="border border-blue-200"
          />
          <AvatarFallback>{name}</AvatarFallback>
        </Avatar>
        <div>
          <h4 className="text-gray-200 text-heading-xs">{name}</h4>
          <p className="text-gray-300 text-body-sm">{subtitle}</p>
        </div>
      </div>
    </div>
  );
};
