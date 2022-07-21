import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function Pagination() {
  const router = useRouter();
  console.log(router.query);

  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="flex justify-center space-x-10 items-center">
      {startIndex < 99 && startIndex > 10 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex - 10}`}
        >
          <div className="flex flex-col justify-center items-center text-blue-500 cursor-pointer group">
            <ChevronLeftIcon className="h-5" />
            <p className="group-hover:underline decoration-blue-500">
              Previous
            </p>
          </div>
        </Link>
      )}

      {startIndex < 90 && startIndex >= 1 && (
        <Link
          href={`/search?term=${router.query.term}&searchType=${
            router.query.searchType
          }&start=${startIndex + 10}`}
        >
          <div className="flex flex-col justify-center items-center text-blue-500 cursor-pointer group">
            <ChevronRightIcon className="h-5" />
            <p className="group-hover:underline decoration-blue-500">Next</p>
          </div>
        </Link>
      )}
    </div>
  );
}
