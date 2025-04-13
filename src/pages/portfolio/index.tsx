import ProjectCard from "@/components/portfolio-project-card";
const Page = () => {
  return (
    <div className="my-6 mx-2">
      <h1 className="text-white text-5xl font-medium font-sans text-center">
        My Portfolio
      </h1>
      <div className="my-8" />
      <ProjectCard
        title="B&W"
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

      <div className="my-8" />
      <ProjectCard
        title="LMB"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "React Query",
          "React Table",
          "tRPC",
          "Clerk",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3Bb6Q8CV0Of2YukCVsz6SM3vZAL8RJ7ecDgxX",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3oXqAG0Qc6ZoznOmRSL5qwY0BEtCNeKgJ2xAy",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc36jRkmsZJilPex9gN8w2YE31Kmf70MGFpdOWh",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3u502OSkxjFUVdMbtwrXSIcyRDfPnQGLzqT20",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3VeH0RCwGEMl0AhmbpdrWOHDsqKQ5xaIoi6zR",
            type: "web",
          },
        ]}
        description="A web dashboard for a small med-spa. Some notable features include tracking client's treatments and services, realtime chat, and a trouble-ticket system."
      />
      <div className="my-8" />
      <ProjectCard
        title="DALL-E Hangman"
        url="https://dallehangman.com"
        repo="https://github.com/evheath/dalle-hangman"
        technologies={[
          "Angular",
          "TypeScript",
          "RXJS",
          "Firebase",
          "Firestore",
          "Tailwind",
          "MaterialUI",
          "OpenAI",
          "DALL-E",
          "Craiyon",
          "Dice Bear",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3DGHau5nTRKfeUYqwXrB1AgzyH4J6ONIknCsa",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3uyh8G5kxjFUVdMbtwrXSIcyRDfPnQGLzqT20",
            type: "web",
          },
        ]}
        description="A web game where users guess the phrase that was used to create AI-generated images"
      />
      <div className="my-8" />
      <ProjectCard
        title="Wedding App"
        url="https://elliotandtina.web.app"
        repo="https://github.com/evheath/elliotandtina"
        technologies={[
          "Angular",
          "TypeScript",
          "RXJS",
          "Firebase",
          "Firestore",
          "SCSS",
          "MaterialUI",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc37NyIRBjKyp7WizfuerN4wJadgCIkEPGRt56A",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3thFDqWg8kdyevDmi6CuE0LpZQ9xJT3b1go2A",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3rnG09FIPvCa5mVWKb4HB3cJ7ysDiSUZe69hk",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3WORQKZAtv06UuhKQHOZDsE7BGe9gF1y8AJbf",
            type: "web",
          },
        ]}
        description="A zola/knot like website for guests to RSVP, read about the venue, find lodging, and upload photos."
      />
      <div className="my-8" />
      <ProjectCard
        title="SDC"
        technologies={[
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Express",
          "MongoDB",
          "Docker",
          "Socket.io",
          "Shopify",
          "Shippo",
          "FedEx",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3XV7HilsoHDWST9pECJxRns4wiVcKt7UN8yAh",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc31U7ZOW34wYTdxKalZJkE9OzV0WejpUAotr7B",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3CCo4LbqMaVfkOdy2m1ugYWxGE3wRPIT4vJlo",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3RpoNSXiFheHm6zlxdYoMXvpPLOCasAcjuqBy",
            type: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3p8DsnJvO6WnDprauM4BT5jbycGgUFEXz3hNw",
            type: "web",
          },
        ]}
        description="Inventory and order management system for a small business. Employees on the factory floor have guided instructions on how to assemble products. This was a project I was brought on to fix after the original developer left the company. The inventory hierarchy is rather complex, requiring some algorithms I learned in college."
      />
    </div>
  );
};

export default Page;
