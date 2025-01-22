import Image from "next/image";
import type React from "react";
import { GitHub, LinkedIn } from "@/svgs";
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
          do more than just code greenfield apps, I have experience with legacy
          codebases, and can help you modernize your existing app. Or if you're
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
      <div className="mt-12">
        <p className="text-gray-300 text-lg">
          If you are technically inclined check out
        </p>
      </div>
    </div>
  );
};

export default Page;
