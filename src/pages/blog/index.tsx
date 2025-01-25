import { InferGetStaticPropsType } from "next";
import { getAllPostsMetaData } from "@/utils/posts";
import Link from "next/link";
import Image from "next/image";
export default function BlogListPage({
  allPostsMetaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  return (
    <>
      {/* <h1>Welcome to the Blog</h1> */}
      <div className="my-12 max-w-lg mx-2 ipad:mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-7xl">
        {allPostsMetaData.map((post, index) => {
          return (
            <Link
              href={`/blog/${post.slug}`}
              key={post.slug}
              className="border flex flex-col rounded-lg shadow-lg overflow-hidden hover:-translate-y-1"
            >
              <div className="flex-shrink-0">
                <Image
                  className="h-48 w-full object-cover hidden ipad:block"
                  src={post.heroImgUrl}
                  alt={post.title}
                  priority={index < 3} // first three images should not be lazy loaded
                  height={192}
                  width={384}
                />
              </div>
              <div className="flex-1 p-6 flex flex-col justify-between">
                <div className="flex-1">
                  <p className="text-xl font-semibold text-white">
                    {post.title}
                  </p>
                  <p className="mt-3 text-base text-gray-500">
                    {post.description}
                  </p>
                </div>
                <div className="mt-6 flex items-center">
                  <div className="flex-shrink-0">
                    <Image
                      className="h-10 w-10 rounded-full"
                      src={post.authorImgUrl}
                      alt={post.author}
                      height={40}
                      width={40}
                    />
                  </div>
                  <div className="ml-3">
                    <p className="text-sm font-medium text-gray-500">
                      {post.author}
                    </p>
                    <div className="flex space-x-1 text-sm text-gray-700">
                      <time>{post.date}</time>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  const allPostsMetaData = getAllPostsMetaData();
  return {
    props: {
      allPostsMetaData,
    },
  };
}
