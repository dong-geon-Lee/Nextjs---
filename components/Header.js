import Link from "next/link";
import { useRouter } from "next/router";
import User from "./User";

export default function Header() {
  // image 부분 설정 잊지않기
  const router = useRouter();

  const search = (e) => {
    e.preventDefault();

    router.push(
      `/search?term=${router.query.term || "google"}&searchType=image`
    );
  };

  return (
    <div className="flex justify-between p-5 text-sm text-gray-800">
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

        <a className="link" onClick={search}>
          Images
        </a>

        <User />
      </div>
    </div>
  );
}
