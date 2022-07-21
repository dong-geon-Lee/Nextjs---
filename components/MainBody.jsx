import Image from "next/image";
import { MicrophoneIcon, SearchIcon } from "@heroicons/react/solid";
import { useRef } from "react";
import { useRouter } from "next/router";

export default function MainBody() {
  const searchInputRef = useRef();
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomWordSearch = async (e) => {
    e.preventDefault();

    const term = await fetch(
      `https://random-word-api.herokuapp.com/word?number=1`
    ).then((response) => response.json());

    router.push(`/search?term=${term}&searchType=`);
  };

  return (
    <div className="mt-40">
      <form onSubmit={search} className="flex flex-col items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="image-google"
          width="300"
          height="100"
        />

        <div
          className="border border-gray-200 w-full max-w-[90%] flex items-center p-4 rounded-full my-3
        hover:shadow-lg focus-within:shadow-lg sm:max-w-lg md:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 mr-2" />
          <input
            type="text"
            className="flex-grow focus:outline-none"
            ref={searchInputRef}
          />
          <MicrophoneIcon className="h-5" />
          <button type="submit" hidden></button>
        </div>

        <div
          className="flex flex-col space-y-2 w-[50%] sm:flex-row sm:space-y-0 sm:justify-center
        sm:space-x-4 sm:mt-3"
        >
          <button className="btn" onClick={search}>
            Google Search
          </button>
          <button className="btn" onClick={randomWordSearch}>
            I'm Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
