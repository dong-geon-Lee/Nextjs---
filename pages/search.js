import React from "react";
import Head from "next/head";
import SearchHeader from "../components/SearchHeader";
import { useRouter } from "next/router";
import ImageResults from "../components/ImageResults";
import SearchResults from "../components/SearchResults";

export default function Search({ results }) {
  const router = useRouter();

  
  return (
    <div>
      <Head>
        <title>{router.query.term} - Search page</title>
      </Head>

      <SearchHeader />

      {router.query.searchType === "image" ? (
        <ImageResults results={results} />
      ) : (
        <SearchResults results={results} />
      )}
    </div>
  );
}

export async function getServerSideProps(context) {
  const startIndex = context.query.start || "1";

  console.log(context, "context === response?");
  const data = await fetch(
    `https://www.googleapis.com/customsearch/v1?key=${process.env.API_KEY}&cx=${
      process.env.CONTEXT_KEY
    }&q=${context.query.term}${
      context.query.searchType && "&searchType=image"
    }&start=${startIndex}`
  ).then((res) => res.json());

  return {
    props: { results: data },
  };
}
