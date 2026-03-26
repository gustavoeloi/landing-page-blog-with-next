import Link from "next/link";

export default function User() {
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      <div className="flex gap-4">
        <Link
          href={{ pathname: "/user/[id]", query: { id: "1" } }}
          className="cursor-pointer hover:underline"
        >
          Usuário 1
        </Link>
        <Link
          href={{ pathname: "/user/[id]", query: { id: "2" } }}
          className="cursor-pointer hover:underline"
        >
          Usuário 2
        </Link>
        <Link
          href={{ pathname: "/user/[id]", query: { id: "3" } }}
          className="cursor-pointer hover:underline"
        >
          Usuário 3
        </Link>
      </div>
    </div>
  );
}
