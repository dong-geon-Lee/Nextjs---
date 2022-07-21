import { useRouter } from "next/router";
import React from "react";
import SearchHeader from "../components/SearchHeader";
import Parser from "html-react-parser";
import PageNation from "../components/PageNation";

export default function Search({ items }) {
  const router = useRouter();

  const { searchInformation, items: datas } = items;

  return (
    <div>
      <SearchHeader />

      {router.query.searchType === "image" ? (
        <div className="mt-7 p-3">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 space-x-3 space-y-5">
            {datas.map((data) => (
              <div className="group cursor-pointer">
                <img
                  src={data.link}
                  alt={data.link}
                  className="w-full h-60 object-contain group-hover:shadow-lg"
                />

                <div className="flex flex-col justify-center items-center">
                  <a href={data.link} className="w-[100%] mt-2">
                    <h2 className="group-hover:shadow-md text-lg truncate">
                      {data.title}
                    </h2>
                  </a>

                  <a href={data.link} className="text-left w-[100%]">
                    <p>{data.displayLink}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      ) : (
        <div className="p-4">
          <div className="flex flex-col sm:justify-center">
            <div className="sm:pl-[15%] sm:pr-[15%] lg:pl-[20%]">
              <p className="text-sm text-gray-500 mt-1 mb-4">
                About {searchInformation.formattedTotalResults} results ({" "}
                {searchInformation.formattedSearchTime} seconds )
              </p>

              {datas?.map((data) => (
                <div className="mb-8">
                  <div className="group">
                    <a
                      href={data.link}
                      className="text-sm text-gray-800 truncate"
                    >
                      <p>{data.formattedUrl}</p>
                    </a>

                    <a href={data.link}>
                      <h2 className="font-medium text-blue-800 text-xl truncate group-hover:decoration-blue-600 group-hover:underline">
                        {data.title}
                      </h2>
                    </a>
                  </div>

                  <p className="text-gray-700 max-w-[80%]">
                    {Parser(String(data.htmlSnippet))}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <PageNation />
        </div>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  ).then((res) => res.json());

  return {
    props: { items: data },
  };
}
