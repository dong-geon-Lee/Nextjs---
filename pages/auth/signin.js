import Header from "../../components/Header";
import Image from "next/image";
import { getProviders, signIn } from "next-auth/react";

export default function Signin({ providers }) {
  const datas = Object.values(providers);

  return (
    <>
      <Header />

      <div className="mt-40">
        <div className="flex flex-col items-center">
          <Image
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
            width="180"
            height="60"
            objectFit="cover"
          />

          <p className="text-sm italic text-gray-700 my-7">
            This website is created for learning purposes
          </p>

          {datas.map((data) => (
            <div key={data.id}>
              <button
                className="bg-red-400 text-white p-3 rounded-lg hover:bg-red-500"
                onClick={() => signIn(data.id, { callbackUrl: "/" })}
              >
                Sign in with {data.name}
              </button>
            </div>
          ))}
        </div>
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
