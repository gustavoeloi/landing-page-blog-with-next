import Image from "next/image";

export const Logo = () => {
  return (
    <Image
      alt="logo da empresa"
      src="/logo-site.svg"
      width={100}
      height={24}
      className="self-start"
    />
  );
};
