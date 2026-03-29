import { cn } from "@/lib/utils";

type VariantCard = "darkBlue" | "darkGreen";

type CardSupportProps = {
  title: string;
  description: string;
  variant: VariantCard;
};

export const CardSupport = ({
  title,
  description,
  children,
  variant,
}: React.PropsWithChildren<CardSupportProps>) => {
  const variantStyles = {
    darkBlue: "bg-blue-400 border-blue-300/20 text-white",
    darkGreen: "bg-cyan-300 border-cyan-200/20 text-white",
  };

  return (
    <div
      className={cn(
        " p-6 rounded-sm flex flex-col gap-4",
        variantStyles[variant],
      )}
    >
      <span
        className={`p-2 rounded-lg w-fit ${variant === "darkBlue" ? "bg-blue-200" : "bg-cyan-200"}`}
      >
        {children}
      </span>
      <div className="flex flex-col">
        <h3 className="text-heading-sm">{title}</h3>
        <p className="text-body-sm text-gray-200">{description}</p>
      </div>
    </div>
  );
};
