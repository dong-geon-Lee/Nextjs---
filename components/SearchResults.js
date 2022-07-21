import Parser from "html-react-parser";
import Pagination from "./Pagination";

export default function SearchResults({ datas }) {
  const { items, searchInformation } = datas;

  return (
    <div className="p-3 sm:pl-[20%] sm:pr-[15%] lg:pl-[15%]">
      <p className="text-gray-500 text-sm">
        About {searchInformation?.formattedTotalResults} results ({" "}
        {searchInformation?.formattedSearchTime} seconds )
      </p>

      <div className="mt-6 sm:max-w-xl lg:max-w-2xl">
        {items?.map((item) => (
          <div className="mb-8" key={item.link}>
            <div className="cursor-pointer group flex flex-col">
              <a href={item.link} className="truncat text-sm text-gray-700">
                {item.formattedUrl}
              </a>
              <a
                href={item.link}
                className="text-blue-700 font-medium text-xl truncat group-hover:underline"
              >
                {item.title}
              </a>
            </div>

            <p className="text-md text-gray-600">
              {Parser(String(item.htmlSnippet))}
            </p>
          </div>
        ))}
      </div>

      <Pagination />
    </div>
  );
}
