import type { NextPage } from "next";
import Head from "next/head";
import GetItBuilt from "@/components/GetItBuilt";
import CustomTailored from "@/components/CustomTailored";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Business Factory</title>
      </Head>
      <main>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <GetItBuilt />
            <CustomTailored />
          </div>
        </div>

      </main>
    </>
  );
};

export default Home;
