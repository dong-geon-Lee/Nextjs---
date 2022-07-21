import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function MainBody() {
  const searchInputRef = useRef(null);
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) {
      return;
    }

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomSearch = async (e) => {
    e.preventDefault();

    const randomTerm = await fetch(
      "https://random-word-api.herokuapp.com/word?number=1"
    ).then((res) => res.json());

    if (!randomTerm) return;

    router.push(`/search?term=${randomTerm}&searchType=`);
  };

  return (
    <form className="flex flex-col items-center mt-40">
      <Image
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
        width="300"
        height="100"
        objectFit="cover"
      />

      <div className="flex justify-between border border-gray-200 rounded-full px-5 py-3 w-full mt-5  mx-auto items-center max-w-[90%] sm:max-w-xl lg:max-w-2xl hover:shadow-lg focus-within:shadow-lg">
        <SearchIcon
          className="h-5 text-gray-500 mr-3 cursor-pointer"
          onClick={search}
        />
        <input
          ref={searchInputRef}
          type="text"
          className="flex-grow outline-none"
        />
        <MicrophoneIcon className="h-5" />
      </div>

      <div className="mt-8 flex flex-col space-y-3 max-w-[50%] w-full sm:flex-row sm:space-x-5 sm:space-y-0 sm:justify-center">
        <button className="btn" onClick={search}>
          Google Search
        </button>

        <button className="btn" onClick={randomSearch}>
          I&apos;m Feeling Lucky
        </button>
      </div>
    </form>
  );
}
