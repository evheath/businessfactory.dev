import { InferGetStaticPropsType } from 'next'
import { getAllPostsMetaData } from '@/utils/posts';
import Link from 'next/link'

export default function BlogListPage(
  { allPostsMetaData }: InferGetStaticPropsType<typeof getStaticProps>
) {
  return (
    <>
      <h1>Welcome to the Blog</h1>
      {allPostsMetaData.map(({ slug, title, date, author }) => {
        return (
          <div key={slug}>
            <Link href={`/blog/${slug}`}>
              {title}
            </Link>
            <p>{date} by {author}</p>
          </div>
        )
      })}
    </>
  )
}

export async function getStaticProps() {
  const allPostsMetaData = getAllPostsMetaData();
  return {
    props: {
      allPostsMetaData
    },
  }
}