import { ChevronLeftIcon, ChevronRightIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";

export default function Pagination() {
  const router = useRouter();

  const startIndex = Number(router.query.start) || 1;

  return (
    <div className="flex justify-center space-x-16 items-center lg:justify-between">
      {startIndex > 10 && (
        <div
          className="flex flex-col items-center cursor-pointer group text-blue-600 justify-center"
          onClick={() =>
            router.push(
              `/search?term=${router.query.term}&searchType=${
                router.query.searchType
              }&start=${startIndex - 10}`
            )
          }
        >
          <ChevronLeftIcon className="h-6" />
          <p className="group-hover:underline">Previous</p>
        </div>
      )}

      {startIndex < 90 && (
        <div className="flex flex-col items-center cursor-pointer group text-blue-600">
          <ChevronRightIcon className="h-6" />
          <p
            className="group-hover:underline"
            onClick={() =>
              router.push(
                `/search?term=${router.query.term}&searchType=${
                  router.query.searchType
                }&start=${startIndex + 10}`
              )
            }
          >
            Next
          </p>
        </div>
      )}
    </div>
  );
}
