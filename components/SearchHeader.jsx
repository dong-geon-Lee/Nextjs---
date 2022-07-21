import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import { useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

export default function SearchHeader() {
  const searchInputRef = useRef();
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term}&searchType=${router.query.searchType}`);
  };

  return (
    <div className="px-3 py-5 pb-0">
      <div className="flex items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-logo"
          width="100"
          height="40"
          objectFit="contain"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form
          onSubmit={search}
          className="flex border border-gray-200 rounded-full flex-grow ml-5 mr-6 overflow-hidden
        items-center p-4 shadow-lg sm:max-w-lg md:max-w-xl md:ml-[5%] lg:max-w-2xl space-x-2"
        >
          <input
            type="text"
            className="w-full focus:outline-none ml-2"
            defaultValue={router.query.term}
            ref={searchInputRef}
          />

          <XIcon
            className="h-6 mr-3 cursor-pointer text-gray-600"
            onClick={() => (searchInputRef.current.value = "")}
          />
          <MicrophoneIcon className="h-6 hidden sm:inline-flex border-l-2 pl-3 border-gray-200 text-blue-600" />
          <SearchIcon className="h-6 hidden sm:inline-flex text-blue-600" />
          <button type="submit" hidden></button>
        </form>

        <User className="text-sm ml-auto" />
      </div>

      <SearchHeaderOptions />
    </div>
  );
}
