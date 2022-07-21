import SearchHeaderOption from "./SearchHeaderOption";
import { SearchIcon, PhotographIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 w-full justify-center mx-auto select-none text-sm text-gray-700 lg:pl-52 lg:justify-start border-b">
      <SearchHeaderOption
        Icon={SearchIcon}
        title="All"
        selected={router.query.searchType === "" || !router.query.searchType}
      />
      <SearchHeaderOption
        Icon={PhotographIcon}
        title="Images"
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
