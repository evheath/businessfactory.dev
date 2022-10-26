import Image from 'next/future/image'

export default function CustomTailored({ }) {
  return (
    <>
      <div className="lg:grid lg:grid-cols-2 lg:gap-8">
        <div className="hidden lg:block lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/left/9.svg`}
              alt="Lucid SVG" />
          </div>
        </div>
        <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 text-center lg:px-0 lg:text-left lg:flex lg:items-center">
          <div className="lg:py-24">
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Nobody understands your workflow better than you. Which is why you need an app
            </p>
            <h1 className="mt-4 text-4xl tracking-tight font-extrabold text-black sm:mt-5 sm:text-6xl lg:mt-6 xl:text-6xl">
              <span className="block text-indigo-500">Custom tailored</span>
              <span className="block text-white">For your business</span>
            </h1>
            <p className="mt-3 text-base text-gray-400 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl">
              Why use a cookie-cutter app that wasn&apos;t built with your business in mind when you can...
            </p>

          </div>
        </div>
        <div className="block lg:hidden lg:m-0">
          <div className="mx-auto max-w-md px-4 sm:max-w-2xl sm:px-6 lg:max-w-none lg:px-0 flex flex-col items-center">
            <Image
              className="w-full"
              src={`/lucid/right/9.svg`}
              alt="Lucid SVG" />

          </div>
        </div>
      </div>
    </>
  )
}