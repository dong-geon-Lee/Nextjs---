import { useRouter } from "next/router";
import Pagination from "../components/Pagination";
import SearchHeader from "../components/SearchHeader";
import SearchImgResults from "../components/SearchImgResults";
import SearchResults from "../components/SearchResults";

export default function search({ datas }) {
  const router = useRouter();

  return (
    <div>
      <SearchHeader />

      {router.query.searchType === "image" ? (
        <>
          <SearchImgResults datas={datas} />
        </>
      ) : (
        <>
          <SearchResults datas={datas} />
        </>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  const response = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  ).then((res) => res.json());

  return {
    props: { datas: response },
  };
}
