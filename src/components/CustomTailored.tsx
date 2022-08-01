import Image from 'next/future/image'
import Link from 'next/link'

export default function CustomTailored({ }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="hidden lg:block lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/left/6.svg`} priority={true} />
            <Link target={"_blank"} className="text-gray-300" href="https://lucid.pixsellz.io/">SVGs by pixsellz</Link>

          </div>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 sm:text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              When your requirements go beyond what a template can offer, throwaway your cookie-cutter because you need an app
            </p>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-indigo-500">Custom tailored</span>
              <span className="block">For your business</span>
            </h1>
            <p className="mt-3 text-base text-gray-900 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Nobody understands your workflow better than you. Which is why Business Factory works with its clients to build apps from scratch.
            </p>

          </div>
        </div>

      </div>
    </>
  )
}