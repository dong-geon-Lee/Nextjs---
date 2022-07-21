import { getProviders, signIn } from "next-auth/react";
import Header from "../../components/Header";

export default function Signin({ providers }) {
  const data = Object.values(providers);

  console.log(data);

  return (
    <div>
      <Header />
      <div className="mt-44">
        {data.map((item) => (
          <div
            className="flex flex-col justify-center items-center"
            key={item.id}
          >
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png"
              alt="image-google"
              className="w-52"
            />

            <p className="my-10">
              This website is created for learning purposes
            </p>

            <button
              className="bg-red-400 text-white p-3 rounded-lg hover:bg-red-500"
              onClick={() => signIn(item.id, { callbackUrl: "/" })}
            >
              Sign in with {item.name}
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: { providers },
  };
}
