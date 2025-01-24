import Markdown from "@/components/Markdown";
import Head from "next/head";
import {
  getAllPostSlugs,
  getPostContent,
  getPostMetaData,
} from "@/utils/posts";
import {
  GetStaticPaths,
  GetStaticPropsContext,
  InferGetStaticPropsType,
} from "next";
import Image from "next/image";
export default function BlogPostPage({
  content,
  metaData,
}: InferGetStaticPropsType<typeof getStaticProps>) {
  const { title, date, author, description } = metaData;
  return (
    <>
      <Head>
        <meta name="description" content={description} />
      </Head>
      <div className="relative py-16 overflow-hidden">
        <div className="relative px-4 sm:px-6 lg:px-8">
          <div className="mt-6 mx-auto  max-w-3xl flex flex-col space-y-2">
            <h1 className="text-white text-center font-serif font-black text-6xl">
              {title}
            </h1>
            <div className="flex justify-between space-x-4 items-center">
              <div className="text-base text-gray-500 font-semibold tracking-wide flex items-center space-x-4 ">
                <Image
                  className="h-10 w-10 rounded-full"
                  src={metaData.authorImgUrl}
                  alt={metaData.author}
                  height={40}
                  width={40}
                />
                <p>{author}</p>
              </div>
              <p className="text-gray-500">{date}</p>
            </div>
            <Image
              className="w-full rounded-xl"
              src={metaData.heroImgUrl}
              alt={metaData.title}
              priority={true}
              height={400}
              width={800}
            />
          </div>
          <Markdown className="bg-black mt-6 prose prose-indigo prose-code:text-purple-500 prose-lg text-gray-500 mx-auto space-y-8 flex flex-col">
            {content}
          </Markdown>
        </div>
      </div>
    </>
  );
}
export function getStaticProps({ params }: GetStaticPropsContext) {
  const content = getPostContent(params!.slug as string);
  const metaData = getPostMetaData(params!.slug as string);
  return {
    props: {
      content,
      metaData,
    },
  };
}

// export async function getStaticPaths() {
export const getStaticPaths: GetStaticPaths = () => {
  const paths = getAllPostSlugs();
  return {
    paths,
    fallback: false,
  };
};
