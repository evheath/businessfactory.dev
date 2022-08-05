import type { NextPage } from "next";
import Head from "next/head";
import GetItBuilt from "@/components/GetItBuilt";
import CustomTailored from "@/components/CustomTailored";
import GetALegUp from "@/components/GetALegUp";
import RevenueStreams from "@/components/RevenueStreams";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Business Factory</title>
      </Head>
      <main>
        <div className="pt-5 mx-auto max-w-[110rem]  lg:px-8">
          <GetItBuilt />
          <CustomTailored />
          <GetALegUp />
          <RevenueStreams/>
        </div>

      </main>
    </>
  );
};

export default Home;
