import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import SearchHeaderOption from "./SearchHeaderOption";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex space-x-8 justify-start border-b pl-[25%] sm:pl-[19%] lg:pl-[15%]">
      <SearchHeaderOption
        Icon={SearchIcon}
        title="All"
        selected={!router.query.searchType}
      />

      <SearchHeaderOption
        Icon={PhotographIcon}
        title="Images"
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
