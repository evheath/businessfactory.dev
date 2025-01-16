import { Button } from "@/components/Button";
import Image from "next/image";
import Link from "next/link";

const DesignCodeShip = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              No need to have an entire app planned out beforehand. With my
              iterative process and your regular feedback, we will
            </p>
            <h1 className="text-4xl tracking-tight font-extrabold text-black \ sm:text-6xl xl:text-6xl">
              <span className="block text-indigo-500">
                Design, Code, and Ship
              </span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              the perfect app for your business.
            </p>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Want a free consultation?
              <Button className="ml-5" href="/contact">
                Contact me
              </Button>
            </p>
          </div>
        </div>
        <div className="mt-12 lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/5.svg`}
              priority={true}
              alt="Lucid SVG"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const GetALegUp = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-white">Get a leg up.</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              With your own app, you can avoid the rat race of identical
              software, own all your data, boost productivity and
            </p>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-0 xl:text-6xl">
              <span className="block text-indigo-500">
                Focus on what your business does best
              </span>
            </h1>
          </div>
        </div>
        <div className="mt-12 lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/4.svg`}
              alt="Lucid SVG"
              width={100}
              height={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const CustomTailored = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="hidden lg:block lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/left/9.svg`}
              alt="Lucid SVG"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Nobody understands your workflow better than you. Which is why you
              need a bespoke app
            </p>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-indigo-500">Custom tailored</span>
              <span className="block text-white">For your business</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Why use a cookie-cutter app that wasn&apos;t built with your
              business in mind when you can...
            </p>
          </div>
        </div>
        <div className="block lg:hidden lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/9.svg`}
              alt="Lucid SVG"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const GetItBuilt = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-white">Need an app?</span>
              <span className="block text-indigo-500">Get it built</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Web, mobile, you name it I build it. Step into the one-stop-shop
              to turn <span className="font-bold">your</span> idea into a{" "}
              <span className="italic">real</span> app.
            </p>
          </div>
        </div>
        <div className="mt-12 lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/1.svg`}
              priority={true}
              alt="Lucid SVG"
              width={100}
              height={100}
            />
            <Link
              target={"_blank"}
              className="text-zinc-700"
              href="https://lucid.pixsellz.io/"
            >
              SVGs by pixsellz
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

const RevenueStreams = () => {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="hidden lg:block lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/left/16.svg`}
              alt="Lucid SVG"
              height={100}
              width={100}
            />
          </div>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-white">Open new revenue streams</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Through e-commerce, micro-transactions, one-time purchases,
              subscriptions, gift-cards, invoices and more.
            </p>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              When you own your own app, the possibilities are endless.
            </p>
          </div>
        </div>
        <div className="block lg:hidden lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/16.svg`}
              alt="Lucid SVG"
              height={100}
              width={100}
            />
          </div>
        </div>
      </div>
    </>
  );
};

const Home = () => {
  return (
    <main>
      <div className="pt-5 mx-auto max-w-[110rem]  lg:px-8">
        <GetItBuilt />
        <CustomTailored />
        <GetALegUp />
        <RevenueStreams />
        <DesignCodeShip />
      </div>
    </main>
  );
};

export default Home;
