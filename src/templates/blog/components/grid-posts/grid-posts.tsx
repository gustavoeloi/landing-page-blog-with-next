type GridPostProps = {
  children: React.ReactNode;
};

export const GridPosts = ({ children }: GridPostProps) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-x-4 gap-y-12 my-16">
      {children}
    </div>
  );
};
