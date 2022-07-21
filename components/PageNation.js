import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import Link from "next/link";
import { useRouter } from "next/router";

export default function PageNation() {
  const router = useRouter();
  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="my-3 flex space-x-14 justify-center sm:justify-center md:space-x-24 lg:justify-between lg:space-x-0 lg:mx-[10%]">
      {startIndex > 10 && (
        <>
          <Link
            href={`/search?term=${router.query.term}&searchType=${
              router.query.searchType
            }&start=${startIndex - 10}`}
          >
            <div className="flex flex-col justify-center cursor-pointer group">
              <ChevronLeftIcon className="h-6 text-blue-500" />
              <a className="text-blue-500 group-hover:underline">Previous</a>
            </div>
          </Link>
        </>
      )}

      {startIndex < 90 && (
        <>
          <Link
            href={`/search?term=${router.query.term}&searchType=${
              router.query.searchType
            }&start=${startIndex + 10}`}
          >
            <div className="flex flex-col justify-center cursor-pointer group">
              <ChevronRightIcon className="h-6 text-blue-500" />
              <a className="text-blue-500 group-hover:underline">Next</a>
            </div>
          </Link>
        </>
      )}
    </div>
  );
}
