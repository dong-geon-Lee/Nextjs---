import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import User from "./User";

export default function Header() {
  const router = useRouter();

  const searchImage = (e) => {
    e.preventDefault();

    router.push(
      `/search?term=${router.query.term || "google"}&searchType=image`
    );
  };

  return (
    <div className="p-5 flex justify-between text-sm text-gray-500">
      <div className="flex space-x-4 items-center">
        <Link href="https://about.google/">
          <a className="link">About</a>
        </Link>

        <Link href="https://store.google.com/">
          <a className="link">Store</a>
        </Link>
      </div>

      <div className="flex space-x-4 items-center">
        <Link href="https://mail.google.com">
          <a className="link">Gmail</a>
        </Link>

        <a className="link" onClick={searchImage}>
          Images
        </a>

        <User />
      </div>
    </div>
  );
}
