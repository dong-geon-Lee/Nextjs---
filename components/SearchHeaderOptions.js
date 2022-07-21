import SearchHeaderOption from "./SearchHeaderOption";
import { PhotographIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function SearchHeaderOptions() {
  const router = useRouter();

  return (
    <div className="flex justify-center my-5 mx-0 mb-0 space-x-3 sm:justify-start sm:pl-[20%] lg:pl-[15%] border-b">
      <SearchHeaderOption
        Icon={SearchIcon}
        title="All"
        selected={router.query.term === "" || !router.query.searchType}
      />

      <SearchHeaderOption
        Icon={PhotographIcon}
        title="Images"
        selected={router.query.searchType === "image"}
      />
    </div>
  );
}
