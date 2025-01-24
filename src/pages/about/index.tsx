import Image from "next/image";
import type React from "react";
import {
  GitHub,
  LinkedIn,
  NextIcon,
  PostgreSQL,
  ReactIcon,
  TailwindIcon,
  TypescriptIcon,
} from "@/svgs";
import { SVGButton } from "@/components/SVGButton";

const Page = () => {
  const yearsExperience = new Date().getFullYear() - 2018;
  return (
    <div className="m-24">
      <div className="sm:flex items-center space-x-3">
        <Image
          className="h-36 w-36 rounded-full"
          src={
            "https://firebasestorage.googleapis.com/v0/b/business-factory-30cbd.appspot.com/o/profile.jpg?alt=media&token=fd885feb-73c5-4e85-962b-eed81edff527"
          }
          alt={"Elliot Heath"}
          height={144}
          width={144}
        />
        <p className="text-white text-5xl font-medium font-sans">
          I'm Elliot Heath. I live in Madison, Wisconsin where I make apps.
        </p>
      </div>
      <div className="mt-6 max-w-3xl">
        <p className="text-gray-300 text-lg">
          For the last {yearsExperience} years, I have been building bespoke
          apps for small businesses. There is nothing more satisfying than
          seeing a client's project come to life. Most modern businesses need a
          some sort of web or mobile presence to stay competitive. Where I come
          in is when the cookie-cutter solutions don't cook the cuttie...🤔 If
          you have special user flows, unique data requirements, or want to
          build an industry defining app your competitors{" "}
          <span className="underline">must</span> subscribe to, I'm your guy. I
          can do more than greenfield apps too. I have experience with legacy
          codebases and can help you modernize your existing app. Or, if your
          developer left you high and dry, I can help you pick up the pieces and
          train new employees.
        </p>
      </div>
      <div className="flex items-center mt-4 space-x-2">
        <SVGButton
          href="https://www.linkedin.com/in/elliotheath/"
          label="LinkedIn"
        >
          <LinkedIn />
        </SVGButton>
        <SVGButton href="https://github.com/evheath" label="GitHub">
          <GitHub />
        </SVGButton>
      </div>
      <div className="mt-12 max-w-3xl space-y-1">
        <p className="text-gray-200 text-3xl">My Tech Stack</p>
        <p className="text-gray-300 text-lg">
          Not all technologies are created equal. You can view a full list my
          technical experience further below, but right here are my strongest
          skills.
        </p>
        <div className="text-gray-200  flex items-center space-x-2">
          <p className="w-20">Language:</p>
          <SVGButton>
            <TypescriptIcon />
          </SVGButton>
          <p className="font-semibold">TypeScript</p>
          <p>- Javascript, but better.</p>
        </div>
        <div className="text-gray-200  flex items-center space-x-2">
          <p className="w-20">Frontend:</p>
          <SVGButton>
            <ReactIcon />
          </SVGButton>
          <p className="font-semibold">React</p>
          <p>- Well documented, works for mobile, and supports TypeScript.</p>
        </div>
        <div className="text-gray-200  flex items-center space-x-2">
          <p className="w-20">Backend:</p>
          <SVGButton>
            <NextIcon />
          </SVGButton>
          <p className="font-semibold">Next.js</p>
          <p>
            - The easiest way to go serverless but can still be self-hosted if
            needed.
          </p>
        </div>
        <div className="text-gray-200  flex items-center space-x-2">
          <p className="w-20">Styling:</p>
          <SVGButton>
            <TailwindIcon />
          </SVGButton>
          <p className="font-semibold">Tailwind</p>
          <p>
            - If I don't use tailwind I have to Google flexbox syntax every time
            😂
          </p>
        </div>
        <div className="text-gray-200  flex items-center space-x-2">
          <p className="w-20">Database:</p>
          <SVGButton>
            <PostgreSQL />
          </SVGButton>
          <p className="font-semibold">PostgreSQL</p>
          <p>- If it ain't broke...it's probably not mongo</p>
        </div>
      </div>
      <div className="mt-12 max-w-3xl space-y-1">
        <h3 className="text-gray-200 text-3xl">Technical Experience</h3>
        <p className="text-gray-300 text-lg">
          In addition to my preferred tech stack, here are the technologies I
          have experience with:
        </p>
        <ul className="text-gray-200 list-disc list-inside">
          <li>Frontend: vue, angular, jquery </li>
          <li>Styling: css, bootstrap, scss, sass</li>
          <li>Backend: express, symfony, rails</li>
          <li>Languages: javascript, ruby, php, html, dart, java</li>
          <li>Databases: mongodb, mysql, sqlite, firebase realtime</li>
          <li>Mobile: react native, flutter</li>
          <li>
            Platforms: vercel, supabase, firebase, aws, heroku, planetscale
          </li>
          <li>
            APIs: twilio, sendgrid, shopify, bigcommerce, shippo, fedex,
            ethereal.email, outlook, clerk
          </li>
          <li>
            Packages: prisma, trpc, zod, date-fns, lodash, moment, turborepo,
            jasmine, pdf-lib
          </li>
          <li>
            Tools: git, postman, trello, figma, slack, docker, vite, vscode
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
