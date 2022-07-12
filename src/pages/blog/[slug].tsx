import Markdown from '@/components/Markdown';
import Head from 'next/head'
import { getAllPostSlugs, getPostContent, getPostMetaData } from '@/utils/posts';
import { GetStaticPaths, GetStaticPropsContext, InferGetStaticPropsType } from 'next';
import Image from 'next/future/image';
export default function BlogPostPage(
  { content, metaData }: InferGetStaticPropsType<typeof getStaticProps>
) {
  const { title, date, author, description } = metaData;
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <div className="relative py-16 bg-white overflow-hidden">
        <div className="hidden lg:block lg:absolute lg:inset-y-0 lg:h-full lg:w-full">
          {/* background drawing */}
          <div className="relative h-full text-lg max-w-prose mx-auto" aria-hidden="true">
            <svg
              className="absolute top-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="74b3fd99-0a6f-4271-bef2-e80eeafdf357"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#74b3fd99-0a6f-4271-bef2-e80eeafdf357)" />
            </svg>
            <svg
              className="absolute top-1/2 right-full transform -translate-y-1/2 -translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="f210dbf6-a58d-4871-961e-36d5016a0f49"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
            </svg>
            <svg
              className="absolute bottom-12 left-full transform translate-x-32"
              width={404}
              height={384}
              fill="none"
              viewBox="0 0 404 384"
            >
              <defs>
                <pattern
                  id="d3eb07ae-5182-43e6-857d-35c643af9034"
                  x={0}
                  y={0}
                  width={20}
                  height={20}
                  patternUnits="userSpaceOnUse"
                >
                  <rect x={0} y={0} width={4} height={4} className="text-gray-200" fill="currentColor" />
                </pattern>
              </defs>
              <rect width={404} height={384} fill="url(#d3eb07ae-5182-43e6-857d-35c643af9034)" />
            </svg>
          </div>
        </div>
        <div className="relative px-4 sm:px-6 lg:px-8">

          <div className="mt-6 mx-auto  max-w-3xl flex flex-col space-y-2" >
            <h1 className='text-center font-serif font-black text-6xl'>{title}</h1>
            <div className='flex justify-between space-x-4 items-center'>
              <div className="text-base text-indigo-600 font-semibold tracking-wide flex items-center space-x-4 ">
                <Image className='h-10 w-10 rounded-full' src={metaData.authorImgUrl} alt={metaData.author} />
                <p>{author}</p>
              </div>
              <p>{date}</p>
            </div>
            <Image className='w-full rounded-xl' src={metaData.heroImgUrl} alt={metaData.title} priority={true} />
          </div>
          <Markdown className="mt-6 prose prose-indigo prose-lg text-gray-500 mx-auto space-y-8 flex flex-col">{content}</Markdown>
        </div>
      </div>
    </>
  )
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
}

