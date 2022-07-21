import { MicrophoneIcon, SearchIcon, XIcon } from "@heroicons/react/solid";
import Image from "next/image";
import { useRouter } from "next/router";
import React, { useRef } from "react";
import SearchHeaderOptions from "./SearchHeaderOptions";
import User from "./User";

export default function SearchHeader() {
  const searchRefInput = useRef();
  const router = useRouter();

  const searchInput = (e) => {
    e.preventDefault();

    const term = searchRefInput.current.value;

    if (!term.trim()) {
      return;
    } else if (router.query.searchType === "image") {
      router.push(`/search?term=${term}&searchType=image`);
    } else {
      router.push(`/search?term=${term}&searchType=`);
    }
  };

  return (
    <div className="">
      <div className="flex justify-between items-center p-6">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-logo"
          width="120"
          height="40"
          objectFit="cover"
          className="cursor-pointer"
          onClick={() => router.push("/")}
        />

        <form
          className="flex border border-gray-200 flex-grow rounded-full ml-5 mr-6 px-2 py-3 shadow-lg
        sm:max-w-[60%] lg:max-w-[70%]"
        >
          <input
            type="text"
            className="w-full focus:outline-none ml-3 "
            ref={searchRefInput}
            defaultValue={router.query.term}
          />

          <div className="flex items-center space-x-3 px-3">
            <XIcon
              className="h-6 cursor-pointer"
              onClick={() => (searchRefInput.current.value = "")}
            />
            <MicrophoneIcon className="h-5 hidden sm:inline-flex text-blue-500 border-l-2 border-gray-200 pl-2" />
            <SearchIcon className="h-5 hidden sm:inline-flex text-blue-500 " />

            <button type="submit" onClick={searchInput} hidden></button>
          </div>
        </form>

        <User />
      </div>

      <SearchHeaderOptions />
    </div>
  );
}
