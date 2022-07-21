import { useRouter } from "next/router";

export default function SearchHeaderOption({ Icon, title, selected }) {
  const router = useRouter();

  const selectTab = (title) => {
    if (title === "Images") {
      router.push(`/search?term=${router.query.term}&searchType=image`);
    } else {
      router.push(`/search?term=${router.query.term}&searchType=`);
    }
  };

  return (
    <div
      className={`flex items-center mt-7 text-sm text-gray-600 space-x-1 border-b-4 
      border-transparent hover:border-blue-500 pb-2 cursor-pointer ${
        selected && "border-blue-500 text-blue-500"
      }`}
      onClick={() => selectTab(title)}
    >
      <Icon className="h-4" />
      <p>{title}</p>
    </div>
  );
}
