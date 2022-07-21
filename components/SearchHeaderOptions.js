import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import React from "react";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 justify-center border-b border-gray-200 text-sm w-full text-gray-500 sm:justify-start sm:pl-[28%] lg:pl-[21%]">
      <SearchHeaderOption
        title="All"
        Icon={SearchIcon}
        selected={router.query.term === "" || !router.query.searchType}
      />

      <SearchHeaderOption
        title="Images"
        Icon={PhotographIcon}
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
