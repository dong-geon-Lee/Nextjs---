import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";

export default function Header() {
  const router = useRouter();

  const searchImage = () => {
    router.push(
      `/search?term=${router.query.term || "google"}&searchType=image`
    );
  };

  return (
    <div className="flex justify-between p-5">
      <div className="space-x-4 flex items-center text-sm text-gray-700">
        <Link href="https://about.google/">
          <a className="link">About</a>
        </Link>

        <Link href="https://store.google.com/">
          <a className="link">Store</a>
        </Link>
      </div>

      <div className="space-x-4 flex items-center text-sm text-gray-700">
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
