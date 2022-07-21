import Parser from "html-react-parser";
import Pagination from "./Pagination";

export default function SearchResults({ datas }) {
  const { items } = datas;

  console.log(datas);

  return (
    <>
      <div className="p-3 px-[5%] sm:pl-[15%] sm:pr-[15%] lg:pl-[16%] lg:pr-[20%]">
        <p className="text-sm text-gray-500 mb-5">
          About {datas.searchInformation?.formattedTotalResults} results ({" "}
          {datas.searchInformation?.formattedSearchTime} seconds )
        </p>

        <div className="">
          {items?.map((item) => (
            <div className="mb-8" key={item.link}>
              <div className="flex flex-col group">
                <a href={item.link} className="text-sm truncate">
                  {item.formattedUrl}
                </a>
                <a
                  href={item.link}
                  className="text-lg text-blue-800 truncate group-hover:underline
                 decoration-blue-800 group-hover:underline-offset-2"
                >
                  {item.title}
                </a>
                <p className="text-gray-600 truncate">
                  {Parser(String(item.htmlSnippet))}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Pagination />
    </>
  );
}
