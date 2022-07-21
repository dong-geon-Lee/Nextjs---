import { useRouter } from "next/router";

export default function SearchHeaderOption({ Icon, title, selected }) {
  const router = useRouter();

  console.log(router.query.term, "현황");
  console.log(title);

  const selectTab = (title) => {
    router.push(
      `/search?term=${router.query.term}&searchType=${
        title === "Images" ? "image" : ""
      }`
    );
  };

  return (
    <div
      className={`flex items-center space-x-1 border-b-4 border-transparent
     hover:border-blue-500 cursor-pointer pb-3 ${
       selected && "text-blue-500 border-blue-500"
     }`}
      onClick={() => selectTab(title)}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
