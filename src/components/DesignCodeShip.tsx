import Image from "next/image";
import { Button } from "./Button";

export default function DesignCodeShip({}) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              No need to have an entire app planned out beforehand. With our
              iterative process, your regular feedback will help
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
}
