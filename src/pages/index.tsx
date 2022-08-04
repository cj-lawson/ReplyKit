import type { NextPage } from "next";
import Head from "next/head";

import { useAuth } from "../lib/auth";

const Home: NextPage = () => {
  const auth = useAuth();

  return (
    <>
      <Head>
        <title>Fast Feedback</title>
        <meta name="description" content="Generated by create-t3-app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="container mx-auto flex flex-col items-center justify-center h-screen p-4">
        <button
          onClick={(e) => auth.signinWithGithub()}
          className="active:scale-95 md:mr-5 px-4 py-1 text-sm sm:text-lg rounded-[3px] bg-gray-900 text-white"
        >
          Sign In
        </button>
        <div>{auth?.user?.email}</div>

        {auth?.user && (
          <button
            onClick={(e) => auth.signout()}
            className="active:scale-95 md:mr-5 px-4 py-1 text-sm sm:text-lg rounded-[3px] bg-gray-900 text-white"
          >
            Sign Out
          </button>
        )}
      </main>
    </>
  );
};

export default Home;
