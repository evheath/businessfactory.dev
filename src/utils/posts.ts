import fs from "fs";
import path from "path";
import matter from "gray-matter";

const postsDirectory = path.join(process.cwd(), "src/posts");

export function getAllPostSlugs() {
  const fileNames = fs.readdirSync(postsDirectory);
  return fileNames.map((fileName) => {
    return {
      params: {
        slug: fileName.replace(/\.md$/, ""),
      },
    };
  });
}

interface PostMetaData {
  date: string;
  title: string;
  slug: string;
  description: string;
  author: string;
  authorImgUrl: string;
  heroImgUrl: string;
  technologies: string[];
}

function getMatterResult(slug: string) {
  const fullPath = path.join(postsDirectory, `${slug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  return matter(fileContents);
}

export function getPostMetaData(slug: string) {
  return getMatterResult(slug).data as PostMetaData;
}

export function getAllPostsMetaData(): PostMetaData[] {
  const allSlugs = getAllPostSlugs();
  const allPostsData = allSlugs.map((slug) => {
    return getPostMetaData(slug.params.slug);
  });
  // Sort posts by date
  return allPostsData.sort((a, b) => {
    if (a.date < b.date) {
      return 1;
    } else {
      return -1;
    }
  });
}

export function getPostContent(slug: string): string {
  return getMatterResult(slug).content;
}
