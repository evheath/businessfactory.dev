import Image from "next/image";
import type React from "react";
import { GitHub, LinkedIn, NextIcon, PostgreSQL, ReactIcon } from "@/svgs";
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
          some sort of web or mobile presense to stay competitive. Where I come
          in is when the cookie-cutter solutions just don't cut it. If you have
          special user flows, unique data requirements, or want to build an
          industry defining app your competitors{" "}
          <span className="underline">must</span> subscribe to, I'm your guy. I
          can do more than greenfield apps too--I have experience with legacy
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
        <p className="text-gray-200  flex items-center space-x-2">
          <span className="w-24">Database:</span>
          <SVGButton>
            <PostgreSQL />
          </SVGButton>
          <span className="font-semibold">PostgreSQL</span>
          <span>- A balance of safety and flexiblity.</span>
        </p>
        <p className="text-gray-200  flex items-center space-x-2">
          <span className="w-24">Frontend:</span>
          <SVGButton>
            <ReactIcon />
          </SVGButton>
          <span className="font-semibold">React</span>
          <span>- Well documented and also usable for mobile apps.</span>
        </p>
        <p className="text-gray-200  flex items-center space-x-2">
          <span className="w-24">Backend:</span>
          <SVGButton>
            <NextIcon />
          </SVGButton>
          <span className="font-semibold">Next.js</span>
          <span>- Largely carried by Vercel's first class support.</span>
        </p>
      </div>
    </div>
  );
};

export default Page;
