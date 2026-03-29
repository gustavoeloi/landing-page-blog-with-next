type CardFeatureProps = {
  title: string;
  tag: string;
};

export const CardFeature = ({
  title,
  tag,
  children,
}: React.PropsWithChildren<CardFeatureProps>) => {
  return (
    <div className="flex flex-col gap-2 p-6 md:p-12 bg-gray-500 rounded-md md:gap-8">
      <span className="text-body-tag uppercase text-blue-200 bg-blue-400 py-1 px-3 rounded-sm w-fit ">
        {tag}
      </span>
      <h2 className="text-gray-100 text-heading-sm md:text-heading-lg">
        {title}
      </h2>
      {children}
    </div>
  );
};
