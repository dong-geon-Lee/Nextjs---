import { useRouter } from "next/router";

export default function SearchHeaderOption({ Icon, title, selected }) {
  const router = useRouter();

  const searchTap = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      className={`flex space-x-1 items-center mr-6  text-sm
    hover:text-blue-500 border-b-4 border-transparent pb-2 hover:border-blue-500 cursor-pointer ${
      selected ? "border-blue-500 text-blue-500" : "text-gray-500"
    }`}
      onClick={() => searchTap(title)}
    >
      <Icon className="h-5" />
      <p>{title}</p>
    </div>
  );
}
