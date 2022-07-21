import { useRouter } from "next/router";
import SearchHeader from "../components/SearchHeader";
import SearchImageResults from "../components/SearchImageResults";
import SearchResults from "../components/SearchResults";

export default function search({ results }) {
  const router = useRouter();

  return (
    <div>
      <SearchHeader />

      {router.query.searchType === "image" ? (
        <SearchImageResults datas={results}></SearchImageResults>
      ) : (
        <SearchResults datas={results}></SearchResults>
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  console.log(context.query, "유무");

  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  ).then((res) => res.json());

  console.log(startIndex, "인덱스");
  return {
    props: { results: data },
  };
}
