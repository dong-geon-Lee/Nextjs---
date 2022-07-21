import Pagination from "./Pagination";

export default function SearchImageResults({ datas }) {
  const { items } = datas;

  return (
    <>
      <div className="mt-5 sm:grid sm:grid-cols-2 lg:grid-cols-3 space-x-3 space-y-3">
        {items?.map((item) => (
          <div
            className="flex flex-col items-center cursor-pointer group"
            key={item.link}
          >
            <img src={item.link} className="w-52 object-contain" />

            <div className="flex flex-col">
              <a
                href={item.image.contextLink}
                className="group-hover:underline"
              >
                {item.title}
              </a>
              <a href={item.image.contextLink}>{item.displayLink}</a>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center my-3">
        <Pagination />
      </div>
    </>
  );
}
