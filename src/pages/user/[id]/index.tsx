import { useRouter } from "next/router";
import Image from "next/image";
import Link from "next/link";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function UserDetail() {
  const router = useRouter();

  const id = Number(router.query.id);

  const image = [
    {
      url: "https://img.a.transfermarkt.technology/portrait/big/68290-1692601435.jpg?lm=1",
    },
    {
      url: "https://img.a.transfermarkt.technology/portrait/big/28003-1771694720.jpg?lm=1",
    },
    {
      url: "https://www.ogol.com.br/img/jogadores/new/15/79/1579_cristiano_ronaldo_20250611112712.png",
    },
  ];

  return (
    <div className="h-screen w-screen flex items-center justify-center gap-4 flex-col">
      <Card>
        <CardHeader>
          <CardTitle>Usuário: {id}</CardTitle>
          <CardDescription>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum,
            officiis.
          </CardDescription>
        </CardHeader>
        <CardContent>
          {id && (
            <Image
              alt="Image"
              src={image[id - 1].url}
              width={200}
              height={200}
            />
          )}
        </CardContent>
        <CardFooter>
          <button
            onClick={() => router.back()}
            className="cursor-pointer bg-blue-600 rounded-lg p-4 font-semibold hover:bg-blue-800 transition-colors"
          >
            Voltar
          </button>
        </CardFooter>
      </Card>
    </div>
  );
}
