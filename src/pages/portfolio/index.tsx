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
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3jIPFAK6JrV6YeXMTZEj9DCwqpNWbAGIyQo7S",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3E8K5vzQnNtfC9iRvMPeVBUJqOIuQ6r4Xck3S",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3wIwzdhWEC53iFNTVDZo7pylu60YrG9Q8qhKm",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3HMgKsBUbBch2ST5It8JGr6Ln3YDsNavuyExK",
            frameType: "web",
          },
        ]}
        description="A TurboTax-like web app to help an accountant manage her clients. Allows for easy data entry and file sharing. Some notable features include passwordless authentication, email notifications, and role-based access control."
      />

      <div className="my-8" />
      <ProjectCard
        title="LMB, web"
        technologies={[
          "React",
          "Next.js",
          "TypeScript",
          "Tailwind",
          "PostgreSQL",
          "Prisma",
          "Supabase",
          "Vercel",
          "React Query",
          "React Table",
          "tRPC",
          "Clerk",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3Bb6Q8CV0Of2YukCVsz6SM3vZAL8RJ7ecDgxX",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3oXqAG0Qc6ZoznOmRSL5qwY0BEtCNeKgJ2xAy",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc36jRkmsZJilPex9gN8w2YE31Kmf70MGFpdOWh",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3u502OSkxjFUVdMbtwrXSIcyRDfPnQGLzqT20",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3VeH0RCwGEMl0AhmbpdrWOHDsqKQ5xaIoi6zR",
            frameType: "web",
          },
        ]}
        description="A web dashboard made for employees of a med-spa. Some notable features include tracking client's treatments and services, realtime chat, and a trouble-ticket system."
      />
      <div className="my-8" />
      <ProjectCard
        title="LMB, mobile"
        technologies={[
          "React Native",
          "TypeScript",
          "React Navigation",
          "React Hook Form",
          "Android",
          "iOS",
          "Nativewind",
          "tRPC",
          "Clerk",
          "TestFlight",
          "Expo",
          "UIKitten",
          "Sentry.io",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3qeBvTLKDajHVrOtZB2cLuv6A7fwMxb3KXQeN",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3FyQC3Oq1dCGbsVJYgx3B7vWtHMLwmoQRucKD",
            frameType: "none",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3vFRF5aEQTksKBVep7nZ0AbjP9NR1mIxJfig2",
            frameType: "mobile"
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3a3aAghbDSl1mBp7IY2wRhknWdNsyFEJVgei6",
            frameType: "mobile"
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc37yVCNTjKyp7WizfuerN4wJadgCIkEPGRt56A",
            frameType: "none"
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3q7nqyoDajHVrOtZB2cLuv6A7fwMxb3KXQeNG",
            frameType: "mobile"
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3N9vOKiXaSrYwxLb3fK6g2jziy450WVAeIOPF",
            frameType: "none"
          },
        ]}
        description="The same med spa as above, but this is the accompanying mobile app for their clients. Notable features include text/image chat, over-the-air updates, a treatment calendar, and push notifications."
      />
      <div className="my-8" />
      <ProjectCard
        title="DALL-E Hangman"
        url="https://dallehangman.com"
        repo="https://github.com/evheath/dalle-hangman"
        technologies={[
          "Angular",
          "TypeScript",
          "RxJS",
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
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3uyh8G5kxjFUVdMbtwrXSIcyRDfPnQGLzqT20",
            frameType: "web",
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
          "RxJS",
          "Firebase",
          "Firestore",
          "SCSS",
          "MaterialUI",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc37NyIRBjKyp7WizfuerN4wJadgCIkEPGRt56A",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3thFDqWg8kdyevDmi6CuE0LpZQ9xJT3b1go2A",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3rnG09FIPvCa5mVWKb4HB3cJ7ysDiSUZe69hk",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3WORQKZAtv06UuhKQHOZDsE7BGe9gF1y8AJbf",
            frameType: "web",
          },
        ]}
        description="A zola/knot like website for guests to RSVP, read about the venue, find lodging, and upload photos."
      />
      <div className="my-8" />
      <ProjectCard
        title="Chessbots"
        url="https://apkcombo.com/chess-bots/com.chessbots.mobile/"
        repo="https://github.com/evheath/chessbots-flutter"
        technologies={[
          "Flutter",
          "Android",
          "iOS",
          "Dart",
          "RXDart",
          "Firebase",
          "Firestore",
          "Crashlytics",
          "MaterialUI",
          "Google Play",
          "TestFlight",
          "Fastlane",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3wBc0BNWEC53iFNTVDZo7pylu60YrG9Q8qhKm",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3cs7Bc4bNs7GDua9eRjCTFmZ4LtMxUiX1crNK",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3eCvSfRuOZBwS4FrA1GinMKYH6hqVQREpW8tT",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3tMNAEf8kdyevDmi6CuE0LpZQ9xJT3b1go2Al",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3N7eEeiPXaSrYwxLb3fK6g2jziy450WVAeIOP",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3tDVg9t8kdyevDmi6CuE0LpZQ9xJT3b1go2Al",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3vt3YLbEQTksKBVep7nZ0AbjP9NR1mIxJfig2",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3NEiTGwXaSrYwxLb3fK6g2jziy450WVAeIOPF",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3oPa8RVc6ZoznOmRSL5qwY0BEtCNeKgJ2xAyk",
            frameType: "mobile",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3dYXj0FKwYoUuWvZTFzq4yt5MRQ2GLSgBKm60",
            frameType: "mobile",
          },
        ]}
        description="A mobile game where users build, battle, and upgrade chess bots. The more battles you win, the more sophisticated your bot can get!"
      />
      <div className="my-8" />
      <ProjectCard
        title="SDC"
        technologies={[
          "HTML",
          "CSS",
          "JavaScript",
          "Node.js",
          "Jasmine",
          "Github Actions",
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
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc31U7ZOW34wYTdxKalZJkE9OzV0WejpUAotr7B",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3CCo4LbqMaVfkOdy2m1ugYWxGE3wRPIT4vJlo",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3RpoNSXiFheHm6zlxdYoMXvpPLOCasAcjuqBy",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3p8DsnJvO6WnDprauM4BT5jbycGgUFEXz3hNw",
            frameType: "web",
          },
        ]}
        description="Inventory and order management system for a small business. Employees on the factory floor have guided instructions on how to assemble products. This was a project I was brought on to fix after the original developer left the company. The inventory hierarchy is rather complex, requiring some algorithms I learned in college."
      />
      <div className="my-8" />
      <ProjectCard
        title="Civfinder"
        repo="https://github.com/evheath/civfinder"
        url="https://civfinder.com/"
        technologies={[
          "Angular",
          "Typescript",
          "RxJS",
          "Ngx Graph",
          "Firebase",
          "SCSS",
          "Material UI",
        ]}
        screenshots={[
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3mQ24XMawjTh8KDAPJnC9eBuiNz7IXqRfdlLQ",
            frameType: "web",
          },
          {
            url: "https://o8jsjsxk9g.ufs.sh/f/Y3NBzhpqodc3jsqKZS6JrV6YeXMTZEj9DCwqpNWbAGIyQo7S",
            frameType: "web",
          },
        ]}
        description="A fun, Age of Empires II inspired web app. Find which AoE2 civilization has your desired units and technologies. I built this after studying graph theory during my CS degree."
      />
    </div>
  );
};

export default Page;
