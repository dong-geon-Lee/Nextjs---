import { useSession, signIn, signOut } from "next-auth/react";

export default function User({ className }) {
  const { data: session } = useSession();

  if (session) {
    return (
      <>
        <img
          src={session.user.image}
          alt="google-user"
          onClick={signOut}
          className={`h-10 rounded-full p-1 cursor-pointer hover:bg-gray-200 ${className}`}
        />
      </>
    );
  }

  return (
    <>
      <button
        onClick={signIn}
        className={`px-5 py-2 text-white bg-blue-500 hover:shadow-lg hover:brightness-105 rounded-lg ${className}`}
      >
        Sign in
      </button>
    </>
  );
}
