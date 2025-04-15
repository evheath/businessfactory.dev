"use client";

import { useState } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Image from "next/image"
import { IconLink } from "./icon-link";
import { cn } from "@/lib/utils";

type FrameType = "web" | "mobile" | "none";

interface Screenshot {
  url: string;
  frameType: FrameType;
}
const Frame = ({
  children,
  frameType,
}: {
  children: React.ReactNode;
  frameType: FrameType;
}) => {
  switch (frameType) {
    case "web":
      return (
        <div className="rounded-lg overflow-hidden bg-gray-800 border border-gray-700 h-full w-full">
          <div className="h-8 bg-gray-900 flex items-center px-4">
            <div className="flex space-x-2">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
            </div>
          </div>
          <div className="p-1 relative h-full w-full">
            {children}
          </div>
        </div>
      )
    // case "mobile":
    //   return (
    //     // <div className="rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 max-w-[300px] mx-auto">
    //     <div className="rounded-3xl overflow-hidden bg-gray-800 border border-gray-700 max-w-[300px] mx-auto">
    //       <div className="h-6 bg-gray-900 flex items-center justify-center">
    //         <div className="w-16 h-1 bg-gray-700 rounded-full"></div>
    //       </div>
    //       <div className="p-1">
    //         <div className="aspect-[9/16] relative">{children}</div>
    //       </div>
    //       <div className="h-8 bg-gray-900 flex items-center justify-center">
    //         <div className="w-8 h-8 rounded-full border-2 border-gray-700"></div>
    //       </div>
    //     </div>
    //   );
    default:
      return <>{children}</>

  };
}

const GithubIcon = () => <svg className="h-5 w-5" role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" /></svg>


export default function ProjectCard({
  title,
  url,
  repo,
  technologies,
  screenshots,
  description,
}: {
  title: string;
  url?: string;
  repo?: string;
  technologies: string[];
  screenshots: Screenshot[];
  description: string;
}) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const nextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % screenshots.length);
  };

  const prevImage = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + screenshots.length) % screenshots.length
    );
  };

  const currentScreenshot = screenshots[currentImageIndex];

  if (!currentScreenshot) return null;

  return (
    <Card className="w-full max-w-2xl mx-auto dark">
      <CardHeader>
        <div className="w-full flex space-x-1">
          <CardTitle className="text-2xl font-bold">{title}</CardTitle>
          {!!url && <IconLink url={url} size="sm" />}
          {!!repo && <IconLink url={repo} icon={<GithubIcon />} size="sm" />}
        </div>
        <div className="flex flex-wrap gap-2 mt-2">
          {technologies.map((tech) => (
            <Badge
              key={tech}
              variant="outline"
              className="bg-gray-800 text-gray-200"
            >
              {tech}
            </Badge>
          ))}
        </div>
      </CardHeader>
      <CardContent>
        <div
          className="relative mb-4 cursor-pointer w-[560px] max-w-[560px] aspect-[16/9] mx-auto"
          onClick={() => {
            // open image in new tab
            window.open(currentScreenshot.url, "_blank");
          }}
        >
          <Frame frameType={currentScreenshot.frameType}>
            <Image
              src={currentScreenshot.url}
              alt="screenshot"
              className={cn("object-scale-down rounded h-full w-full")}
              placeholder="blur"
              blurDataURL="/loading.gif"
              priority={currentImageIndex === 0}
              fill
              sizes="560px"
            />
          </Frame>
          <div className="absolute inset-0 flex items-center justify-between p-4">
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                prevImage();
              }}
              className="rounded-full bg-gray-800 text-gray-200 opacity-70 hover:opacity-100"
              aria-label="Previous image"
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            <Button
              variant="secondary"
              size="icon"
              onClick={(e) => {
                e.stopPropagation();
                nextImage();
              }}
              className="rounded-full bg-gray-800 text-gray-200 opacity-70 hover:opacity-100"
              aria-label="Next image"
            >
              <ChevronRight className="h-4 w-4" />
            </Button>
          </div>
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 flex gap-1">
            {screenshots.map((_, index) => (
              <div
                key={index}
                className={`w-2 h-2 rounded-full ${index === currentImageIndex ? "bg-gray-200" : "bg-gray-600"
                  }`}
              />
            ))}
          </div>
        </div>
        <CardDescription className="text-sm text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
    </Card >
  );
}
