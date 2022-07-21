import Image from "next/image";
import { SearchIcon, MicrophoneIcon } from "@heroicons/react/solid";
import { useRouter } from "next/router";
import { useRef } from "react";

export default function MainBody() {
  const router = useRouter();
  const searchInputRef = useRef();

  const searchPage = (e) => {
    e.preventDefault();

    const term = searchInputRef.current.value;

    if (!term.trim()) return;

    router.push(`/search?term=${term.trim()}&searchType=`);
  };

  const randomWordPage = async (e) => {
    e.preventDefault();

    const term = await fetch(
      `https://random-word-api.herokuapp.com/word?number=1`
    ).then((res) => res.json());

    if (!term.trim()) return;

    router.push(`/search?term=${term}&searchType=`);
  };

  return (
    <div className="mt-40">
      <form className="flex flex-col items-center">
        <Image
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
          alt="google-logo"
          width="300"
          height="100"
          objectFit="cover"
        />

        <div
          className="flex border border-gray-200 rounded-full w-full max-w-[90%] p-3 items-center my-5
          sm:max-w-l
        md:max-w-xl lg:max-w-2xl"
        >
          <SearchIcon className="h-5 text-gray-500 mr-3" />
          <input
            ref={searchInputRef}
            type="text"
            className="flex-grow focus:outline-none"
          />
          <MicrophoneIcon className="h-5" />
        </div>

        <div
          className="flex flex-col w-[50%] space-y-3 mt-3 justify-center text-sm text-gray-800
          sm:flex-row sm:space-y-0 sm:space-x-3"
        >
          <button className="btn" type="submit" onClick={searchPage}>
            Google Search
          </button>

          <button className="btn" type="submit" onClick={randomWordPage}>
            I&apos;m Feeling Lucky
          </button>
        </div>
      </form>
    </div>
  );
}
