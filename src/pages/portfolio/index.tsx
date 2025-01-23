import { ProjectCard } from "@/components/portfolio-project-card";
const Page = () => {
  return (
    <div className="m-24">
      <h1 className="text-white text-5xl font-medium font-sans">
        My Portfolio
      </h1>
      <ProjectCard
        title="Awesome Web App"
        technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
        images={[
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
          "/placeholder.svg?height=400&width=600",
        ]}
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat."
      />
    </div>
  );
};

export default Page;
