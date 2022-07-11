import Link from "next/link";
import Image from 'next/future/image'

export default function Custom500() {
  return (
    <>
      <div className="min-h-full pt-16 pb-12 flex flex-col bg-white">
        <main className="flex-grow flex flex-col justify-center max-w-7xl w-full mx-auto px-4 sm:px-6 lg:px-8">
          <div className="py-16">
            <div className="text-center">
              <p className="text-sm font-semibold text-indigo-600 uppercase tracking-wide">500 error</p>
              <h1 className="mt-2 text-4xl font-extrabold text-gray-900 tracking-tight sm:text-5xl">Server error.</h1>
              <p className="mt-2 text-base text-gray-500">Something went wrong on our end.</p>
              <div className="mt-6">
                <Link className="text-base font-medium text-indigo-600 hover:text-indigo-500" href={"/"}>
                  Go back home<span aria-hidden="true"> &rarr;</span>
                </Link>
              </div>
            </div>
          </div>
        </main>
      </div>
    </>
  )
}
