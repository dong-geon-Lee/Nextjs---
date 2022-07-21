import React from "react";
import Parser from "html-react-parser";
import PaginationButton from "./PaginationButton";

export default function SearchResults({ results }) {
  console.log(results);

  return (
    <div className="w-full mx-auto px-3 sm:pl-[5%] md:pl-[14%] lg:pl-52">
      <p className="text-gray-600 text-sm mt-3 mb-5">
        About {results.searchInformation?.formattedTotalResults} (
        {results.searchInformation?.formattedSearchTime} seconds)
      </p>

      {results.items.map((result) => (
        <div className="max-w-xl mb-8" key={result.link}>
          <div className="group">
            <a href={result.link} className="text-sm truncate">
              {result.formattedUrl}
            </a>

            <a
              href={result.link}
              className="text-xl decoration-blue-800 group-hover:underline"
            >
              <h2 className="truncate font-medium text-blue-800">
                {result.title}
              </h2>
            </a>
          </div>

          <p className="text-gray-600">{Parser(String(result.htmlSnippet))}</p>
        </div>
      ))}

      <PaginationButton />
    </div>
  );
}
