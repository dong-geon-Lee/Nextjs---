import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function MainBody() {
  const router = useRouter();
  const searchInputRef = useRef();

  const searchTerm = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const searchRandomTerm = async (e) => {
    e.preventDefault();

    const randomWord = await fetch(
      `https://random-word-api.herokuapp.com/word?number=1`
    ).then((response) => response.json());

    router.push(`/search?term=${randomWord}&searchType=`);
  };

  return (
    <form className="mt-40">
      <div className="flex flex-col justify-center items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          width="300"
          height="100"
          objectFit="cover"
        />

        <div
          className="flex items-center border border-gray-200 rounded-full w-full max-w-[90%] mx-auto px-5 py-3 my-5
        sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg"
        >
          <SearchIcon className="h-5 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none py-2 text-lg"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="flex flex-col space-y-3 p-3 w-[50%] justify-center 
        text-sm text-gray-800 sm:flex-row sm:space-y-0 sm:space-x-5"
        >
          <button
            type="submit"
            className="py-3 px-5 bg-gray-50 hover:shadow-lg hover:ring-1 hover:ring-gray-200 rounded-md"
            onClick={searchTerm}
          >
            Google Search
          </button>

          <button
            type="button"
            className="py-3 px-5 bg-gray-50 hover:shadow-lg hover:ring-1 hover:ring-gray-200 rounded-md"
            onClick={searchRandomTerm}
          >
            I'm Feeling Lucky
          </button>
        </div>
      </div>
    </form>
  );
}
