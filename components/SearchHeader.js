import Image from "next/image";
import User from "./User";
import SearchHeaderOptions from "./SearchHeaderOptions";
import { XIcon, MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function SearchHeader() {
  const router = useRouter();
  const searchInputRef = useRef();

  const searchTerm = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) {
      return;
    } else if (router.query.searchType === "image") {
      router.push(`/search?term=${term}&searchType=image`);
    } else {
      router.push(`/search?term=${term}&searchType=`);
    }
  };

  return (
    <div className="pt-7">
      <div className="flex items-center px-5">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="120"
          height="40"
          objectFit="contain"
          onClick={() => router.push("/")}
          className="cursor-pointer"
        />

        <form className="border border-gray-200 mx-5 shadow-md rounded-full flex-grow flex items-center overflow-hidden md:max-w-lg lg:max-w-3xl">
          <input
            ref={searchInputRef}
            type="text"
            className="w-full p-4 focus:outline-none text-lg"
          />

          <XIcon
            className="h-7 mr-3 text-gray-500 cursor-pointer"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden border-l-2 pl-4 sm:inline-flex text-blue-500 mr-3" />
          <SearchIcon className="h-7 hidden sm:inline-flex text-blue-500 mr-4" />
          <button type="submit" onClick={searchTerm} hidden></button>
        </form>

        <User className="ml-auto" />
      </div>

      <SearchHeaderOptions />
    </div>
  );
}
