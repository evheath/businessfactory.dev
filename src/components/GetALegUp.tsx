import Image from 'next/future/image'
import Link from 'next/link'

export default function GetALegUp({ }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">

        <div className="mx-auto max-w-md px-4 text-center sm:max-w-2xl sm:px-6 lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block">Get a leg up.</span>
            </h1>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              While your competition flounders with identical software, you will be boosting productivity with an app that allows you to
            </p>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-0 xl:text-6xl">
              <span className="block text-indigo-500">Focus on what your business does best</span>
            </h1>
          </div>
        </div>
        <div className="mt-12 lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/4.svg`} priority={true} />
            <Link target={"_blank"} className="text-gray-300" href="https://lucid.pixsellz.io/">SVGs by pixsellz</Link>

          </div>
        </div>
      </div>
    </>
  )
}