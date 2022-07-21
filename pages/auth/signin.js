import React from "react";
import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function signin({ providers }) {
  const datas = Object.values(providers);

  console.log(datas);

  return (
    <>
      <Header />

      <div className="mt-40">
        {datas.map((data) => (
          <div className="flex flex-col items-center" key={data.id}>
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="google-logo"
              className="w-52 object-cover"
            />

            <p className="text-sm text-gray-800 italic my-10">
              This website is created for learning purposes
            </p>

            <button
              onClick={() => signIn(data.id, { callbackUrl: "/" })}
              className="px-3 py-3 bg-red-400 hover:bg-red-500 text-white rounded-lg"
            >
              Sign in with {data.name}
            </button>
          </div>
        ))}
      </div>
    </>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
