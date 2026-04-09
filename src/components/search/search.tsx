"use client";
import { useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { CircleX, SearchIcon } from "lucide-react";
import { useCallback } from "react";

export const Search = () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const query = searchParams?.get("q") ?? "";

  const handleSearch = useCallback(
    (event: React.FormEvent) => {
      event.preventDefault();

      if (query.trim()) {
        router.push(`/blog?q=${encodeURIComponent(query)}`);
      }
    },
    [query, router],
  );

  const handleQueryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newQuery = event.target.value;
    if (newQuery) {
      router.replace(`/blog?q=${encodeURIComponent(newQuery)}`, {
        scroll: false,
      });
    } else {
      router.replace("/blog", { scroll: false });
    }
  };

  const onClearInput = () => {
    router.replace("/blog", { scroll: false });
  };

  return (
    <form onSubmit={handleSearch} className="relative group w-full md:w-fit">
      <SearchIcon
        className={cn(
          "text-gray-300 absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 transition-colors duration-200 group-focus-within:text-blue-200",
          query ? "text-blue-200!" : "",
        )}
      />
      <input
        type="text"
        placeholder="Procurar"
        onChange={handleQueryChange}
        value={query || ""}
        className="border border-gray-400 py-1 px-2 pl-9 outline-none transition-all duration-200  placeholder:text-gray-300 rounded-md focus-within:border-blue-200 focus-within:ring-1 focus-within:ring-blue-200 text-body-sm w-full md:w-60 h-12"
      />

      {query && (
        <CircleX
          onClick={onClearInput}
          className="text-gray-300 absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 cursor-pointer"
        />
      )}
    </form>
  );
};
