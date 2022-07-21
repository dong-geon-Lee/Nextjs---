import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          src={session.user.image}
          alt={session.user.name}
          onClick={signOut}
          className={`h-10 rounded-full p-1 hover:bg-gray-200 cursor-pointer ${className}`}
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={signIn}
        className="text-white bg-blue-500 px-5 py-2
      rounded-md hover:brightness-105 hover:shadow-md"
      >
        Sign in
      </button>
    </>
  );
}
