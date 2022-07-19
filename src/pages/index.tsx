import type { NextPage } from "next";
import Head from "next/head";
import Image from 'next/future/image'
import Link from "next/link";

const Home: NextPage = () => {

  return (
    <>
      <Head>
        <title>Business Factory</title>
      </Head>
      <main>
        <div className="pt-10 sm:pt-16 lg:pt-8 lg:pb-14 lg:overflow-hidden">
          <div className="mx-auto max-w-7xl lg:px-8">
            <div className="lg:grid lg:grid-cols-2 lg:gap-8">
              <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
                <div className="lg:py-24">
                  <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
                    <span className="block">Need an app?</span>
                    <span className="block text-indigo-500">Get it built</span>
                  </h1>
                  <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
                    Web or mobile, I have you covered. Business Factory is a one-stop-shop to turn your idea into a real app.
                  </p>

                </div>
              </div>
              <div className="mt-12 lg:m-0">
                <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
                  <Image
                    className="w-full"
                    src={`/lucid/right/1.svg`} priority={true} />
                  <Link className="text-gray-300" href="https://lucid.pixsellz.io/">SVGs by Lucid </Link>

                </div>
              </div>
            </div>
          </div>
        </div>

        {/* More main page content here... */}
      </main>
    </>
  );
};

export default Home;
