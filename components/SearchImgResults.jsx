import Link from "next/link";
import Pagination from "./Pagination";

export default function SearchImgResults({ datas }) {
  const { items } = datas;

  console.log(datas);

  return (
    <>
      <div className="p-3 sm:grid sm:grid-cols-2 lg:grid-cols-3 space-x-4">
        {items.map((item) => (
          <div className="mb-8 group cursor-pointer" key={item.link}>
            <Link href={item.image.contextLink}>
              <img
                src={item.link}
                alt={item.link}
                className="w-full object-contain"
              />
            </Link>

            <a
              href={item.image.contextLink}
              className="text-xl group-hover:underline"
            >
              {item.title}
            </a>

            <a href={item.image.contextLink}>{item.displayLink}</a>
          </div>
        ))}
      </div>

      <Pagination />
    </>
  );
}
