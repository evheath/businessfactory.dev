import type { NextPage } from "next";
import Head from "next/head";


const Home: NextPage = () => {
  const deleteMe = `group inline-flex items-center justify-center rounded-full py-2 px-4 text-sm font-semibold focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 bg-blue-600 text-white hover:text-slate-100 hover:bg-blue-500 active:bg-blue-800 active:text-blue-100 focus-visible:outline-blue-600`

  return (
    <>
      <Head>
        <title>Business Factory</title>
      </Head>
    </>
  );
};

export default Home;
