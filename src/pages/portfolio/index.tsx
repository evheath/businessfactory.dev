import ProjectCard from "@/components/portfolio-project-card";
const Page = () => {
  return (
    <div className="m-24">
      <h1 className="text-white text-5xl font-medium font-sans">
        My Portfolio
      </h1>
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
        images={[
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ]}
        description="A TurboTax-like web app to help an accountant manage her clients. Allows for easy data entry and file sharing. Some notable features include passwordless authentication, email notifications, and role-based access control."
      />
    </div>
  );
};

export default Page;
