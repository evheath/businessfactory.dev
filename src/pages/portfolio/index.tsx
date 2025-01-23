import ProjectCard from "@/components/portfolio-project-card";
const Page = () => {
  return (
    <div className="m-24">
      <h1 className="text-white text-5xl font-medium font-sans">
        My Portfolio
      </h1>
      <div className="my-4" />
      <ProjectCard
        title="Black and White"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "PostgreSQL",
          "Prisma",
          "Supabase",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3NesQ7GXaSrYwxLb3fK6g2jziy450WVAeIOPF",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3jIPFAK6JrV6YeXMTZEj9DCwqpNWbAGIyQo7S",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3E8K5vzQnNtfC9iRvMPeVBUJqOIuQ6r4Xck3S",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3wIwzdhWEC53iFNTVDZo7pylu60YrG9Q8qhKm",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3HMgKsBUbBch2ST5It8JGr6Ln3YDsNavuyExK",
            type: "web",
          },
        ]}
        description="A TurboTax-like web app to help an accountant manage her clients. Allows for easy data entry and file sharing. Some notable features include passwordless authentication, email notifications, and role-based access control."
      />
    </div>
  );
};

export default Page;
